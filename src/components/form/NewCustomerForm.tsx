import { useState } from 'react';
import { Form, Formik, FieldArray } from 'formik';
import axios from 'axios';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';

import CustomerDetailsSection from './formSections/CustomerDetailsSection';
import { Customer } from '../../types';
import {
  newCustomerValidationSchema,
  newCustomerInitialValues,
} from '../../schemas/newCustomerSchema';
import { toastifyConfig } from '../../schemas/toastifySchema';
import OrganizationDetailsSection from './formSections/OrganizationDetailsSection';
import BankAccountsSection from './formSections/BankAccountsSection';
import MetaSection from './formSections/MetaSection';
import TextInput from './formElements/TextInput';
import InvoiceEmailsSection from './formSections/InvoiceEmailsSection';

const NewCustomerForm = ({
  handleCloseModal,
  handleAddCustomer,
}: {
  handleCloseModal: () => void;
  handleAddCustomer: (addedCustomer: Customer) => void;
}) => {
  const handleRemoveBankAccountClick =
    (removeBankAccount: () => void, index: number) => () => {
      if (index === defaultBankAccountIdx) {
        setDefaultBankAccountIdx(0);
      } else if (index < defaultBankAccountIdx) {
        setDefaultBankAccountIdx(prev => prev - 1);
      }
      removeBankAccount();
    };

  const [defaultBankAccountIdx, setDefaultBankAccountIdx] = useState(0);

  const defaultBankAccountSwitchClickHandler = (index: number) => {
    setDefaultBankAccountIdx(index);
  };

  return (
    <>
      <Formik
        initialValues={newCustomerInitialValues}
        validationSchema={newCustomerValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post<Customer>('http://localhost:8080/customers', {
              name: values.customerName,
              email: values.customerEmail,
              deferral_days: values.deferralDays,
              credit_limit: values.creditLimit,
              organization: {
                name: values.organizationName,
                inn: values.inn,
                kpp: values.kpp,
                ogrn: values.ogrn,
                addr: values.organizationAddr,
                bank_accounts: values.bankAccounts.map((el, index) => {
                  return { ...el, isDefault: index === defaultBankAccountIdx };
                }),
              },
              invoice_emails: values.invoiceEmails,
              meta: values.meta.reduce(
                (obj, d) => Object.assign(obj, { [d.key]: d.value }),
                {}
              ),
            })
            .then(resp => {
              setSubmitting(false);
              handleAddCustomer(resp.data);
              toast.success('Сохранено', toastifyConfig as ToastOptions);
              handleCloseModal();
            })
            .catch(err => {
              console.log(err);
              toast.error(
                'Что то пошло не так',
                toastifyConfig as ToastOptions
              );
              setSubmitting(false);
            });
        }}
      >
        {({ values, errors, setFieldValue }) => (
          <Form>
            <CustomerDetailsSection />
            <OrganizationDetailsSection />

            <BankAccountsSection
              defaultBankAccountIdx={defaultBankAccountIdx}
              switcherLocked={values.bankAccounts.length === 1}
              handleSwitcherChange={defaultBankAccountSwitchClickHandler}
              bankAccounts={values.bankAccounts}
              handleRemoveBankAccountClick={handleRemoveBankAccountClick}
            />
            <InvoiceEmailsSection invoiceEmails={values.invoiceEmails} />

            <MetaSection
              errorForm={
                typeof errors.meta === 'string' ? errors.meta : undefined
              }
              meta={values.meta}
            />

            <button type="submit" className="btn btn-primary mt-4">
              Создать
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default NewCustomerForm;

import { useState } from 'react';
import { Form, Formik, FieldArray } from 'formik';
import axios from 'axios';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import Accordion from 'react-bootstrap/Accordion';

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
    <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen flush>
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
            <Accordion.Item eventKey="0">
              <Accordion.Header>Детали Клиента</Accordion.Header>
              <Accordion.Body>
                <CustomerDetailsSection />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Детали Организации</Accordion.Header>
              <Accordion.Body>
                <OrganizationDetailsSection />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Банковские счета</Accordion.Header>
              <Accordion.Body>
                <BankAccountsSection
                  defaultBankAccountIdx={defaultBankAccountIdx}
                  switcherLocked={values.bankAccounts.length === 1}
                  handleSwitcherChange={defaultBankAccountSwitchClickHandler}
                  bankAccounts={values.bankAccounts}
                  handleRemoveBankAccountClick={handleRemoveBankAccountClick}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Emails для счетов</Accordion.Header>
              <Accordion.Body>
                <InvoiceEmailsSection invoiceEmails={values.invoiceEmails} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Meta</Accordion.Header>
              <Accordion.Body>
                <MetaSection
                  errorForm={
                    typeof errors.meta === 'string' ? errors.meta : undefined
                  }
                  meta={values.meta}
                />
              </Accordion.Body>
            </Accordion.Item>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-4">
                Создать
              </button>
            </div>
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
    </Accordion>
  );
};

export default NewCustomerForm;

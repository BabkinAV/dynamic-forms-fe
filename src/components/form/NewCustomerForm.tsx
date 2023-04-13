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
import TextInput from './formElements/TextInput';

const NewCustomerForm = ({
  handleCloseModal,
  handleAddCustomer,
}: {
  handleCloseModal: () => void;
  handleAddCustomer: (addedCustomer: Customer) => void;
}) => {
  const handleAddBankAccountClick = (pushBankAccount: () => void) => () => {
    // pushAccountHandler()
    pushBankAccount();
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
                bank_accounts: values.bankAccounts,
              },
							invoice_emails: values.invoiceEmails
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
        {({ values }) => (
          <Form>
            <CustomerDetailsSection />
            <OrganizationDetailsSection />
            <div className="mb-4">
              <h5>
                <b>Банковские счета</b>
              </h5>
              <FieldArray name="bankAccounts">
                {({ insert, remove, push }) => (
                  <div className="mb-4">
                    {values.bankAccounts.length > 0 &&
                      values.bankAccounts.map((bankAccount, index) => (
                        <div className="mb-4" key={index}>
                          {index > 0 && (
                            <div className="d-flex justify-content-end">
                              <button
                                type="button"
                                className="btn btn-link link-danger"
                                onClick={() => remove(index)}
                              >
                                - Удалить счет
                              </button>
                            </div>
                          )}

                          <BankAccountsSection index={index} />
                        </div>
                      ))}
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-dashed w-100"
                      onClick={handleAddBankAccountClick(() =>
                        push({
                          name: '',
                          bik: '',
                          account_number: '',
                          corr_account_number: '',
                        })
                      )}
                    >
                      + Добавить еще счет
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <div className="mb-4">
              <h5>
                <b>Emails для счетов</b>
              </h5>
              <FieldArray name="invoiceEmails">
                {({ insert, remove, push }) => (
                  <div className="mb-2">
                    {values.invoiceEmails.length > 0 &&
                      values.invoiceEmails.map((bankAccount, index) => (
                        <div className="mb-4" key={index}>
                          {index > 0 && (
                            <div className="d-flex justify-content-end">
                              <button
                                type="button"
                                className="btn btn-link link-danger"
                                onClick={() => remove(index)}
                              >
                                - Удалить email
                              </button>
                            </div>
                          )}
                          <TextInput
                            name={`invoiceEmails.${index}`}
                            label="Email"
                            placeholder="Email"
                            type="text"
                            requiredInput
                          />
                        </div>
                      ))}
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-dashed w-100"
                      onClick={() => push('')}
                    >
                      + Добавить еще email
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

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

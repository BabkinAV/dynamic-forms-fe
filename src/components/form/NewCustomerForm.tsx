import { Form, Formik } from 'formik';
import axios from 'axios';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';

import CustomerDetailsSection from './CustomerDetailsSection';
import { Customer } from '../../types';
import {
  newCustomerValidationSchema,
  newCustomerInitialValues,
} from '../../schemas/newCustomerSchema';
import { toastifyConfig } from '../../schemas/toastifySchema';
import OrganizationDetailsSection from './OrganizationDetailsSection';

const NewCustomerForm = ({
  handleCloseModal,
  handleAddCustomer,
}: {
  handleCloseModal: () => void;
  handleAddCustomer: (addedCustomer: Customer) => void;
}) => {
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
							}
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
        <Form>
          <CustomerDetailsSection />
					<OrganizationDetailsSection />
          <button type="submit" className="btn btn-primary mt-4">
            Создать
          </button>
        </Form>
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

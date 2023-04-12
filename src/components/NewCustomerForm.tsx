import React, { FormEventHandler } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';

import TextInput from './table/TextInput';
import { Customer } from '../types';
import {
  newCustomerValidationSchema,
  newCustomerInitialValues,
} from '../schemas/newCustomerSchema';
import { toastifyConfig } from '../schemas/toastifySchema';

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
            })
            .then(resp => {
              setSubmitting(false);
              handleAddCustomer(resp.data);
              toast.success('Сохранено', toastifyConfig as ToastOptions);
              handleCloseModal();
            })
            .catch(err => {
              console.log(err);
              toast.error('Что то пошло не так', toastifyConfig as ToastOptions);
              setSubmitting(false);
            });
        }}
      >
        <Form>
          <div className="mb-4">
            <TextInput
              name="customerName"
              type="text"
              placeholder="Введите имя"
              label="Имя"
              className="mb-2"
              requiredInput
            />
            <TextInput
              name="customerEmail"
              type="text"
              placeholder="Введите Email"
              className="mb-2"
              label="Email"
              requiredInput
            />
            <TextInput
              name="deferralDays"
              type="text"
              placeholder="Введите дни отстрочки"
              className="mb-2"
              label="Дней отсрочки"
              requiredInput
            />
            <TextInput
              name="creditLimit"
              type="text"
              placeholder="Введите кредитный лимит"
              className="mb-2"
              label="Кредитный лимит"
              requiredInput
            />
          </div>
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

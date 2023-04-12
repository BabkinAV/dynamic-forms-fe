import React, { FormEventHandler } from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from './table/TextInput';

const NewCustomerForm = () => {
  return (
    <Formik
      initialValues={{ customerName: '' }}
      validationSchema={Yup.object({
        customerName: Yup.string().required('Введите имя'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className="form-row">
          <TextInput
            name="customerName"
            type="text"
            placeholder="Введите имя"
            label="Имя"
						requiredInput
          />
					 
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Создать
        </button>
      </Form>
    </Formik>
  );
};

export default NewCustomerForm;

import { FieldArray } from 'formik';

import TextInput from '../formElements/TextInput';

const InvoiceEmailsSection = ({
  invoiceEmails,
}: {
  invoiceEmails: string[];
}) => {
  return (
    <div className="mb-4">
      <h5>
        <b>Emails для счетов</b>
      </h5>

      <FieldArray name="invoiceEmails">
        {({ insert, remove, push }) => (
          <div className="mb-2">
            {invoiceEmails.length > 0 &&
              invoiceEmails.map((invoiceEmail, index) => (
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
  );
};

export default InvoiceEmailsSection;

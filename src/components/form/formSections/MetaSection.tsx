import React from 'react';
import TextInput from '../formElements/TextInput';
import { FieldArray } from 'formik';

const MetaSection = ({
  errorForm,
  meta,
}: {
  errorForm?: string;
  meta: {
    key: string;
    value: string;
  }[];
}) => {
  return (
    <FieldArray name="meta">
      {({ insert, remove, push }) => (
        <div className="mb-4">
          <table className="table table-bordered">
            <thead className="table-light text-center">
              <tr>
                <th scope="col">Ключ</th>
                <th scope="col">Значение</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {meta.length > 0 ? (
                meta.map((keyValue, index) => (
                  <tr className="mb-4" key={index}>
                    <td>
                      <TextInput
                        name={`meta.${index}.key`}
                        label="Ключ"
                        className="mb-2"
                        placeholder="Ключ"
                        errorForm={errorForm}
                        type="text"
                        requiredInput
                        hiddenLabel
                      />
                    </td>
                    <td>
                      <TextInput
                        name={`meta.${index}.value`}
                        type="text"
                        placeholder="Значение"
                        className="mb-2"
                        label="Значение"
                        requiredInput
                        hiddenLabel
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-link link-danger"
                        onClick={() => remove(index)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className='text-secondary text-center'>No data</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-link "
              onClick={() => push({ key: '', value: '' })}
            >
              Добавить еще ключ-значение
            </button>
          </div>
        </div>
      )}
    </FieldArray>
  );
};

export default MetaSection;

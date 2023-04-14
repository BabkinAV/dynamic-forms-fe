import React from 'react';
import TextInput from '../formElements/TextInput';
import { FieldArray } from 'formik';

const BankAccountsSection = ({
  defaultBankAccountIdx,
  switcherLocked,
  handleSwitcherChange,
  bankAccounts,
  handleRemoveBankAccountClick,
}: {
  defaultBankAccountIdx: number;
  switcherLocked: boolean;
  handleSwitcherChange: (index: number) => void;
  bankAccounts: {
    name: string;
    bik: string;
    account_number: string;
    corr_account_number: string;
  }[];
  handleRemoveBankAccountClick: (
    removeBankAccount: () => void,
    index: number
  ) => () => void;
}) => {
  return (
    <FieldArray name="bankAccounts">
      {({ insert, remove, push }) => (
        <div className="mb-4">
          {bankAccounts.length > 0 &&
            bankAccounts.map((bankAccount, index) => (
              <div className="mb-4" key={index}>
                {index > 0 && (
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-link link-danger"
                      onClick={handleRemoveBankAccountClick(
                        () => remove(index),
                        index
                      )}
                    >
                      - Удалить счет
                    </button>
                  </div>
                )}
                <div className="mb-4">
                  <TextInput
                    name={`bankAccounts.${index}.name`}
                    label="Название счета"
                    className="mb-3"
                    placeholder="Название счета"
                    type="text"
                    requiredInput
                  />
                  <TextInput
                    name={`bankAccounts.${index}.account_number`}
                    type="text"
                    placeholder="Введите номер счета"
                    className="mb-3"
                    label="Номер счета"
                    requiredInput
                  />
                  <TextInput
                    name={`bankAccounts.${index}.bik`}
                    type="text"
                    placeholder="БИК счета"
                    className="mb-3"
                    label="БИК счета"
                    requiredInput
                  />
                  <TextInput
                    name={`bankAccounts.${index}.corr_account_number`}
                    type="text"
                    placeholder="Корр. номер счета"
                    className="mb-3"
                    label="Корр. номер счета"
                    requiredInput
                  />
                  <div className="form-check form-switch form-switch-lg">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id={`bankAccounts.${index}.isDefaultSwitch`}
                      checked={defaultBankAccountIdx === index}
                      disabled={switcherLocked}
                      onChange={() => handleSwitcherChange(index)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`bankAccounts.${index}.isDefaultSwitch`}
                    >
                      Дефолтный счет
                    </label>
                  </div>
                  <hr />
                </div>
              </div>
            ))}
          <button
            type="button"
            className="btn btn-outline-secondary btn-dashed w-100"
            onClick={() =>
              push({
                name: '',
                bik: '',
                account_number: '',
                corr_account_number: '',
              })
            }
          >
            + Добавить еще счет
          </button>
        </div>
      )}
    </FieldArray>
  );
};

export default BankAccountsSection;

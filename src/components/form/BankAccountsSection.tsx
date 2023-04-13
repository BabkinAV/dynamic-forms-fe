import React from 'react';
import TextInput from './TextInput';
import { FieldArray } from 'formik';

const BankAccountsSection = ({ index }: { index: number }) => {
  return (
    <div className="mb-4">
      <TextInput
        name={`bankAccounts.${index}.name`}
        label="Название счета"
        className="mb-2"
        placeholder="Название счета"
        type="text"
        requiredInput
      />
      <TextInput
        name={`bankAccounts.${index}.account_number`}
        type="text"
        placeholder="Введите номер счета"
        className="mb-2"
        label="Номер счета"
        requiredInput
      />
      <TextInput
        name={`bankAccounts.${index}.bik`}
        type="text"
        placeholder="БИК счета"
        className="mb-2"
        label="БИК счета"
        requiredInput
      />
      <TextInput
        name={`bankAccounts.${index}.corr_account_number`}
        type="text"
        placeholder="Корр. номер счета"
        className="mb-2"
        label="Корр. номер счета"
        requiredInput
      />
      <hr />
    </div>
  );
};

export default BankAccountsSection;

{
  /* <TextInput
          name="accountName"
          type="text"
          placeholder="Введите название счет"
          label="Название счета"
          className="mb-2"
          requiredInput
        />
        <TextInput
          name="accountNumber"
          type="text"
          placeholder="Введите номер счета"
          className="mb-2"
          label="Номер счета"
          requiredInput
        />
        <TextInput
          name="accountBIK"
          type="text"
          placeholder="Введите БИК счета"
          className="mb-2"
          label="Дней отсрочки"
          requiredInput
        />
        <TextInput
          name="corrAccountNumber"
          type="text"
          placeholder="Корр. номер счета"
          className="mb-2"
          label="Корр. номер счета"
          requiredInput
        />
        <hr /> */
}

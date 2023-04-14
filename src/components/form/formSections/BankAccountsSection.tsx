import React from 'react';
import TextInput from '../formElements/TextInput';

const BankAccountsSection = ({
  index,
	isDefault,
	switcherLocked,
	handleSwitcherChange
}: {
  index: number;
	isDefault: boolean;
	switcherLocked: boolean;
	handleSwitcherChange: (index: number)=>void
}) => {
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
      <div className="form-check form-switch form-switch-lg">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={`bankAccounts.${index}.isDefaultSwitch`}
          checked={isDefault}
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
  );
};

export default BankAccountsSection;

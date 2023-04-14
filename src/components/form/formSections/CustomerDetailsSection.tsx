import React from 'react';
import TextInput from '../formElements/TextInput';

const CustomerDetailsSection = () => {
  return (
    <>
      <TextInput
        name="customerName"
        type="text"
        placeholder="Имя"
        label="Имя"
        className="mb-3"
        requiredInput
      />
      <TextInput
        name="customerEmail"
        type="text"
        placeholder="Email"
        className="mb-3"
        label="Email"
        requiredInput
      />
      <TextInput
        name="deferralDays"
        type="text"
        placeholder="Дни отстрочки"
        className="mb-3"
        label="Дней отсрочки"
        requiredInput
      />
      <TextInput
        name="creditLimit"
        type="text"
        placeholder="Кредитный лимит"
        className="mb-3"
        label="Кредитный лимит"
        requiredInput
      />
    </>
  );
};

export default CustomerDetailsSection;

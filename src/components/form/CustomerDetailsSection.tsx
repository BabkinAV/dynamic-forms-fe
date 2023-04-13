import React from 'react';
import TextInput from './TextInput';

const CustomerDetailsSection = () => {
  return (
    <div className="mb-4">
			<h5><b>Детали клиента</b></h5>
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
  );
};

export default CustomerDetailsSection;

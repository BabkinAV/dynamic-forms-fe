import React from 'react';
import TextInput from './TextInput';

const OrganizationDetailsSection = () => {
  return (
    <div className="mb-4">
			<h5><b>Детали организации</b></h5>
      <TextInput
        name="organizationName"
        type="text"
        placeholder="Введите название организации"
        label="Название организации"
        className="mb-2"
        requiredInput
      />
      <TextInput
        name="inn"
        type="text"
        placeholder="Введите ИНН организации"
        className="mb-2"
        label="ИНН организации"
        requiredInput
      />
      <TextInput
        name="kpp"
        type="text"
        placeholder="введите КПП организации"
        className="mb-2"
        label="КПП организации"
        requiredInput
      />
      <TextInput
        name="ogrn"
        type="text"
        placeholder="введите ОГРН организации"
        className="mb-2"
        label="ОГРН организации"
        requiredInput
      />
      <TextInput
        name="organizationAddr"
        type="text"
        placeholder="Введите юридический адрес"
        className="mb-2"
        label="Юридический адрес"
        requiredInput
      />
    </div>
  );
};

export default OrganizationDetailsSection;

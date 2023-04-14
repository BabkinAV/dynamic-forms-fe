import React from 'react';
import TextInput from '../formElements/TextInput';

const OrganizationDetailsSection = () => {
  return (
    <>
      <TextInput
        name="organizationName"
        type="text"
        placeholder="Название организации"
        label="Название организации"
        className="mb-3"
        requiredInput
      />
      <TextInput
        name="inn"
        type="text"
        placeholder="ИНН организации"
        className="mb-3"
        label="ИНН организации"
        requiredInput
      />
      <TextInput
        name="kpp"
        type="text"
        placeholder="КПП организации"
        className="mb-3"
        label="КПП организации"
        requiredInput
      />
      <TextInput
        name="ogrn"
        type="text"
        placeholder="ОГРН организации"
        className="mb-3"
        label="ОГРН организации"
        requiredInput
      />
      <TextInput
        name="organizationAddr"
        type="text"
        placeholder="Юридический адрес"
        className="mb-3"
        label="Юридический адрес"
        requiredInput
      />
    </>
  );
};

export default OrganizationDetailsSection;

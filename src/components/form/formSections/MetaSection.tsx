import React from 'react';
import TextInput from '../formElements/TextInput';

const MetaSection = ({ index, errorForm }: { index: number, errorForm?: string }) => {
  return (
    <div className="mb-4">
      <TextInput
        name={`meta.${index}.key`}
        label="Ключ"
        className="mb-2"
        placeholder="Ключ"
				errorForm={errorForm}
        type="text"
        requiredInput
      />
      <TextInput
        name={`meta.${index}.value`}
        type="text"
        placeholder="Значение"
        className="mb-2"
        label="Значение"
        requiredInput
      />
      <hr />
    </div>
  );
};

export default MetaSection;

import React from 'react';
import TextInput from '../formElements/TextInput';

const MetaSection = ({
  index,
  errorForm,
	removeRowButtonHandler
}: {
  index: number;
  errorForm?: string;
	removeRowButtonHandler: () => void
}) => {
  return (
    <>
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
				<button className='btn btn-link link-danger' onClick={removeRowButtonHandler}>
						X
				</button>
			</td>
    </>
  );
};

export default MetaSection;

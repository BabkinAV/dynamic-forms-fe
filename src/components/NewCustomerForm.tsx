import React, { FormEventHandler } from 'react';

const NewCustomerForm = () => {
	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
	}
	

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Имя</label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Введите имя"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Создать
      </button>
    </form>
  );
};

export default NewCustomerForm;

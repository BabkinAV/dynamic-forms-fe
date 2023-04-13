import React from 'react';
import NewCustomerForm from './form/NewCustomerForm';
import { Modal } from 'react-bootstrap';
import { Customer } from '../types';

const CustomerCreateModal = ({
  showModal,
  handleClose,
  handleAddCustomer,
}: {
  showModal: boolean;
  handleClose: () => void;
  handleAddCustomer: (addedCustomer: Customer) => void;
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Создание цены</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewCustomerForm
          handleCloseModal={handleClose}
          handleAddCustomer={handleAddCustomer}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CustomerCreateModal;

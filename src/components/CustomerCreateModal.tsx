import React from 'react';
import NewCustomerForm from './NewCustomerForm';
import { Modal } from 'react-bootstrap';

const CustomerCreateModal = ({
  showModal,
  handleClose,
}: {
  showModal: boolean;
  handleClose: () => void;
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Создание цены</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewCustomerForm />
      </Modal.Body>
    </Modal>
  );
};

export default CustomerCreateModal;

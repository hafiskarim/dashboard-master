import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from "reactstrap";

export const ReuseAbleModal = ({
  size,
  name,
  isOpen,
  toggle,
  className,
  onSubmit,
  modalHeader,
  modalBody,
  modalFooter,
  onClose
}) => {
  return (
    <Modal
      size={size}
      isOpen={isOpen}
      toggle={toggle}
      className={className}
      onClosed={onClose}
    >
      <Form onSubmit={onSubmit}>
        <ModalHeader name={name} toggle={toggle}>
          {modalHeader}
        </ModalHeader>
        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>{modalFooter}</ModalFooter>
      </Form>
    </Modal>
  );
};

export default ReuseAbleModal;

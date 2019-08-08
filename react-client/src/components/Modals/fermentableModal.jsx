import React from 'react';
import Modal from 'react-bootstrap/Modal';

const fermentableModal = (props) =>{
  return (
  <Modal
    show={props.buttonClick}
    onHide={props.handleClose}
    size="lg"
  >
    <Modal.Header closeButton>
      <Modal.Title>Fermentables</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FermentablePopup addFerm={props.addFermentableFromModal} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>);
}
export default fermentableModal;
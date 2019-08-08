import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
const fermentableModal = (props) =>{
  return (
  <Modal
    show={props.showFermModal}
    onHide={props.fermModalChange}
    size="lg"
  >
    <Modal.Header closeButton>
      <Modal.Title>Fermentables</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* <FermentablePopup/> */}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.fermModalChange}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>);
}
export default fermentableModal;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditContact = ({ showEditModal, handleEditClose, editContact, saveChanges }) => {
    const [contact, setContact] = useState(editContact);

  function editContactName(e){
    let newObj = {
      ...contact,
      contactName: e.target.value
    };
    setContact(newObj);
  };

  function editImg(e){
    let newObj = {
      ...contact,
      img: e.target.value
    };
    setContact(newObj);
  };

  function editAge(e){
    let newObj = {
      ...contact,
      age: e.target.value
    };
    setContact(newObj);
  };

  function editNumber(e){
    let newObj = {
      ...contact,
      number: e.target.value
    };
    setContact(newObj);
  };

  return (
    <>
    <Modal show={showEditModal} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-center flex-wrap'>
      <input type="text" className='my-3 flex-wrap w-75' onChange={editContactName} value={contact.contactName} placeholder='Name' />
        <input type="number" className='my-3 flex-wrap w-75' onChange={editAge} value={contact.age} placeholder='Age' />
        <input type="number" className='my-3 flex-wrap w-75' onChange={editNumber} value={contact.number} placeholder='Number' />
        <input type="text" className='my-3 flex-wrap w-75' onChange={editImg} value={contact.img} placeholder='Avatar URL' />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => saveChanges(contact)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditContact
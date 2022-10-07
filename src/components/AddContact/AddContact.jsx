import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddContact = ({ addContact, show, handleClose, handleShow }) => {
    const [contactName, setContactName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');
    const [img, setImg] = useState('')

    function handleInput(e){
        setContactName(e.target.value)
        console.log(contactName);
    }

    function handleInputAge(e){
        setAge(e.target.value)
        // console.log(contact);
    }

    function handleInputNumber(e){
        setNumber(e.target.value)
        // console.log(contact);
    }

    function handleInputImg(e){
        setImg(e.target.value)
        // console.log(contact);
    }

    function handleAdd (){
        if(!contactName){
            alert('Empty input');
            return;
        }

        const newContact = {
            contactName: contactName,
            img: img,
            age: age,
            number: number,
            id: Date.now()
        }

        addContact(newContact);

        setContactName('');
        setAge('');
        setNumber('');
        setImg('');

        handleClose()
    }

  return (
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center flex-wrap'>
        <input type="text" className='my-3 flex-wrap w-75' onChange={handleInput} value={contactName} placeholder='Name' />
        <input type="number" className='my-3 flex-wrap w-75' onChange={handleInputAge} value={age} placeholder='Age' />
        <input type="number" className='my-3 flex-wrap w-75' onChange={handleInputNumber} value={number} placeholder='Number' />
        <input type="text" className='my-3 flex-wrap w-75' onChange={handleInputImg} value={img} placeholder='Avatar URL' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdd}>
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default AddContact
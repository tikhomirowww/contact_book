import React, { useState } from 'react';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';
import Header from './components/Header/Header';

const App = () => {
  // add modal states 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // edit modal states 

  const [showEditModal, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);

  const [contacts, setContacts] = useState([])

  function addContact(newObj){
    let newContacts= [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts)
  }

  function deleteContact(id){
    let newContacts = [...contacts];
    newContacts = newContacts.filter(item => item.id !== id);
    setContacts(newContacts)
  }

  const [editContact, setEditContact] = useState({})

  function editContactFunc(id){
    let obj = contacts.find(item => item.id === id);
    setEditContact(obj);
    setEditShow(true);
  }

  function saveChanges(obj){
    let newContact = contacts.map(item => {
      if(item.id === obj.id){
        return obj;
      }else {
        return item
      };
    });
    setContacts(newContact);
    setEditShow(false);
  }

  return (
    <>
    <Header handleShow={handleShow} />
    <AddContact show={show} handleClose={handleClose} addContact={addContact}/>
    <ContactList contacts={contacts} deleteContact={deleteContact} editContactFunc={editContactFunc} />
    {showEditModal ? (
      <EditContact showEditModal={showEditModal} editContact={editContact} handleEditClose={handleEditClose} handleEditShow={handleEditShow} saveChanges={saveChanges}/>
    ) : ('')}
    </>
  )
}

export default App
import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({ contacts, deleteContact, editContactFunc }) => {
    // console.log(props);
  return (
    <>
    <center style={{ fontSize: '30px', margin: '20px'}}>Contacts</center>
    <div className='d-flex justify-content-center flex-wrap w-75 m-auto'>
        {contacts?.map(item => (
            <ContactCard key={item.id} item={item} deleteContact={deleteContact} editContactFunc={editContactFunc} />
        ))}
    </div>
    </>
  )
}

export default ContactList
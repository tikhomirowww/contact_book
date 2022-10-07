import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ContactCard = ({ item, deleteContact, editContactFunc }) => {
  return (
    <>
    <Card style={{ width: '18rem', marginBottom: '10px', margin: '2%' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.contactName}</Card.Title>
        <Card.Text>
          Age: {item.age} <br/>
          Number: {item.number}
        </Card.Text>
        <Button variant="danger" onClick={() => deleteContact(item.id)}>Delete</Button>
        <Button variant="warning" className='mx-1' onClick={() => editContactFunc(item.id)}>Edit</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ContactCard
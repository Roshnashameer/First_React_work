import React from 'react'
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Operating({operatingData}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div><Button variant="primary" onClick={handleShow}>
    Operating Hours
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Operating Hours</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup>
        <ListGroup.Item ><b className='text-warning'>Monday: </b>{operatingData.Monday} </ListGroup.Item>
        <ListGroup.Item ><b className='text-warning'>Tuesday: </b>{operatingData.Tuesday} </ListGroup.Item>
        <ListGroup.Item ><b className='text-warning'>Wednesday: </b>{operatingData.Wednesday} </ListGroup.Item>
        <ListGroup.Item ><b className='text-warning'>Thursday: </b>{operatingData.Thursday} </ListGroup.Item>
        <ListGroup.Item ><b className='text-warning'>Friday: </b>{operatingData.Friday} </ListGroup.Item>
        <ListGroup.Item ><b className='text-warning'>Saturday: </b>{operatingData.Saturday} </ListGroup.Item>
        <ListGroup.Item ><b className='text-warning'>sunnday: </b>{operatingData.Sunday} </ListGroup.Item>
        </ListGroup>
        </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      
    </Modal.Footer>
  </Modal></div>
  )
}

export default Operating
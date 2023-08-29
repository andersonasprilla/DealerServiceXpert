import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const CustomerModal = ({ showModal, setShowModal, createCustomer }) => {
  const [newCustomerData, setNewCustomerData] = useState({
    tag: "",
    ro: "",
    vehicle: "",
    name: "",
    phone: "",
    description: "",
    isWaiting: false,
  });

  const handleNewCustomerChange = (e) => {
    const { name, value } = e.target;
    setNewCustomerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const createCustomerHandler = async () => {
    try {
      await createCustomer(newCustomerData);
      setShowModal(false);
    } catch (err) {
      // Handle error
    }
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='tag'>
            <Form.Label>Tag</Form.Label>
            <Form.Control
              type='text'
              name='tag'
              value={newCustomerData.tag}
              onChange={handleNewCustomerChange}
            />
          </Form.Group>
          <Form.Group controlId='ro'>
            <Form.Label>RO</Form.Label>
            <Form.Control
              type='text'
              name='ro'
              value={newCustomerData.ro}
              onChange={handleNewCustomerChange}
            />
          </Form.Group>
          <Form.Group controlId='vehicle'>
            <Form.Label>Vehicle</Form.Label>
            <Form.Control
              type='text'
              name='vehicle'
              value={newCustomerData.vehicle}
              onChange={handleNewCustomerChange}
            />
          </Form.Group>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={newCustomerData.name}
              onChange={handleNewCustomerChange}
            />
          </Form.Group>
          <Form.Group controlId='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='text'
              name='phone'
              value={newCustomerData.phone}
              onChange={handleNewCustomerChange}
            />
          </Form.Group>
          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='description'
              value={newCustomerData.description}
              onChange={handleNewCustomerChange}
            />
          </Form.Group>
          <Form.Group controlId='isWaiting'>
            <Form.Label>Waiting</Form.Label>
            <Form.Control
              type='text'
              name='isWaiting'
              value={newCustomerData.isWaiting}
              onChange={handleNewCustomerChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button variant='primary' onClick={createCustomerHandler}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerModal;

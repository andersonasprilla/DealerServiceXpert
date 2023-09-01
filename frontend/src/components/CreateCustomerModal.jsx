import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useCreateCustomerMutation } from "../slices/customersApiSlice";

const CreateCustomerModal = ({ show, onClose, refetchCustomers }) => {
  const [newCustomerData, setNewCustomerData] = useState({
    tag: "",
    ro: "",
    vehicle: "",
    name: "",
    phone: "",
    description: "",
    isWaiting: false,
  });

  const [createCustomer, { isLoading }] = useCreateCustomerMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCustomer(newCustomerData);
      onClose();
      refetchCustomers();
    } catch (err) {
      // Handle error
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='tag'>
            <Form.Label>Tag</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter tag'
              name='tag'
              value={newCustomerData.tag}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='ro'>
            <Form.Label>RO</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter RO'
              name='ro'
              value={newCustomerData.ro}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='vehicle'>
            <Form.Label>Vehicle</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter vehicle'
              name='vehicle'
              value={newCustomerData.vehicle}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              name='name'
              value={newCustomerData.name}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter phone'
              name='phone'
              value={newCustomerData.phone}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter description'
              name='description'
              value={newCustomerData.description}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='isWaiting'>
            <Form.Check
              type='checkbox'
              label='Waiting'
              name='isWaiting'
              value={newCustomerData.isWaiting}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </Form.Group>
          <Button variant='primary' type='submit' disabled={isLoading}>
            Create
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCustomerModal;

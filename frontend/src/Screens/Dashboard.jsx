import React from "react";
import { useState } from "react";
import {
  useGetMyCustomersQuery,
  useCreateCustomerMutation,
  useDeleteCustomerMutation,
} from "../slices/customersApiSlice";
import { Button, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import CustomerModal from "../components/CustomerModal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    data: customers,
    isLoading,
    error,
    refetch,
  } = useGetMyCustomersQuery();

  const [createCustomer, { isLoading: loadingCreate }] =
    useCreateCustomerMutation();

  const [deleteCustomer, { isLoading: loadingDelete }] =
    useDeleteCustomerMutation();

  const createCustomerHandler = async () => {
    if (window.confirm("Are you sure?")) {
      try {
        await createCustomer();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteCustomer(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <Col className='text-end'>
        <Button className='btn-sm m-3' onClick={() => setShowModal(true)}>
          <FaEdit /> Create Customer
        </Button>
      </Col>

      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Daily Service Record</h1>

          <Table striped bordered hover>
            <thead className='custom-header'>
              {
                <tr>
                  <th>Tag</th>
                  <th>RO</th>
                  <th>Vehicle</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Description</th>
                  <th>Waiting</th>
                  <th></th>
                </tr>
              }
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.tag}>
                  <td>{customer.tag}</td>
                  <td>{customer.ro}</td>
                  <td>{customer.vehicle}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.description}</td>
                  <td>{customer.isWaiting === "true" ? "Yes" : "No"}</td>
                  <td>
                    <LinkContainer to={`/customer/${customer._id}`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => {
                        deleteHandler(customer._id);
                      }}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <CustomerModal
            showModal={showModal}
            setShowModal={setShowModal}
            createCustomer={createCustomerHandler}
          />
        </>
      )}
    </>
  );
};

export default Dashboard;

import { useGetCustomersQuery } from "../slices/customersApiSlice";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Dashboard = () => {
  const { data: customers, isLoading, error } = useGetCustomersQuery();

  return (
    <>
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
              <tr>
                <th>Tag</th>
                <th>Ro</th>
                <th>Vehicle</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Description</th>
                <th>Is Waiting</th>
              </tr>
            </thead>
            <div style={{ marginBottom: "10px" }}></div>
            <LinkContainer to={"/customer/:id"}>
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
                  </tr>
                ))}
              </tbody>
            </LinkContainer>
          </Table>
        </>
      )}
    </>
  );
};

export default Dashboard;

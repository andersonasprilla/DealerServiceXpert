import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Customer from "../components/Customer";
import axios from "axios";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data } = await axios.get("/api/customers");
      setCustomers(data);
    };
    fetchCustomers();
  }, []);
  return (
    <>
      <h1>Customers</h1>
      <Row>
        {customers.map((customer) => (
          <Col key={customer._id} sm={12} md={6} lg={4} xl={3}>
            <Customer customer={customer} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;

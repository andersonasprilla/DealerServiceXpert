import { Row, Col } from "react-bootstrap";
import customers from "../customers";
import Customer from "../components/Customer";

const Dashboard = () => {
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

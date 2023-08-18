import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Customer = ({ customer }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Link to={`/customer/${customer._id}`}>
          <Card.Title as='div'>
            <strong>{customer.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h3'>
          <div className='my-3'>{customer.vehicle}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Customer;

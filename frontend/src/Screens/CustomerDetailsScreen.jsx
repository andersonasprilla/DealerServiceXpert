//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import { useGetCustomerDetailsQuery } from "../slices/customersApiSlice";

const CustomerDetailsScreen = () => {
  //const { id: customerId } = useParams();
  // const {
  //   data: customer,
  //   isLoading,
  //   error,
  // } = useGetCustomerDetailsQuery(customerId);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div>
        <h1>Customer Details Screen TODO:</h1>
        <h1>*card component with vehicle image</h1>
        <h1>**card component with customer details</h1>
        <h1>***card component with service details</h1>
        <h1>****twilio integration</h1>
      </div>
    </>
  );
};

export default CustomerDetailsScreen;

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetCustomerDetailsQuery } from "../slices/customersApiSlice";

const CustomerScreen = () => {
  const { id: customerId } = useParams();
  const {
    data: customer,
    isLoading,
    error,
  } = useGetCustomerDetailsQuery(customerId);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div>
        <h1>Not data fetch warning</h1>
      </div>
    </>
  );
};

export default CustomerScreen;

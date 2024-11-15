import LoadingSpinner from "../../components/LoadingSpinner";
import { UseAuth } from "../../context/AuthContext";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/orderApi";

const OrderPage = () => {
  const { user } = UseAuth();
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(user?.email);
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error getting orders data</div>;
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl capitalize font-semibold mb-4">your orders</h1>
      {orders.length === 0 ? (
        <div>No orders found</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div className="border-b-2 mb-4 pb-4" key={order._id}>
              <p className="p-1 mb-1 bg-secondary text-white w-10 rounded text-center">
                #{index + 1}
              </p>
              <h2 className="font-bold">Order ID: {order._id}</h2>
              <p className="text-gray-600">Name: {order.name}</p>
              <p className="text-gray-600">Email: {order.email}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">Total Price: {order.totalPrice}</p>
              <h3 className="font-semibold mt-2">Address:</h3>
              <p>
                {" "}
                {order.address.city}, {order.address.state},{" "}
                {order.address.country}, {order.address.zipcode}
              </p>
              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
                {order?.productIds.map((prdctid) => (
                  <li key={prdctid}>{prdctid}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;

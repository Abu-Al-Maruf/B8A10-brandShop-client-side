import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const MyCart = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth()
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/addCart?email=${user?.email}`).then((res) => {
      setProducts(res.data);
    });
  }, [user?.email, axios]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              const remaining = products.filter((prod) => prod._id !== _id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mx-auto p-6 flex flex-col items-center min-h-screen bg-slate-200">
      <h2 className="text-3xl font-semibold mb-2">My Cart</h2>
      <h2 className="text-xl mb-4">Total: {products.length}</h2>
      {products.length > 0 ? (
        <div className="flex flex-col w-full sm:w-3/4 lg:w-2/3 justify-center items-center">
          {products?.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center justify-between mb-4 w-full"
            >
              <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  <p className="text-red-500">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default MyCart;

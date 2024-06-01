
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCartProducts = useLoaderData();

  const handleDelete = (id) => {
    // Delete product with the given id from the cart
    console.log(`Deleted product with id ${id} from cart`);
  };

  return (
    <div className="mx-auto p-6 flex flex-col items-center min-h-screen  bg-slate-200">
      <h2 className="text-3xl font-semibold mb-4">My Cart</h2>
      {loadedCartProducts.length > 0 ? (
        <div className="flex flex-col w-full sm:w-3/4  justify-center items-center">
          {loadedCartProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between mb-4"
              style={{ width: '60%', backgroundColor: '#f3f4f6' }}
            >
              <div className="flex items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-contain mr-4" />
                <div>
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  <p className="text-red-500">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(product.id)}
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

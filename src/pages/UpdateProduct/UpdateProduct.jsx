import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, desc, image, brand, price, rating, type } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const desc = form.desc.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const user = { name, brand, type, price, desc, rating, image };

    fetch(`https://a10-brand-shop-server-side-chi.vercel.app/brandProducts/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            Swal.fire({
                title: "Updated",
                text: "Product Update successfully",
                icon: "success",
            });
        }
    });
    form.reset();
  };

  return (
    <section className="py-12 px-6 md:px-20 lg:px-40 bg-gray-200">
      <h1 className="text-center text-xl pb-10 font-semibold">
        Update Product of: <span className="text-red-400 pl-3">{name}</span>
      </h1>

      <form
        onSubmit={handleUpdateProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9"
      >
        <div className="flex flex-col gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-green-500 font-medium focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="name"
            placeholder="Enter name"
            defaultValue={name}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="brand">
            Brand Name
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-green-500 font-medium focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="brand"
            placeholder="Enter brand name"
            defaultValue={brand}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="type">
            Type
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-green-500 font-medium focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="type"
            placeholder="Enter type"
            defaultValue={type}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="price">
            Price
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-green-500 font-medium focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="price"
            placeholder="Enter price"
            defaultValue={price}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="desc">
            Short description
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-green-500 font-medium focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="desc"
            placeholder="Enter short description"
            defaultValue={desc}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="rating">
            Rating
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-green-500 font-medium focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="rating"
            placeholder="Enter rating"
            defaultValue={rating}
            required
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
          <label className="text-lg text-gray-600 pl-1" htmlFor="image">
            Image
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-green-500 font-medium focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="image"
            placeholder="Enter image link"
            defaultValue={image}
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2 mx-auto">
          <button className="btn btn-primary w-32">Update</button>
        </div>
      </form>
    </section>
  );
};

export default UpdateProduct;

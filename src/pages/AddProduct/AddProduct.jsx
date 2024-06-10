import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
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
    console.log(user);
    form.reset();

    fetch("https://a10-brand-shop-server-side-chi.vercel.app/brandProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product added successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-20 bg-gray-200">
      <h1 className="text-center text-2xl md:text-3xl pb-6 font-semibold">
        Add Product
      </h1>

      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-lg text-gray-600" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="name"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-lg text-gray-600" htmlFor="brand">
            Brand Name
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="brand"
            placeholder="Enter brand name"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-lg text-gray-600" htmlFor="type">
            Type
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="type"
            placeholder="Enter type"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-lg text-gray-600" htmlFor="price">
            Price
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="price"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-lg text-gray-600" htmlFor="desc">
            Short description
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="desc"
            placeholder="Enter short description"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-lg text-gray-600" htmlFor="rating">
            Rating
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="rating"
            placeholder="Enter rating"
            required
          />
        </div>

        <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
          <label className="text-sm md:text-lg text-gray-600" htmlFor="image">
            Image
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="image"
            placeholder="Enter image link"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2 mx-auto">
          <button className="btn btn-primary w-full sm:w-32">Add</button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;

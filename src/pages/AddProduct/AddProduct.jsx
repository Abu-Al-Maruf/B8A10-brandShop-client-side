const AddProduct = () => {
  const handleSubmit = (e) => {
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
  };

  return (
    <section className="py-12 px-40 bg-gray-200 ">
      <h1 className="text-center text-3xl pb-10 font-semibold">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-9"
      >
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="name"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="brand">
            Brand Name
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="brand"
            placeholder="Enter brand name"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="type">
            Type
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="type"
            placeholder="Enter type"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="price">
            Price
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="price"
            placeholder="Enter price"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="desc">
            Short description
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="desc"
            placeholder="Enter short description"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-lg text-gray-600 pl-1" htmlFor="rating">
            Rating
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="rating"
            placeholder="Enter rating"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1 col-span-2">
          <label className="text-lg text-gray-600 pl-1" htmlFor="image">
            Image
          </label>
          <input
            className="bg-gray-50 w-full border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="image"
            placeholder="Enter image link"
          />
        </div>
        <div className="col-span-2 mx-auto">
          <button className="btn btn-primary w-32">Add</button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;

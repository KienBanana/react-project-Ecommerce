import imgStar from "../../assets/image/detailIcon1.svg";

const DetailProduct = () => {
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="flex w-[85%] gap-6">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-[300px] h-[400px] object-contain"
          />
        </div>
        <div>
          <h1 className="text-[40px] font-semibold">Plain White Shirt</h1>
          <div className="flex mb-3">
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
          </div>
          <div className="flex flex-row gap-2 ">
            <span className="text-[#818181]">$69.00</span>
            <span>$59.00</span>
          </div>
          <p className="w-[70%] text-[#555555] mt-4 mb-8">
            A classic t-shirt never goes out of style. This is our most premium
            collection of shirt. This plain white shirt is made up of pure
            cotton and has a premium finish.
          </p>
          <div className="mb-8">
            <form className="max-w-sm ">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Size</option>
                <option value="US">S</option>
                <option value="CA">M</option>
                <option value="FR">L</option>
                <option value="DE">XL</option>
              </select>
            </form>
          </div>
          <button className="bg-[#024E82] hover:bg-blue-700 text-white font-bold py-4 px-20 ">
            ADD TO CART
          </button>
          <div className="mt-[10px]">
            <p>
              Category:{" "}
              <span className="text-[#555555]">Women, Polo, Casual</span>
            </p>
            <p>
              Tags:{" "}
              <span className="text-[#555555]">Modern, Design, cotton</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;

import { useEffect, useState } from "react";
// import imgStar from "../../assets/image/detailIcon1.svg";
import imgStar from "../assets/image/detailIcon1.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
const getItemProductApi = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/products/${Number(id)}`
    );
    console.log("check respone", response);
    // handle success99
    // const data = await response.json();

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const DetailProduct = () => {
  const [productDetail, setProductDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    getItemProductApi(id).then((data) => {
      console.log("check data", data);
      setProductDetail(data);
      console.log("check productDetail", productDetail);
    });
  }, []);
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="flex w-[85%] gap-6">
        <div className="">
          <img
            src={productDetail?.image}
            alt=""
            className="w-[300px] h-[400px] object-contain"
          />
        </div>
        <div>
          <h1 className="text-[40px] font-semibold">{productDetail?.name}</h1>
          <div className="flex mb-3">
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
            <img src={imgStar} alt="" />
          </div>
          <div className="flex flex-row gap-2 ">
            <span className="text-[#818181]">$69.00</span>
            <span>${productDetail?.price}</span>
          </div>
          <p className="w-[70%] text-[#555555] mt-4 mb-8">
            A classic t-shirt never goes out of style. This is our most premium
            collection of shirt. This plain white shirt is made up of pure
            cotton and has a premium finish.
          </p>
          <div className="mb-8 flex gap-4">
            <form className="max-w-40 ">
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
            <form className="max-w-40 ">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Color</option>
                <option value="US">Red</option>
                <option value="CA">Blue</option>
                <option value="FR">Green</option>
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
      ;
    </div>
  );
};

export default DetailProduct;

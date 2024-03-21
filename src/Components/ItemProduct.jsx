import axios from "axios";
import { useState, useEffect } from "react";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const getItemProductApi = async (page) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/products/?_page=${page}&_limit=4`
    );

    // handle success
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const ItemProduct = () => {
  const [product, setProduct] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMore = async () => {
    const image = await getItemProductApi(nextPage);

    const newProducts = [...product, ...image];

    setProduct(newProducts);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handleLoadMore();
  }, []); // empty dependency array to run effect only once
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className="text-center  grid grid-cols-4 gap-5">
          {product.map((item, index) => (
            <div className="py-[50px]" key={index}>
              <div className="w-[334px] h-[400px] ">
                <Link to={`/detail/${item.id}`}>
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </Link>
                <h2 className="font-bold pt-4 pb-1">{item.name}</h2>
                <div className="flex justify-around">
                  <span className="text-[#024E82]">${item.price}</span>
                  <button className="bg-[#FDA403] text-white px-4 py-2 rounded-full">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={handleLoadMore}
          className="px-10 py-4 bg-[#024E82] text-[#fff] mt-10 mb-[70px]"
        >
          Load More
        </button>
      </div>

      <div>
        <div className="flex justify-center items-center gap-4">
          <div>
            <Button
              variant="text"
              className="flex items-center gap-2 rounded-full"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-black" />
              Previous
            </Button>
          </div>
          <div className="flex items-center gap-10">
            <IconButton {...getItemProps(1)}>1</IconButton>
            <IconButton {...getItemProps(2)}>2</IconButton>
            <IconButton {...getItemProps(3)}>3</IconButton>
            <IconButton {...getItemProps(4)}>4</IconButton>
            <IconButton {...getItemProps(5)}>5</IconButton>
          </div>
          <div>
            <Button
              variant="text"
              className="flex items-center gap-2 rounded-full"
              onClick={next}
              disabled={active === 10}
            >
              Next
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemProduct;

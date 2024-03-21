import ItemProduct from "../Components/ItemProduct";

const TopSale = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-[40px] text-center pt-10 font-bold">Top Sellers</h1>
        <p className="text-center text-[20px] text-[#555555] mb-10">
          Browse our top-selling products
        </p>
      </div>
      <div className="">
        <ItemProduct />
      </div>
      {/* <div className="mt-5">
        <button className="px-10 py-4 bg-[#024E82] text-[#fff] mt-10 mb-[70px]">
          SHOP NOW
        </button>
      </div> */}
    </div>
  );
};

export default TopSale;

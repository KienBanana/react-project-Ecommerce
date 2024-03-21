const ImageHome = () => {
  return (
    <div className="relative ">
      <img
        className="object-cover h-[650px] w-full"
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1 className="text-[48px] uppercase text-[#fff] absolute top-[25%] left-[55%] w-[35%] text-center font-bold">
        stylist picks beat the heat
      </h1>
      <h1 className="text-[40px] text-center pt-10 font-bold">
        Discover NEW Arrivals
      </h1>
      <p className="text-center text-[20px] text-[#555555]">
        Recently added shirts!
      </p>
    </div>
  );
};

export default ImageHome;

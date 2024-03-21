const ContainerHome = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[95%] flex gap-5  ">
        <div className="w-[60%] h-[430px] bg-black flex flex-col justify-center items-center ">
          <div className="w-full text-center text-[#fff] ">
            <h1 className="text-[32px] uppercase ">peace of mind</h1>
            <div className="flex justify-center mt-6 mb-8">
              <p className="w-[45%]">
                A one-stop platform for all your fashion needs, hassle-free. Buy
                with a peace of mind.
              </p>
            </div>
            <button className="px-8 py-3 bg-slate-50 text-[#024E82]">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="w-[40%] h-[430px] bg-black flex flex-col justify-center items-center ">
          <div className="w-full text-center text-[#fff] ">
            <h1 className="text-[32px] uppercase ">Buy 2 Get 1 Free</h1>
            <div className="flex justify-center mt-6 mb-8">
              <p className="w-[66%]">
                End of season sale. Buy any 2 items of your choice and get 1
                free.
              </p>
            </div>
            <button className="px-8 py-3 bg-slate-50 text-[#024E82]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerHome;

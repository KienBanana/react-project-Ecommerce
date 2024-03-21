const FounderAbout = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[95%]">
        <h1 className="text-[40px] text-center py-[100px] font-bold">
          The Founders
        </h1>
        <div className="grid grid-cols-4 gap-5 ">
          <div>
            <img
              src="https://i.pinimg.com/564x/0a/0b/4f/0a0b4f590ab15eae464298f79dfd7940.jpg"
              alt=""
              className="w-[100%] h-[364px] object-cover"
            />
            <h1 className="text-[21px] pt-[30px] pb-[32px] font-semibold">
              HM Jawad
            </h1>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/4f/48/ba/4f48ba67b63aca249fedd4548e19927c.jpg"
              alt=""
              className="w-[100%] h-[364px] object-cover"
            />
            <h1 className="text-[21px] pt-[30px] pb-[32px] font-semibold">
              Furqan Abid
            </h1>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/236x/ec/18/63/ec18631135cf0125f48e30411593668c.jpg"
              alt=""
              className="w-[100%] h-[364px] object-cover"
            />
            <h1 className="text-[21px] pt-[30px] pb-[32px] font-semibold">
              Abdullah Ah
            </h1>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/236x/a1/18/8d/a1188dd8f41e405a4f62ae3785a5aeed.jpg"
              alt=""
              className="w-[100%] h-[364px] object-cover"
            />
            <h1 className="text-[21px] pt-[30px] pb-[32px] font-semibold">
              Ali Raza
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderAbout;

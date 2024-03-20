const ContainerAbout = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[95%] flex gap-10">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[700px] h-[700px] object-cover"
          />
          <button className="px-8 py-3 bg-slate-50 text-[#024E82] absolute top-[86%] left-[40%] rounded-xl">
            BUY NOW
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-[700px] h-[700px] object-cover"
          />
          <button className="px-8 py-3 bg-slate-50 text-[#024E82] absolute top-[86%] left-[40%] rounded-xl">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerAbout;

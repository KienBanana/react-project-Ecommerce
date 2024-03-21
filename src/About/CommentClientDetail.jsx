
import iconAbout1 from "../assets/image/iconAbout1.svg"
const CommentClientDetail = () => {
  return (
    <div className="flex w-full pb-[100px]">
      <div className="w-[40%] relative">
        <img
          src="https://images.unsplash.com/photo-1504375536905-5f505fe2cc47?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[210px] h-[210px] object-cover rounded-[50%] absolute right-[10%]"
          alt=""
        />
      </div>
      <div className="w-[60%] relative top-2">
        <div className="">
          <img src={iconAbout1} alt="" className="w-[30px]" />
          <p className="w-[70%] text-[24px] pt-3 pb-7">
            Once we ordered some accessories items and we got the products
            delivered in our doorstep, the customer support was super helpful
            and they answered all my queries.
          </p>
          <h1 className="font-bold text-[21px]">Stacy</h1>
        </div>
      </div>
    </div>
  );
};

export default CommentClientDetail;

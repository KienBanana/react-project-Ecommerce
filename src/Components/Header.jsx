import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="h-[94px] flex justify-center w-full ">
      <div className="w-[95%] flex justify-between items-center">
        <div className="flex justify-between items-center w-[50%]">
          <h1 className="text-[36px]">NorthStar</h1>
          <div>
            <ul className="flex gap-5 flex-row">
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li>
                <Link to={"/contact"}>CONTACT US</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-[30px]">
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <Link to={"/cart"}>
            <div className="text-[31px] relative">
              <ion-icon name="cart-outline"></ion-icon>
              <div className="w-4 h-4 bg-[#024E82] absolute top-0 left-[55%] rounded-[50%] text-[12px] text-[#fff] flex justify-center items-center">
                5
              </div>
            </div>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
}

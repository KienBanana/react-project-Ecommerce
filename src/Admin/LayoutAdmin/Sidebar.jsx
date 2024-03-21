import { MdCategory, MdDashboard } from "react-icons/md";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" ">
      <div className="flex flex-col items-center mt-9 border-r ">
        <div className="">
          <h1 className="text-3xl">Admin</h1>
        </div>
        <div>
          <ul className="">
            <li className="my-10">
              <Link to={"/admin"} className="flex items-center gap-5 text-xl">
                <MdDashboard size={30}></MdDashboard>Dashbord
              </Link>
            </li>
            <li className="my-10">
              <Link
                to={"/admin/product"}
                className="flex items-center gap-5 text-xl"
              >
                <CiShoppingCart size={30}></CiShoppingCart>Product
              </Link>
            </li>
            <li className="my-10">
              <Link
                to={"/admin/category"}
                className="flex items-center gap-5 text-xl"
              >
                <MdCategory size={30}></MdCategory>Category
              </Link>
            </li>
            <li className="my-10">
              <a href="" className="flex items-center gap-5 text-xl">
                <CiUser size={30}></CiUser>User
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

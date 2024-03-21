import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Main from "./Main";

const LayoutAdmin = () => {
  return (
    <div className=" grid grid-cols-[1fr,5fr] ">
      <Sidebar></Sidebar>
      <Main>
        <Outlet></Outlet>
      </Main>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default LayoutAdmin;

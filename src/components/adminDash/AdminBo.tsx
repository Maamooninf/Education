import { Outlet } from "react-router-dom";
import { AdminMain } from "./AdminStyle";
import SideBar from "./sideBar/SideBar";

function AdminBo() {
  return (
    <AdminMain>
      <SideBar />
      <Outlet />
    </AdminMain>
  );
}

export default AdminBo;

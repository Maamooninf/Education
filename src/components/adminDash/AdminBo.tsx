import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AdminMain } from "./AdminStyle";
import SideBar from "./sideBar/SideBar";

function AdminBo() {
  return (
    <AdminMain>
      <ToastContainer />
      <SideBar />

      <Outlet />
    </AdminMain>
  );
}

export default AdminBo;

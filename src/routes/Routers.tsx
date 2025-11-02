import { Navigate, Route, Routes } from "react-router-dom";
// import DashboardRoute from "./DashboardRoute";
import Page404 from "../pages/page404/Page404";
import UsersRoute from "./UsersRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users/login" replace />} />
      <Route path="/users/*" element={<UsersRoute />} />
      {/* <Route path="/dashboard/*" element={<DashboardRoute />} /> */}
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default Routers;

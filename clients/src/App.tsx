import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Shop from "./components/pages/Shop";
import CreatProducts from "./components/CreatProducts";
import Admin from "./components/pages/Admin";
import Index from "./components/pages/Index";
import Details from "./components/pages/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteUser from "./components/pages/DeleteUser";
import ChangeProducts from "./components/pages/ChangeProducts";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChangeProducts></ChangeProducts>}></Route>
        <Route path="/deleteUser" element={<DeleteUser></DeleteUser>}></Route>
        <Route path="/index/detail" element={<Details></Details>}></Route>
        <Route path="/index" element={<Index></Index>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/creatProducts" element={<CreatProducts />}></Route>
        <Route path="/admin/shop" element={<Shop />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Outlet />
    </div>
  );
}

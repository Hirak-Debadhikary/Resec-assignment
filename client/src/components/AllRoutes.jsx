import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import AboutUsPage from "./AboutUsPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/userdetails" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

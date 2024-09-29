import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./Pages/AuthenticationPage";
import RootPage from "../src/Pages/RootPage";
import LoginLayout from "./Layouts/LoginLayout";
import HomeLayout from "./Layouts/HomeLayout";
import Course from "./Layouts/Course";
const App = () => {
  return (
    <div className=" max-w-screen text-slate-800 min-h-screen font-dmsans bg-slate-100 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/:id" element={<Course />} />
          </Route>
          <Route path="/login" element={<AuthenticationPage />}>
            <Route path="/login" element={<LoginLayout />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Navbar from './components/layout/Navbar';
const Router = () => {
  return (
    <>
      <Navbar />

      <div className="h-screen w-full bg-center bg-cover bg-no-repeat bg-[url('./images/bg.jpg')] ">
        <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 server">
          <h2 className="text-2xl my-8 bg-clip-text text-transparent bg-black">
            WELCOME TO RESTROMEAL PLEASED lOGIN BEFORE VISIT US
          </h2>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

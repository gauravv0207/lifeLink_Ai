import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          {/* <Route path="/" element={SignIn} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1500} pauseOnHover={false} />
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./login.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import ExternalWebsiteModal from "../Modals/ExternalWebsiteModal.jsx";

export default function LogIn() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username === "amit" && formData.password === "amit") {
    //   openModal();
        window.location.href = "https://chat.openai.com/g/g-AJRKgBK5g-vidya";
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <div className="modal">
        <ExternalWebsiteModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          //   websiteUrl="https://chat.openai.com/g/g-AJRKgBK5g-vidya"
          websiteUrl="https://chat.openai.com/g/g-AJRKgBK5g-vidya"
        />
      </div>

      <div id="admin-console-login-page">
        <div className="login-form-block">
          <div className="top-block">
            <div className="logo">
              <img src="/new-logo.png" alt="..." />
            </div>
            <div className="head">
              {" "}
              <b>Vidya!</b> Your True Pharma AI Buddy
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="group-input">
              <label>
                <svg width="20" height="20" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#ffffff"
                    d="M0 146.484v168.677l600 342.114l600-342.114V146.484zm0 276.563v494.604L305.64 597.29zm1200 0L894.36 597.29L1200 917.651zM389.575 645.19L0 1053.516h1200L810.425 645.19L600 765.161z"
                  />
                </svg>
              </label>
              <input
                type="username"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="group-input">
              <label>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-.452 0-.867 0-1.25.004zM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <input type="submit" value="Login" className="submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

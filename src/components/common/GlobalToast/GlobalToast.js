import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalToast = () => <ToastContainer position="top-right" autoClose={3000} theme="colored" />;

export default GlobalToast;

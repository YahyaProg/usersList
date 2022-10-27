import React from "react";
import PersonsList from "./personsList";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <PersonsList />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;

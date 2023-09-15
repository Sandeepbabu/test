import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from './components/Header';
import Login from './loginform';
import Sidebar from "./components/Sidebar"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute"
import BagDispatch from './Bag Dispatch/BagDispatch';



function App() {

  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/BagDispatch" element={<BagDispatch />} />

             
      </Routes>

      </Router>



    </>
  );
}
export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "./UserContext";
import UserAuth from "./components/UserAuth";
import Signup from "./components/SignUp";
import ManageDiet from "./components/ManageDiet";
import AddFood from "./components/AddFood";
import ViewDiet from "./components/ViewDiet";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        <UserProvider>
          <AnimatePresence>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Home />} path="home" />
              <Route element={<Signup />} path="signup" />
              <Route element={<Login />} path="Login" />
              <Route element={<AddFood />} path="addfood" />
              <Route element={<ViewDiet />} path="viewdiet/:id" />
              <Route element={ <UserAuth ><ManageDiet /></UserAuth> } path="managediet" />
             
            </Routes>
          </AnimatePresence>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
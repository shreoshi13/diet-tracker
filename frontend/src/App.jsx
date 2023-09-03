import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "./UserContext";
import UserAuth from "./components/UserAuth";
import Signup from "./components/SignUp";
import ManageDiet from "./components/ManageDiet";

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
              <Route element={<ManageDiet />} path="manage" />
             
            </Routes>
          </AnimatePresence>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
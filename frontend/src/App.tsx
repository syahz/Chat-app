/** @format */

import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signup/SignUp";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex items-center justify-center h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

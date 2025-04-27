import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import ScrollEffect from "./components/ScrollEffect";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import About from './pages/About';
import Destinations from './pages/Destinations';
import Partners from './pages/Partners';


const AppRouter = () => {
    // console.log("Маршруты загружены");  // ✅ Проверяем, вызывается ли роутер

    useEffect(() => {
      const mediaQueryAdaptive = window.matchMedia("(max-width: 992px)");
      
      const handleScreenSizeChangeAdaptive = (x) => {
        if (x.matches) {
          const header = document.querySelector(".header");
          if (header) {
            const headerHeight = header.offsetHeight;
            const explore = document.querySelector(".explore");
            if (explore) {
              explore.style.paddingTop = `${headerHeight}px`;
            }
          }
        }
      };
  
      mediaQueryAdaptive.addEventListener("change", handleScreenSizeChangeAdaptive);
      handleScreenSizeChangeAdaptive(mediaQueryAdaptive);
  
      return () => {
        mediaQueryAdaptive.removeEventListener("change", handleScreenSizeChangeAdaptive);
      };
    }, []);

    return (
        <Router>
          <ScrollEffect />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={ <Home /> } />
                <Route path="/destinations" element={ <Destinations />  } />
                <Route path="/about" element={ <About /> } />
                <Route path="/partners" element={ <Partners /> } />

                {/* 🔐 Защищенные маршруты (только для user и admin) */}
                <Route path="/user" element={ <ProtectedRoute allowedRoles={["user", "admin"]}> <UserPage /> </ProtectedRoute> } />
                <Route path="/admin" element={ <ProtectedRoute allowedRoles={["admin"]}> <AdminPage /> </ProtectedRoute> } />

                {/* 🔐 Destinations, About и Partners тоже доступны только для user и admin */}

                {/* Если страница не найдена — редирект на `/` */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

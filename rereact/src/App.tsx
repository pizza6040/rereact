import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <div>App</div>
        <Link to="/example">example</Link>
      </div>
    </>
  );
};

export default App;

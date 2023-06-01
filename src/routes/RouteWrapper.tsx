import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import RootWrapper from "../components/RootWrapper";

const RouteWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootWrapper />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouteWrapper;

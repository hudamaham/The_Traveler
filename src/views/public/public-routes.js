import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import PrivacyPolicy from "./PrivacyPolicy";
import Authorization from "./Authorization";
export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="authorization" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

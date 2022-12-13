import React from "react";
import PublicRoutes from "./public/public-routes";
import PrivateRoutes from "./private/private-routes";
import { useSelector } from "react-redux";
export default function MyRoutes() {
  const { isAuthenticated } = useSelector((state) => state.authentification);
  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}

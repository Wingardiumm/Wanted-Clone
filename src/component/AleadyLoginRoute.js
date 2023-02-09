import React from "react";
import { Navigate } from "react-router-dom";

function AleadyLoginRoute({ authenticated, component: Component }) {
  return authenticated ? <Navigate to="/resumeLanding" /> : Component;
}

export default AleadyLoginRoute;

import React from "react";
import "./bottom.css";
import { useNavigate } from "react-router-dom";
import { BiHomeAlt, BiUser, BiTrophy } from "react-icons/bi";
import { useLocation } from "react-router-dom";
export default function BottomNav() {
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bottom-nav">
      <div
        className={`bottom-nav_item   ${
          location.pathname === "/" && "bottom-nav_item_active"
        }`}
        onClick={() => navigate("/")}
      >
        <BiHomeAlt />
        <p>Home</p>
      </div>
      <div
        className={`bottom-nav_item   ${
          location.pathname === "/leaderboard" && "bottom-nav_item_active"
        }`}
        onClick={() => navigate("/leaderboard")}
      >
        <BiTrophy />
        <p>LeaderBoard</p>
      </div>
      <div
        className={`bottom-nav_item   ${
          location.pathname === "/profile" && "bottom-nav_item_active"
        }`}
        onClick={() => navigate("/profile")}
      >
        <BiUser />
        <p>Profile</p>
      </div>
    </div>
  );
}

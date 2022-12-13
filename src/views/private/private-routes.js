import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Game from "./Game";
import LeaderBoard from "./LeaderBoard";
import ListGames from "./ListGames";
import Result from "./Result";
import Profile from "./Profile";
import Main from "./Main";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Main />} />
      <Route path="/game" element={<Game />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/list-games" element={<ListGames />} />
      <Route path="/results" element={<Result />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

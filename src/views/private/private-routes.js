import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Game from "./Game";
import LeaderBoard from "./LeaderBoard";
import ListGames from "./ListGames";
import Result from "./Result";
import Profile from "./Profile";
import Main from "./Main";
import Winner from "./Winner";
import City from "./City";
import GameOver from "./GameOver";
import BottomNav from "../../components/BottomNav";
import { Flex } from "@chakra-ui/react";

export default function PrivateRoutes() {
  const location = useLocation();
  return (
    <Flex flexDirection={"column"}>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/game-over" element={<GameOver />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/list-games" element={<ListGames />} />
        <Route path="/results" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {["/", "/leaderboard", "/profile"].includes(location.pathname) && (
        <Flex justifyContent={"center"}>
          <BottomNav />
        </Flex>
      )}
    </Flex>
  );
}

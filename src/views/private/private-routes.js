import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Game from "./Game";
import LeaderBoard from "./LeaderBoard";
import ListGames from "./ListGames";
import Profile from "./Profile";
import Main from "./Main";
import City from "./City";
import Score from "./Score";
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

        <Route path="/score" element={<Score />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/list-games" element={<ListGames />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>

      {["", "leaderboard", "profile", "city"].includes(
        location.pathname.split("/")[1]
      ) && (
        <Flex justifyContent={"center"}>
          <BottomNav />
        </Flex>
      )}
    </Flex>
  );
}

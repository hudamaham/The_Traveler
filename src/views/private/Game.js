import React from "react";
import {
  Box,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import game from "../../assets/game.png";
import { useNavigate } from "react-router-dom";
export default function Game() {
  const navigate = useNavigate();
  return (
    <Flex
      direction={"column"}
      bg={"linear-gradient(to Right,#5870eb, #17adfb)"}
      h={"100vh"}
      alignItems={"center"}
      textAlign="start"
      py={1}
    >
      {/* header */}
      <Flex
        w="100%"
        justifyContent={"space-between"}
        alignItems={"center"}
        color="#fff"
        py={1}
        px={4}
      >
        <MdOutlineCancel fontSize={24} onClick={() => navigate(-1)} />
        <CircularProgress value={(100 * 5) / 15} color="white" size={10}>
          <CircularProgressLabel fontSize={16}>5</CircularProgressLabel>
        </CircularProgress>
        <Flex border={"1px solid #fff"} borderRadius={30} py={1} px={2}>
          <AiFillHeart fontSize={24} /> 3
        </Flex>
      </Flex>

      <Image src={game} h={"250px"} w={"250px"} />
      <Flex w="100%" direction={"column"} px={4}>
        <Text color={"#aab7f5"} fontWeight={"bold"}>
          Question 5 of 10
        </Text>
        <Text color={"#fff"} fontWeight={"bold"} fontSize={30}>
          In which city of Germany is the largest port ?
        </Text>
      </Flex>
      <Flex direction={"column"} w="100%" px={3} pt={4}>
        <Flex
          bg="linear-gradient(180deg, #FF6899 0%, #C9295C 169.88%)"
          color={"#fff"}
          borderRadius={16}
          p={2}
          my={2}
          w="100%"
          fontSize={20}
          fontWeight={"bold"}
          justifyContent="center"
          alignItems={"center"}
          onClick={() => navigate("/game-over")}
        >
          <Text textAlign="center">Bremen</Text>
        </Flex>
        <Flex
          bg="linear-gradient(180deg, #FFE000 0%, #799F0C 169.88%)"
          color={"#ffff"}
          borderRadius={16}
          p={2}
          my={2}
          w="100%"
          fontSize={20}
          fontWeight={"bold"}
          justifyContent="center"
          alignItems={"center"}
          onClick={() => navigate("/winner")}
        >
          <Text textAlign="center">Hamburg</Text>
        </Flex>
        <Flex
          bg="#fff"
          color={"#5a72ec"}
          borderRadius={16}
          p={2}
          my={2}
          w="100%"
          fontSize={20}
          fontWeight={"bold"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Text textAlign="center">Norden</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

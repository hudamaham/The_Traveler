import React, { useState, useEffect, useRef } from "react";
import clickSound from "../../assets/audios/click.mp3";
import bgSound from "../../assets/audios/background-game.mp3";
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
const questions = [
  {
    question: "Qestion 1 ? ",
    responses: [
      { name: "Response A ", status: true },
      { name: "Response B ", status: false },
      { name: "Response C ", status: false },
    ],
    img: "",
  },
  {
    question: "Qestion 2 ? ",
    responses: [
      { name: "Response 2 A ", status: false },
      { name: "Response 2 B ", status: true },
      { name: "Response 2 C ", status: false },
    ],
    img: "",
  },
  {
    question: "Qestion 3 ? ",
    responses: [
      { name: "Response 3 A ", status: false },
      { name: "Response 3 B ", status: false },
      { name: "Response 3 C ", status: true },
    ],
    img: "",
  },
];
export default function Game() {
  let audio = useRef();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [responseBg, setResponseBg] = useState(["#fff", "#fff", "#fff"]);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(10);
  const SoundClick = () => {
    new Audio(clickSound).play();
  };
  const navigate = useNavigate();
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter((prev) => prev - 1), 1000);
    if (counter === 0) {
      if (indexQuestion < questions.length - 1) {
        setIndexQuestion((prev) => prev + 1);
      } else {
        setTimeout(function () {
          navigate("/score", {
            state: { score: score, total: questions.length },
          });
        }, 1000);
      }
    }
  }, [counter]);
  useEffect(() => {}, [responseBg]);
  useEffect(() => {}, [indexQuestion]);

  useEffect(() => {
    audio.current = new Audio(bgSound);
    audio.current.volume = 0.02;
    audio.current.play();
  }, []);

  useEffect(() => {
    return () => {
      audio.current.pause();
    };
  }, []);
  return (
    <Flex
      direction={"column"}
      bg={"linear-gradient(95.75deg, #00A95C 81.03%, #FFD700 138.12%)"}
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
        <CircularProgress
          value={(100 * counter) / 10}
          color="#D7D0D0"
          size={10}
        >
          <CircularProgressLabel fontSize={16}>{counter}</CircularProgressLabel>
        </CircularProgress>
        <Flex border={"1px solid #fff"} borderRadius={30} py={1} px={2}>
          <AiFillHeart fontSize={24} /> 3
        </Flex>
      </Flex>

      <Image src={game} h={"250px"} w={"250px"} />
      <Flex w="100%" direction={"column"} px={4}>
        <Text color={"#D5D2D2"} fontWeight={"bold"}>
          Question {indexQuestion + 1} of {questions.length}
        </Text>
        <Text color={"#fff"} fontWeight={"bold"} fontSize={30}>
          {questions[indexQuestion].question}
        </Text>
      </Flex>
      <Flex direction={"column"} w="100%" px={3} pt={4}>
        {questions[indexQuestion].responses.map((res, index) => {
          return (
            <Flex
              bg={responseBg[index]}
              color={"#252733"}
              borderRadius={16}
              p={2}
              my={2}
              w="100%"
              fontSize={20}
              fontWeight={"bold"}
              justifyContent="center"
              alignItems={"center"}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                SoundClick();
                let colors = [...responseBg];
                if (res.status) {
                  setScore((prev) => prev + 1);
                  colors[index] =
                    "linear-gradient(180deg, #FFE000 0%, #799F0C 169.88%)";
                } else {
                  colors[index] =
                    "linear-gradient(180deg, #FF6899 0%, #C9295C 169.88%)";
                }
                setResponseBg(colors);
                setCounter(10);
                if (indexQuestion < questions.length - 1) {
                  setTimeout(function () {
                    setIndexQuestion((prev) => prev + 1);

                    setResponseBg(["#fff", "#fff", "#fff"]);
                  }, 1000);
                } else {
                  setTimeout(function () {
                    navigate("/score", {
                      state: { score: score, total: questions.length },
                    });
                  }, 1000);
                }
              }}
            >
              <Text textAlign="center">{res.name}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

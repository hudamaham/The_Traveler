import { Flex, Image, Text } from "@chakra-ui/react";
import done from "../../assets/done.png";
import lock from "../../assets/lock.png";
import play from "../../assets/play.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import clickSound from "../../assets/audios/click.mp3";
export default function Categorie({ path, name, img, colors, state }) {
  const navigate = useNavigate();
  const SoundClick = () => {
    new Audio(clickSound).play();
  };
  return (
    <Flex
      bg={`linear-gradient(to Right,${colors.left}, ${colors.right})`}
      borderRadius={24}
      mx={10}
      my={4}
      p={3}
      flex={1}
      justifyContent={"space-between"}
      onClick={() => {
        SoundClick();
        navigate(path);
      }}
      _hover={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Flex direction={"column"} justifyContent="space-around">
        <Image
          h={"40px"}
          w={"40px"}
          src={state === "lock" ? lock : state === "play" ? play : done}
        />
        <Text color="#fff" fontWeight={"bold"} fontSize={30}>
          {name}
        </Text>
      </Flex>

      <Image src={img} position={"relative"} top={"-35px"} />
    </Flex>
  );
}

import React from "react";
import logo from "../../assets/Logo.png";
import { Flex, Box, Image, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Authorization() {
  const navigate = useNavigate();
  return (
    <Flex
      direction={"column"}
      py={3}
      bg={"linear-gradient(95.75deg, #00A95C 81.03%, #FFD700 138.12%)"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex direction={"column"}>
        <Image src={logo} h={"200px"} w={"200px"} zIndex={55} />
        <Image
          zIndex={1}
          src={logo}
          h={"200px"}
          w={"200px"}
          bg={"#fff"}
          position={"relative"}
          top={"-200px"}
          filter={"blur(60px)"}
        />
      </Flex>
      <Flex
        direction={"column"}
        textAlign={"center"}
        color={"#B0C2FF"}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"}>
          <Button
            borderRadius={10}
            color={"#000"}
            mb={2}
            mx={1}
            onClick={() => navigate("/registration")}
          >
            S'inscrire
          </Button>
          <Button
            borderRadius={10}
            color={"#000"}
            mx={1}
            mb={1}
            onClick={() => navigate("/login")}
          >
            Se connecter
          </Button>
        </Flex>
        <Text px={1}>
          By continuing , you agree to the{" "}
          <strong style={{ color: "#fff" }}>Terms </strong>and
          <strong style={{ color: "#fff" }}> Privacy Policy </strong>
        </Text>
      </Flex>
    </Flex>
  );
}

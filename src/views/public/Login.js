import React from "react";

import { Flex, Button, Text, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { logInTemperory } from "../../services/auth-service";
import { useDispatch } from "react-redux";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Flex
      direction={"column"}
      py={3}
      bg={"linear-gradient(to Right,#5870eb, #17adfb)"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Text fontSize={20} fontWeight={"bold"} color="#ffff">
        Se Connecter
      </Text>
      <Text
        fontSize={30}
        my={10}
        fontWeight={"bold"}
        textAlign={"start"}
        color="#ffff"
      >
        Veuillez se connecter
      </Text>
      <Flex
        direction={"column"}
        flex={1}
        w={{ base: "100%", md: "50%" }}
        px={4}
      >
        <Input
          border={"none"}
          borderBottom={"1px solid #eee"}
          borderRadius={0}
          mb={2}
          _placeholder={{ color: "#eee", fontWeight: "bold" }}
          _focus={{
            border: "none",
            borderBottom: "2px solid #eee",
            boxShadow: "none",
          }}
          color={"#fff"}
          placeholder="Nom d'utilisateur"
        />
        <Input
          border={"none"}
          borderBottom={"1px solid #eee"}
          borderRadius={0}
          mb={2}
          _placeholder={{ color: "#eee", fontWeight: "bold" }}
          _focus={{
            border: "none",
            borderBottom: "2px solid #eee",
            boxShadow: "none",
          }}
          color={"#fff"}
          placeholder="Mot de passe"
        />
      </Flex>
      <Flex
        direction={"column"}
        textAlign={"center"}
        color={"#fff"}
        w={{ base: "100%", md: "50%" }}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"}>
          <Button
            borderRadius={16}
            color={"#596fec"}
            mx={3}
            onClick={() => {
              dispatch(logInTemperory());
              navigate("/");
            }}
          >
            Login
          </Button>
          <Text
            fontWeight={"bold"}
            onClick={() => navigate("/registration")}
            _hover={{ cursor: "point" }}
            mt={2}
          >
            Creer un compte
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

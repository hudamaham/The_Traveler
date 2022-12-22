import React, { useState } from "react";

import { Flex, Button, Text, Input, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/auth-service";
import { useDispatch, useSelector } from "react-redux";
export default function Login() {
  const [login] = useLoginMutation();
  const { loginError, isAuthenticated } = useSelector(
    (state) => state.authentification
  );
  const [error, setError] = useState(loginError);
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Flex
      direction={"column"}
      py={3}
      bg={"linear-gradient(95.75deg, #00A95C 81.03%, #FFD700 138.12%)"}
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
        {" "}
      </Text>
      <Flex
        direction={"column"}
        flex={1}
        w={{ base: "100%", md: "50%" }}
        px={4}
      >
        {error && (
          <Box bg={"#fff"} p={5} borderRadius={13} textAlign={"center"}>
            {" "}
            <Text color={"red"}>{error}</Text>
          </Box>
        )}
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
          onChange={(e) => setUser(e.target.value)}
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
          type={"password"}
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
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
            borderRadius={10}
            color={"#252733"}
            mx={3}
            onClick={() => {
              login({ username: username, password: password }).then((res) => {
                if (isAuthenticated) {
                  navigate("/");
                }
                else{
                  setError(loginError);
                }
              });
              // .catch((error) => {
              //   console.error(error);
              // });
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

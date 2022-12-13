import React, { useState } from "react";
import uploadimg from "../../assets/upload.png";
import { MdFileUpload } from "react-icons/md";
import { Flex, Image, Button, Text, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState(null);
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
        S'inscrire
      </Text>

      <Image
        src={userImage ? userImage : uploadimg}
        borderRadius={100}
        w={"150px"}
        h={"150px"}
      />
      <Button
        onClick={() => document.getElementById("selectedFile").click()}
        position={"relative"}
        top={"-20px"}
        left={"40px"}
        color={"#fff"}
        bg={"none"}
        border={"1px dotted #fff"}
        borderRadius={100}
        p={0}
      >
        <MdFileUpload />
      </Button>

      <Input
        id="selectedFile"
        size="md"
        display={"none"}
        type="file"
        onChange={(event) => {
          setUserImage(URL.createObjectURL(event.target.files[0]));
        }}
      />
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
          placeholder="Prenom"
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
          placeholder="Nom"
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
          <Button borderRadius={16} color={"#596fec"} mx={3}>
            Register
          </Button>
          <Text
            fontWeight={"bold"}
            onClick={() => navigate("/login")}
            _hover={{ cursor: "point" }}
            mt={2}
          >
            Avez-Vous deja un compte ?
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

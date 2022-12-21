import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import winbg from "../../assets/winBg.png";
import trophy from "../../assets/tophy.png";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Winner() {
  const navigate = useNavigate();
  return (
    <Flex direction={"column"} justifyContent="center" alignItems={"center"}>
      <Flex alignItems={"start"} w="100%" p={2}>
        <MdOutlineCancel fontSize={24} onClick={() => navigate(-1)} />
      </Flex>
      <Image src={winbg} h={"50vh"} w="100%" />
      <Image
        src={trophy}
        h="150px"
        w={"150px"}
        position="absolute"
        bottom={"-100%"}
      />
    </Flex>
  );
}

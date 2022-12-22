import React, { useEffect } from "react";
import "./profile.css";
import { logOut } from "../../../services/auth-service";
import Header from "../../../components/Header";
import uploadimg from "../../../assets/upload.png";
import { Flex, Image, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((state) => state.authentification);

  return (
    <div className="leaderboard">
      <Header title={"Profile"} />
      <Flex direction={"column"} alignItems={"center"} px={5}>
        <Flex justifyContent={"center"} alignItems={"center"} pt={2}>
          <Image src={uploadimg} borderRadius={100} />
        </Flex>
        <Text color={"#252733"} fontSize={"1.3rem"} fontWeight="bold">
          {user.first} {user.last}
        </Text>
        <Text color={"#ADADAD"}>{user.username}</Text>
        <LinkProfile name={"Update profile"} />
        <LinkProfile name={"My Score"} />
        <LinkProfile name={"Log Out"} islogout={true} onOpen={onOpen} />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#fff">Confirm loging out</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>are sure you want to log out ?</p>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg="#D01C1F"
              color="#fff"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Log out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

const LinkProfile = ({ path, name, islogout, onOpen }) => {
  const navigate = useNavigate();

  return (
    <Flex
      bg={"#fff"}
      w={{ base: "100%", md: "70%" }}
      _hover={{ cursor: "pointer" }}
      py={4}
      px={1}
      borderRadius={10}
      mb={2}
      justifyContent="center"
      onClick={() => {
        if (islogout) {
          onOpen();
        } else {
          navigate(path);
        }
      }}
    >
      <Text
        color={islogout ? "red" : "#252733"}
        fontSize={"1.1rem"}
        fontWeight="bold"
        textAlign={"center"}
      >
        {name}
      </Text>
    </Flex>
  );
};

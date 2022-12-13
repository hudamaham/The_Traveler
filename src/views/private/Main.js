import React from "react";
import culture from "../../assets/culture.png";
import historique from "../../assets/historique.png";
import geographie from "../../assets/geographe.png";
import Categorie from "../../components/Categorie";
import { Flex, Text } from "@chakra-ui/react";
export default function Main() {
  return (
    <Flex direction={"column"} h="100vh" justifyContent={"space-between"} p={2}>
      <Text fontSize={40} color={"#f55e7a"} my={3} fontWeight="bold">
        Nouakchott
      </Text>
      <Flex direction={"column"}>
        <Categorie
          path="/game"
          name={"Culture"}
          img={culture}
          state={"done"}
          colors={{ left: "#ed709e", right: "#ec8b6a" }}
        />

        <Categorie
          path="/game"
          name={"Historique"}
          img={historique}
          state={"play"}
          colors={{ left: "#5374ed", right: "#0bb9fd" }}
        />
        <Categorie
          path="/game"
          name={"Geographie"}
          img={geographie}
          state={"lock"}
          colors={{ left: "#a58fd3", right: "#f9c0e9" }}
        />
      </Flex>
    </Flex>
  );
}

import React, { useState } from "react";
import culture from "../../assets/culture.png";
import historique from "../../assets/historique.png";
import geographie from "../../assets/geographe.png";
import Categorie from "../../components/Categorie";
import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
export default function City() {
  const { id } = useParams();
  const [cities, setCities] = useState({
    MRT2783: "Tiris Zemmour",
    MRT2784: "Brakna",
    MRT2785: "Dakhlet Nouadhibou",
    MRT2786: "Inchiri",
    MRT2787: "Nouakchott",
    MRT2788: "Trarza",
    MRT2789: "Assaba",
    MRT2790: "Guidimaka",
    MRT2791: "Gorgol",
    MRT2795: "Adrar",
    MRT2796: "Hodh ech Chargui",
    MRT2796: "Hodh Ech Chargui",
    MRT2797: "Hodh el Gharbi",
    MRT2797: "Hodh El Gharbi",
    MRT2798: "Tagant",
  });
  return (
    <div className="leaderboard">
      <Header icon={""} title={`City ${cities[id]}`} />
      <Flex
        direction={"column"}
        h="100vh"
        justifyContent={"space-between"}
        p={2}
      >
        <Text fontSize={40} color={"#f55e7a"} my={3} fontWeight="bold">
          {cities[id]}
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
    </div>
  );
}

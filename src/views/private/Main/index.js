import React, { useState, useEffect } from "react";
import "./mapmr.css";
import BottomNav from "../../../components/BottomNav";
import Header from "../../../components/Header";
import { ReactComponent as Map } from "./mapMR/mr.svg";
import { useNavigate } from "react-router-dom";
const regionsIds = [
  "MRT2783",
  "MRT2784",
  "MRT2785",
  "MRT2786",
  "MRT2787",
  "MRT2788",
  "MRT2789",
  "MRT2790",
  "MRT2791",
  "MRT2795",
  "MRT2796",
  "MRT2797",
  "MRT2798",
];
const cities = {
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
};
export default function Main() {
  const navigate = useNavigate();
  const [cities, setcities] = useState([]);
  const [clicked, setClicked] = useState("0");

  const ClickedRegion = (id) => {
    document.getElementById("MRT2783").style.fill = "#7c7c7c";
    document.getElementById("MRT2784").style.fill = "#7c7c7c";
    document.getElementById("MRT2785").style.fill = "#7c7c7c";
    document.getElementById("MRT2786").style.fill = "#7c7c7c";
    document.getElementById("MRT2787").style.fill = "#7c7c7c";
    document.getElementById("MRT2788").style.fill = "#7c7c7c";
    document.getElementById("MRT2789").style.fill = "#7c7c7c";
    document.getElementById("MRT2790").style.fill = "#7c7c7c";
    document.getElementById("MRT2791").style.fill = "#7c7c7c";
    document.getElementById("MRT2795").style.fill = "#7c7c7c";
    document.getElementById("MRT2796").style.fill = "#7c7c7c";
    document.getElementById("MRT2797").style.fill = "#7c7c7c";
    document.getElementById("MRT2798").style.fill = "#7c7c7c";
    document.getElementById(id).style.fill = "#d16124";
    navigate(`city/${id}`);
  };
  const ShowElement = (id) => {
    console.log("mouseover");
    document.getElementById(id).addEventListener("mouseover", () => {
      document.getElementById(`${id}_nameTag`).style.display = "block";
    });
    document.getElementById(id).addEventListener("mouseout", () => {
      document.getElementById(`${id}_nameTag`).style.display = "none";
    });
  };
  useEffect(() => {
    regionsIds.map((id) => {
      document.getElementById(id).addEventListener("click", () => {
        setClicked(id);
        ClickedRegion(id);
      });
    });
  }, []);
  return (
    <div className="leaderboard">
      <Header icon={""} title={"Main"} />
      {regionsIds.map((id) => {
        return (
          <p id={`${id}_nameTag`} style={{ display: "none" }}>
            {cities[id]}
          </p>
        );
      })}

      <div className="map_section">
        <div className="main_description">
          <h1>
            Welcome to
            <br />
            <span data-shadow-text="Text-Shadow">The Traveler</span>
            <br /> start playing
          </h1>
        </div>

        <div className="map">
          <Map className=" " />
        </div>
        {/* <BottomNav /> */}
      </div>
    </div>
  );
}

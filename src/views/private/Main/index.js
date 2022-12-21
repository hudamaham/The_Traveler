import React, { useState, useEffect } from "react";
import "./mapmr.css";
import BottomNav from "../../../components/BottomNav";
import Header from "../../../components/Header";
import { ReactComponent as Map } from "./mapMR/mr.svg";
import { useNavigate } from "react-router-dom";
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
  useEffect(() => {
    //  setcities(props.cities);
    document.getElementById("MRT2783").addEventListener("click", () => {
      setClicked("MRT2783");
      ClickedRegion("MRT2783");
    });

    document.getElementById("MRT2784").addEventListener("click", () => {
      setClicked("MRT2784");
      ClickedRegion("MRT2784");
    });

    document.getElementById("MRT2785").addEventListener("click", () => {
      setClicked("MRT2785");
      ClickedRegion("MRT2785");
    });

    document.getElementById("MRT2786").addEventListener("click", () => {
      setClicked("MRT2786");
      ClickedRegion("MRT2786");
    });

    document.getElementById("MRT2787").addEventListener("click", () => {
      setClicked("MRT2787");
      ClickedRegion("MRT2787");
    });

    document.getElementById("MRT2788").addEventListener("click", () => {
      setClicked("MRT2788");
      ClickedRegion("MRT2788");
    });

    document.getElementById("MRT2789").addEventListener("click", () => {
      setClicked("MRT2789");
      ClickedRegion("MRT2789");
    });

    document.getElementById("MRT2790").addEventListener("click", () => {
      setClicked("MRT2790");
      ClickedRegion("MRT2790");
    });

    document.getElementById("MRT2791").addEventListener("click", () => {
      setClicked("MRT2791");
      ClickedRegion("MRT2791");
    });

    document.getElementById("MRT2795").addEventListener("click", () => {
      setClicked("MRT2795");
      ClickedRegion("MRT2795");
    });

    document.getElementById("MRT2796").addEventListener("click", () => {
      setClicked("MRT2796");
      ClickedRegion("MRT2796");
    });

    document.getElementById("MRT2797").addEventListener("click", () => {
      setClicked("MRT2797");
      ClickedRegion("MRT2797");
    });

    document.getElementById("MRT2798").addEventListener("click", () => {
      setClicked("MRT2798");
      ClickedRegion("MRT2798");
    });
    // document.getElementById('outsidemap').addEventListener("click", ()=>{
    //  setClicked('0')
    // });

    /*document.getElementsByClassName('Mr-MAP')[0].addEventListener("click", ()=>{
        setClicked('0')
       }); */
  }, []);
  return (
    <div className="leaderboard">
      <Header icon={""} title={"Main"} />

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

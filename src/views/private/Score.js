import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bgSound from "../../assets/audios/score.mp3";
import Congratulation from "../../components/Congratulation";
export default function Score() {
  let audio = useRef();
  useEffect(() => {
    audio.current = new Audio(bgSound);
    audio.current.volume = 0.1;
    // audio.current.loop = true;
    audio.current.play();
  }, []);

  useEffect(() => {
    return () => {
      audio.current.pause();
    };
  }, []);
  const location = useLocation();
  return (
    <div>
      <Congratulation
        score={location.state.score}
        total={location.state.total}
      />
    </div>
  );
}

import React from "react";

export default function Header({ icon, title }) {
  return (
    <header>
      {icon}

      <h1 className="leaderboard__title">
        <span className="leaderboard__title--top">The Traveler</span>
        <span className="leaderboard__title--bottom">{title}</span>
      </h1>
    </header>
  );
}

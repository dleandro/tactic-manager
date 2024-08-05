"use client";

import React, { useState } from "react";
import "../styles/FootballPitch.css";

const FootballPitch: React.FC = () => {
  const initialPositions = [
    // Left side players
    { id: "player-0", left: "10%", top: "10%", name: "Player 1", team: "home" },
    { id: "player-1", left: "10%", top: "20%", name: "Player 2", team: "home" },
    { id: "player-2", left: "10%", top: "30%", name: "Player 3", team: "home" },
    { id: "player-3", left: "10%", top: "40%", name: "Player 4", team: "home" },
    { id: "player-4", left: "10%", top: "50%", name: "Player 5", team: "home" },
    { id: "player-5", left: "10%", top: "60%", name: "Player 6", team: "home" },
    { id: "player-6", left: "10%", top: "70%", name: "Player 7", team: "home" },
    { id: "player-7", left: "20%", top: "20%", name: "Player 8", team: "home" },
    { id: "player-8", left: "20%", top: "40%", name: "Player 9", team: "home" },
    {
      id: "player-9",
      left: "20%",
      top: "60%",
      name: "Player 10",
      team: "home",
    },
    {
      id: "player-10",
      left: "20%",
      top: "80%",
      name: "Player 11",
      team: "home",
    },
    // Right side players
    {
      id: "player-11",
      left: "80%",
      top: "10%",
      name: "Player 12",
      team: "away",
    },
    {
      id: "player-12",
      left: "80%",
      top: "20%",
      name: "Player 13",
      team: "away",
    },
    {
      id: "player-13",
      left: "80%",
      top: "30%",
      name: "Player 14",
      team: "away",
    },
    {
      id: "player-14",
      left: "80%",
      top: "40%",
      name: "Player 15",
      team: "away",
    },
    {
      id: "player-15",
      left: "80%",
      top: "50%",
      name: "Player 16",
      team: "away",
    },
    {
      id: "player-16",
      left: "80%",
      top: "60%",
      name: "Player 17",
      team: "away",
    },
    {
      id: "player-17",
      left: "80%",
      top: "70%",
      name: "Player 18",
      team: "away",
    },
    {
      id: "player-18",
      left: "70%",
      top: "20%",
      name: "Player 19",
      team: "away",
    },
    {
      id: "player-19",
      left: "70%",
      top: "40%",
      name: "Player 20",
      team: "away",
    },
    {
      id: "player-20",
      left: "70%",
      top: "60%",
      name: "Player 21",
      team: "away",
    },
    {
      id: "player-21",
      left: "70%",
      top: "80%",
      name: "Player 22",
      team: "away",
    },
  ];

  const [playerPositions, setPlayerPositions] = useState(initialPositions);
  const [footballPosition, setFootballPosition] = useState({
    left: "50%",
    top: "50%",
  });

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    id: string
  ) => {
    event.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    if (id === "football") {
      setFootballPosition({
        left: `${offsetX - 10}px`, // Adjusting for football element width
        top: `${offsetY - 10}px`, // Adjusting for football element height
      });
    } else {
      setPlayerPositions((prevPositions) =>
        prevPositions.map((player) =>
          player.id === id
            ? {
                ...player,
                left: `${offsetX - 10}px`, // Adjusting for player element width
                top: `${offsetY - 10}px`, // Adjusting for player element height
              }
            : player
        )
      );
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    playerId: string
  ) => {
    const newName = event.target.value;
    setPlayerPositions((prevPositions) =>
      prevPositions.map((player) =>
        player.id === playerId
          ? {
              ...player,
              name: newName,
            }
          : player
      )
    );
  };

  return (
    <div className="pitch" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="halfway-line"></div>
      <div className="center-circle"></div>
      <div className="penalty-area penalty-area-left"></div>
      <div className="penalty-area penalty-area-right"></div>
      <div className="goal goal-left"></div>
      <div className="goal goal-right"></div>
      {playerPositions.map((player) => (
        <div
          key={player.id}
          id={player.id}
          className={`player ${
            player.team < "home" ? "player-left" : "player-right"
          }`}
          style={{ left: player.left, top: player.top }}
          draggable
          onDragStart={(event) => handleDragStart(event, player.id)}
        >
          <input
            type="text"
            value={player.name}
            onChange={(event) => handleNameChange(event, player.id)}
            className="player-name"
          />
        </div>
      ))}
      <div
        id="football"
        className="football"
        style={{ left: footballPosition.left, top: footballPosition.top }}
        draggable
        onDragStart={(event) => handleDragStart(event, "football")}
      ></div>
    </div>
  );
};

export default FootballPitch;

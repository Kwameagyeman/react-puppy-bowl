import React, { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";

const SinglePlayer = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchPlayer = async () => {
      const player = await fetchSinglePlayer();
      setPlayer(player);
    };
    fetchSinglePlayer(6371);
  }, []);
  return (
    <div>
      {player.map((player) => {
        return (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <p>{player.id}</p>
            <p>{player.breed}</p>
            <p>{player.status}</p>
            <img src={player.imageUrl} />
          </div>
        );
      })}
      <button></button>
    </div>
  );
};
export default SinglePlayer;

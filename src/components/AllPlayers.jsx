import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players);
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
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
    </div>
  );
};
export default AllPlayers;

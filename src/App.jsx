import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import "./App.css";
import { fetchAllPlayers } from "./API";
import { fetchSinglePlayer } from "./API";

function App() {
  return (
    <>
      <h1>Main</h1>

      <AllPlayers />
      <SinglePlayer />
      <NavBar />
    </>
  );
}

export default App;

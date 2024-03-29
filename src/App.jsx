import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import MoviePage from "./pages/Movies";
import Shows from "./pages/Shows";
import UserLiked from "./pages/UserLiked";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/tv" element={<Shows />} />
        <Route exact path="/mylist" element={<UserLiked />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}

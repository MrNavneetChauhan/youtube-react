import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { PlayVideo } from "../components/play_video/PlayVideo";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play_video/:id" element={<PlayVideo />} />
    </Routes>
  );
};

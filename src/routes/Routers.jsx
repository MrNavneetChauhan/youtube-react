import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { PlayVideo } from "../components/play_video/PlayVideo";
import { Result } from "../components/result/Result";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play_video/:id" element={<PlayVideo />} />
      <Route path="/search/:id" element={<Result/>}/>
    </Routes>
  );
};

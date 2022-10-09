import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Liked } from "../components/liked/Liked";
import { PlayVideo } from "../components/play_video/PlayVideo";
import { Result } from "../components/result/Result";
import { Saved } from "../components/saved/Saved";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play_video/:id" element={<PlayVideo />} />
      <Route path="/search/:id" element={<Result/>}/>
      <Route path="/saved_vides" element={<Saved/>}/>
      <Route path="/liked_videos" element={<Liked/>}/>
    </Routes>
  );
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/HomePage";
import AlbumPage from "./pages/albums/AlbumPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<h1>Todos</h1>} />
          <Route path="/posts" element={<h1>Posts</h1>} />
          <Route path="/albums" element={<AlbumPage />} />
        </Routes>
      </Router>
    </>
  );
}

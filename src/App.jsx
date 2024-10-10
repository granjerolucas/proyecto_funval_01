import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<h1>Todos</h1>} />
        <Route path="/posts" element={<h1>Posts</h1>} />
        <Route path="/albums" element={<h1>Albums</h1>} />
      </Routes>
    </>
  );
}

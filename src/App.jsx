

import SearchBar from './pages/albums/components/SearchBar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AlbumPage from './pages/albums/AlbumPage';

export default function App() {

  return (


    <>
     <Router>

     
      <Routes>

        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/todos' element={<h1>Todos</h1>} />
        <Route path='/posts' element={<h1>Posts</h1>} />


        <Route path='/albums' element={
          <AlbumPage/>
        }
        />
      </Routes>
      </Router>

    </>
  )
}



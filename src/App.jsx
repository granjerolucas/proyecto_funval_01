
// import { Route, Routes } from 'react-router-dom'
import SearchBar from './coponents/SearchBar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/HomePage';

export default function App() {

  return (
    <> <Router>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/todos' element={<h1>Todos</h1>} />
        <Route path='/posts' element={<h1>Posts</h1>} />
        <Route path='/albums' element={
          <>
            <div className='container  h-screen overflow-hidden'>
              <SearchBar />
            </div>
          </>} />
      </Routes>
    </Router>
    </>
  )
}



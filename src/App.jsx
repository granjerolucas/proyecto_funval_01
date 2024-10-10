
import { Route, Routes } from 'react-router-dom'
import SearchBar from './coponents/SearchBar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {

  return (


    <>


      <Routes>

        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/todos' element={<h1>Todos</h1>} />
        <Route path='/posts' element={<h1>Posts</h1>} />
       
       
        <Route path='/albums' element={
          <>
            <div className='container  h-screen overflow-hidden'>

              <SearchBar />

            </div>

          </>} />

       

    </>
  )
}



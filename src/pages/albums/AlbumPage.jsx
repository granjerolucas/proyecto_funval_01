import React from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'

export default function AlbumPage() {
  return (
    <div className='container h-screen overflow-hidden mx-auto'>
      <SearchBar
      />
      <Card />
    </div>

  )
}

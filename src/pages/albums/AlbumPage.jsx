import React from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import Layout from '../../components/Layout'

export default function AlbumPage() {
  return (
    <Layout>
      <div className='container h-screen overflow-hidden mx-auto'>
        <SearchBar
        />
        <Card />
      </div>
    </Layout>


  )
}

import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import Layout from '../../components/Layout'

async function fetchData(url) {
  const rs = await fetch(url);
  const json = await rs.json();
  return json;
}

export default function AlbumPage() {
  const [searchValue, setSearchValue] = useState([])
  console.log(searchValue)

  const handleInputChange = useCallback((e,input) => {
    
    const copy = [...searchValue]
    const results = copy.filter((title) =>
      title.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchValue(results)
  },[searchValue])

  useEffect(() => {

    fetchData(`https://jsonplaceholder.typicode.com/albums`)
      .then((data) => setSearchValue(data))

  }, [])

  return (
    
    <Layout>
      <div className='container h-screen overflow-hidden mx-auto'>
         <SearchBar
        searchValue ={searchValue}
        handleInputChange={handleInputChange}
        />
         <Card />
      </div>
    </Layout>


  )
}

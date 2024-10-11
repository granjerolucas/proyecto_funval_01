import React,{useState, useEffect} from 'react'
import Search from './components/Search'
import axios from 'axios'

/**/
export default function PageTask() {
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(rs=>setTodos(rs.data))
    },[])

  return (
    <>
        <Search
            todos={todos}
            setTodos={setTodos}
        />
    </>
  )
}

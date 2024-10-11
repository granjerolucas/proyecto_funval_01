import React, {useState} from 'react'
import ListaSearch from './ListaSearch'

export default function Search({todos,setTodos}) {

  const [filterOption, setFilterOption] = useState('todos')

  function filterTodos(option){
    switch (option){
       case 'pendientes':
         const pendientes = todos.filter(fc=>fc.completed===false)
         return pendientes
       case  'completados':
         return todos.filter(fc=>fc.completed===true)
       default:
          return todos 
    }
  }


  return (
    <>
    <div className="w-full h-1/6 mt-10 mb-10 flex items-center justify-center ">
        <div className="w-3/6 flex items-center justify-between">
            <button id="todos" className="btn btn-primary w-[20%]" onClick={()=>setFilterOption('todos')}>Todos</button>
            <button id="completados" className="btn btn-success w-[20%]" onClick={()=>setFilterOption('completados')}>Completados</button>
            <button id="pendientes" className="btn btn-error w-[20%]" onClick={()=>setFilterOption('pendientes')}>Pendientes</button>
        </div>
    </div>
  
    <div className="grid grid-cols-4 gap-5 w-[95%] h-screen">
     {

            filterTodos(filterOption).map((todo,i) =>
              <ListaSearch
                  key={i}
                  todo={todo}
                  
              />
          )
      }
      </div>

 
    </>
  )
}


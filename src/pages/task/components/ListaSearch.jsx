import React from 'react'
import Search from './Search'

export default function ListaSearch({todo}) {
  const  {userId, title, completed}=todo

  return (
         <div className="card mt-10 ml-10 ">
                <div className="card-body">
                <h2 className="card-header justify-end items-center">
                  { completed===false ? 
                   <button  className="btn-secondary btn">Pendiente</button>
                  : <button  className="btn-secondary btn">Completado</button>
                    
                  }
                 </h2>
                    <p className="text-content2">{title}</p>
                </div>
        </div>
  )
}

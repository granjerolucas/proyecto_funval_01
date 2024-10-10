import React from 'react'

export default function Search() {
  return (
    <div className="w-screen h-1/6 mt-10 mb-10 flex items-center justify-center ">
        <div className="w-3/6 flex items-center justify-between">
            <button class="btn btn-primary w-[20%]">Todos</button>
            <button class="btn btn-success w-[20%]">Completados</button>
            <button class="btn btn-error w-[20%]">Pendientes</button>
        </div>
    </div>
  )
}


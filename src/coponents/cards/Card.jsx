import React from 'react'

export default function Card() {

    return (
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-5'>
                <div className="card">
                    <img className='w-full rounded-t-xl' src="https://via.placeholder.com/150/92c952" alt="imagen" />
                    <h2 className="card-header p-3">accusamus beatae ad facilis cum similique qui sunt</h2>
                </div>
            </div>

        </>
    )
}

function CardContent(title, thumbnailUrl) {
    return (
        <>
            <img className='w-full rounded-t-xl' src={thumbnailUrl} alt="imagen" />
            <h2 className="card-header p-3">{title}</h2>
        </>
    )
}

import React, { useState } from 'react'

function Card({ title, amount, unit }) {

    return (
        <>
            <div className='px-11 py-7 border  rounded-md w-max flex flex-col items-center justify-center shadow-lg shadow-slate-300'>
                <h2 className='text-2xl text-wrap'>{title}</h2>
                <p className='text-3xl font-semibold'>{amount} {unit }</p>
            </div>
        </>
    )
}

export default Card
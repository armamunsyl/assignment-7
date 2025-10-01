import React from 'react'

function Cardfirst() {
    return (
        <div className='flex justify-center mx-auto max-w-7xl gap-6 text-center mt-10'>
            <div className='relative flex-1 h-50 rounded-xl shadow-lg bg-gradient-to-r from-violet-500 to-purple-600 flex flex-col justify-center items-center text-white'>
                <h1 className="text-lg font-medium" >in progress</h1>
                <span className="text-3xl font-bold">0</span>
            </div>
            <div className='relative flex-1 h-50 rounded-xl shadow-lg bg-gradient-to-r from-green-400 to-emerald-600 flex flex-col justify-center items-center text-white'>
                <h1 className="text-lg font-medium" >in progress</h1>
                <span className="text-3xl font-bold">0</span>
            </div>
        </div>
    )
}

export default Cardfirst
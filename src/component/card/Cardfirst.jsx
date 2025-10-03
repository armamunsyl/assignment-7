import React from 'react'
import ImgVec1 from '../../assets/vector1.png';
import ImgVec2 from '../../assets/vector2.png';
function Cardfirst({selectedTask, resolvedTask}) {
    return (
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-7 max-w-6xl md:mx-auto text-center mt-10 '>
    
    <div className='relative h-40 rounded-xl shadow-lg bg-gradient-to-r from-violet-500 to-purple-700 flex flex-col justify-center items-center text-white overflow-hidden'>
        <img src={ImgVec1} className="absolute left-0 top-0 h-full object-contain opacity-100" />
        <img src={ImgVec2} className="absolute right-0 top-0 h-full object-contain opacity-100" />
        <h1 className="text-lg font-medium relative z-10">In Progress</h1>
        <span className="text-3xl font-bold relative z-10">{selectedTask.length}</span>
    </div>

    <div className='relative h-40 rounded-xl shadow-lg bg-gradient-to-r from-green-700 to-emerald-400 flex flex-col justify-center items-center text-white overflow-hidden'>
        <img src={ImgVec1} className="absolute left-0 top-0 h-full object-contain opacity-100" />
        <img src={ImgVec2} className="absolute right-0 top-0 h-full object-contain opacity-100" />
        <h1 className="text-lg font-medium relative z-10">Resolved</h1>
        <span className="text-3xl font-bold relative z-10">{resolvedTask.length}</span>
    </div>

</div>

    )
}

export default Cardfirst
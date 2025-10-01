import React, { use } from 'react'

const SupportCard = ({ UserProm }) => {
  const userData = use(UserProm)
  console.log(userData)
  return (
    <div className='mx-auto max-w-7xl mt-4'>
      <div>
        <h2 className="text-lg font-semibold mb-1">Customer Tickets</h2>
      </div>
      <div className='flex justify-between'>
        <div className=' grid grid-cols-2 gap-2'>

          {
            userData.map(user => <div className="card w-96 bg-base-100 card-xs shadow-sm mt-1">
              <div className="card-body">
                <div className='flex justify-between'>
                  <h2 className="card-title">Login Issues - Can't Access Account</h2>
                  <h2 className='bg-green-300 px-6 pt-1 pb-1 rounded-2xl text-green-900'>Open</h2>
                </div>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className='flex justify-between'>
                  <div className='flex gap-1 text-0.1xl'>
                    <span>#1001</span>
                    <h1 className='text-red-500'>HIGH PRIORITY</h1>
                  </div>
                  <div className='flex gap-1 text-0.1xl'>
                    <h1>
                      John Smith
                    </h1>
                    <h1>
                      1/15/2024
                    </h1>
                  </div>
                </div>
              </div>

            </div>)
          }



        </div>
        <div>
          <div>
            <h1 className='text-lg font-semibold mb-4'>Task Status</h1>
            <h1>Select a ticket to add to Task Status</h1>
          </div>
          <div>
            <h1>Resolved Task</h1>
            <h1>No resolved tasks yet.</h1>
          </div>
        </div>
      </div>

    </div>

  )
}

export default SupportCard
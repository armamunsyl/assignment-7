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
            userData.map(user => <div className="card  bg-base-100 card-xs shadow-sm mt-1">
              <div className="card-body">
                <div className='flex justify-between'>
                  <h2 className="card-title">{user.title}</h2>
                  <h2 className={`px-6 pt-1 pb-1 rounded-2xl ${user.status === "Open" ? "bg-green-300 text-green-900" : " bg-[#F8F3B9] text-[#9C7700]"}`}>{user.status}</h2>
                </div>
                <p>{user.description}</p>
                <div className='flex justify-between'>
                  <div className='flex gap-1 text-0.1xl'>
                    <span>{user.id}</span>
                    <h1 className={ `${user.priority === "HIGH PRIORITY" ? "text-red-500" : user.priority === "LOW PRIORITY" ? "text-green-400" : "text-amber-500"}`}>{user.priority}</h1>
                  </div>
                  <div className='flex gap-1 text-0.1xl'>
                    <h1>
                      {user.customer}
                    </h1>
                    <h1>
                      {user.createdAt}
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
            <h1 className='text-lg font-semibold mb-4'>Resolved Task</h1>
            <h1>No resolved tasks yet.</h1>
          </div>
        </div>
      </div>

    </div>

  )
}

export default SupportCard
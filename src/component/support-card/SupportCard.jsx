import React, { use, useState } from 'react'

const SupportCard = ({ UserProm }) => {
  const userData = use(UserProm)
  const [selectedTask, taskSelected] = useState([])
  console.log(selectedTask)

  const taskSelect = (userdata) => {
    taskSelected([...selectedTask, userdata])
  }
  return (
    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
      <div className="col-span-2">
        <h2 className="text-lg font-semibold mb-4">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userData.map(user => (
            <div
              key={user.id}
              onClick={() => taskSelect(user)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">{user.title}</h2>
                <span className={`px-2 py-1 rounded text-xs ${user.status === "Open" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                  {user.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{user.description}</p>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>{user.id} {user.priority}</span>
                <span>{user.customer} {user.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <h2 className="text-lg font-semibold mb-4">Task Status</h2>
        {selectedTask.length === 0 ? (
          <p className="text-gray-500">Select a ticket to add to Task Status</p>
        ) : (
          selectedTask.map((task) => (
            <div
              className="bg-white rounded-lg shadow p-4 mb-3"
            >
              <h3 className="font-medium mb-2">{task.title}</h3>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
                Complete
              </button>
            </div>
          ))
        )}

        <h2 className="text-lg font-semibold mt-6 mb-2">Resolved Task</h2>
        <p className="text-gray-500">No resolved tasks yet.</p>
      </div>

    </div>

  )
}

export default SupportCard
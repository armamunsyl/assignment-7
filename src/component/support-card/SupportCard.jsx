import React, { use, useState } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const SupportCard = ({ UserProm, selectedTask, taskSelected, resolvedTask, setResolvedTask }) => {
  const userData = use(UserProm)

  const [tickets, setTickets] = useState(userData);

  const taskSelect = (userdata) => {
    const alreadyAdded = selectedTask.some(task => task.id === userdata.id);
    if (alreadyAdded) {
      return;
    }
    taskSelected([...selectedTask, userdata])
    toast("In Progress!")
  }
  const foundTitle = (tasktitle) => {
    setResolvedTask([...resolvedTask, tasktitle])
    toast("Complete")
    taskSelected(selectedTask.filter(usy => usy.id !== tasktitle.id));
    const updatedTickets = tickets.filter(t => t !== tasktitle);
    setTickets(updatedTickets);
    // console.log(selectedTask)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
      <div className="col-span-2">
        <h2 className="text-lg font-semibold mb-4 px-3 mx-6 md:mx-0">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-4 mx-5 md:mx-0">
          {tickets.map(user => (
            <div
              key={user.id}
              onClick={() => taskSelect(user)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">{user.title}</h2>

                <span className={`px-2 py-1 rounded text-xs ${user.status === "Open" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={`text-[8px] mr-2 ${user.status === "Open"
                        ? "text-green-600"
                        :"text-yellow-500"
                      }`}
                  />
                  {user.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{user.description}</p>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <div className='flex gap-2'>
                  <h1>{user.id} </h1>
                  <span className={`font-semibold ${user.priority === "HIGH PRIORITY" ? "text-red-500" : user.priority === "MEDIUM PRIORITY" ? "text-yellow-500" : "text-green-600"}`}>{user.priority}</span>

                </div>
                <span>{user.customer} {user.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 p-5 md:p-0">
        <h2 className="text-lg font-semibold mb-4">Task Status</h2>
        {selectedTask.length === 0 ? (
          <p className="text-gray-500">Select a ticket to add to Task Status</p>
        ) : (
          selectedTask.map((task) => (
            <div
              className="bg-white rounded-lg shadow p-4 mb-3"
            >
              <h3 className="font-medium mb-2">{task.title}</h3>
              <button onClick={() => foundTitle(task)} className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
                Complete
              </button>
            </div>
          ))
        )}

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Resolved Task</h2>
          {resolvedTask.length === 0 ? (
            <p className="text-gray-500">No resolved tasks yet.</p>
          ) : (
            resolvedTask.map((title) => (
              <div
                className="bg-blue-100 text-gray-800 px-4 py-2 rounded mb-2"
              >
                {title.title}
                <h1 className='text-green-700'>✅ Completed</h1>
              </div>
            ))
          )}
        </div>
      </div>

    </div>

  )
}

export default SupportCard
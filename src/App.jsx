import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Cardfirst from './component/card/Cardfirst'
import SupportCard from './component/support-card/SupportCard'


const fetchUsers = async () => {
  const res = await fetch("/customer.json")
  return res.json()
}
const UserProm = fetchUsers()

function App() {
  const [selectedTask, taskSelected] = useState([])
  const [resolvedTask, setResolvedTask] = useState([]);

 
  return (
    <>
      <Navbar></Navbar>
      <Cardfirst selectedTask={selectedTask} resolvedTask={resolvedTask}></Cardfirst>
      <Suspense>
        <SupportCard UserProm={UserProm} selectedTask={selectedTask} taskSelected={taskSelected} resolvedTask={resolvedTask} setResolvedTask={setResolvedTask}></SupportCard>
      </Suspense>
    </>
  )
}

export default App

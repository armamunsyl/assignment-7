import { Suspense } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Cardfirst from './component/card/Cardfirst'
import SupportCard from './component/support-card/SupportCard'


const fetchUsers = async () => {
  const res = await fetch("/customer.json")
  return res.json()
}


function App() {

 const UserProm = fetchUsers()
  return (
    <>
      <Navbar></Navbar>
      <Cardfirst></Cardfirst>
      <Suspense>
        <SupportCard UserProm={UserProm}></SupportCard>
      </Suspense>
    </>
  )
}

export default App

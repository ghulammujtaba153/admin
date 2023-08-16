import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './userlist.scss'
import UserTable from '../../components/userTable/UserTable'

const UserList = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className='listContainer'>
          
        <UserTable/>

      </div>
      </div>
      
    </div>
  )
}

export default UserList
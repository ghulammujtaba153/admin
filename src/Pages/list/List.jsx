import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Tables from '../../components/table/Table'
import NewProductModel from '../../components/table/NewProductModel'
const List = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className='listContainer'>
          <NewProductModel/>
          <Tables/>


      </div>
      </div>
      
    </div>
  )
}

export default List
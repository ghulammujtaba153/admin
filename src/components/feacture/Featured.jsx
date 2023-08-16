import React from 'react'
import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
          <h1 className='title'>Total Review</h1>
          <MoreVertIcon className='icon'/>
        </div>
        <div className="bottom">
          <p className="title">Total Sales Made today</p>
          <p className="amount">$440</p>
          <p className="desc">Previous transaction processing</p>
        </div>
    </div>
  )
}

export default Featured
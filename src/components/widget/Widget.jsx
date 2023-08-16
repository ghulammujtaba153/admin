import React, { useEffect, useState } from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlined from '@mui/icons-material/MonetizationOnOutlined'
import { fetchBasicStats } from '../../Redux/actions/adminActions'
import Loader from '../loader/loader'
import SkeletonColor from '../skeleton/Skeleton'



const Widget = ({type}) => {
    const [loading, setLoading]=useState(true);
    const [stats, setStats]=useState(null)

    useEffect(()=>{
        const fetch=async()=>{
            const res=await fetchBasicStats()
            setStats(res)
            setLoading(false)
            
        }
        fetch()
    },[])

    let data;
    switch(type){
        case 'user':
            data={
                title:'USERS',
                isMoney: false,
                link: 'see all users',
                icon: <PersonOutlinedIcon className='icon'/>,
                value: stats?.totalUsers
            };
            break;

        case 'order':
            data={
                title:'ORDERS',
                isMoney: false,
                link: 'view all orders',
                icon: <ShoppingCartOutlined className='icon'/>,
                value: stats?.totalOrders
            };
            break;

        case 'earnings':
            data={
                title:'EARNINGS',
                isMoney: true,
                link: 'view all earnings',
                icon: <MonetizationOnOutlined style={{color:'green', background: 'lightGreen'}} className='icon'/>,
                value: stats?.totalAmount
            };
            break;

        case 'balance':
            data={
                title:'BALANCE',
                isMoney: true,
                link: 'view net balance',
                icon: <AccountBalanceWalletOutlinedIcon className='icon'/>,
                value: stats?.totalAmount
            };
            break;
        default:
            break;
    }
  return (
    <>
        {
            stats?
                <div className='widget'>
                    <div className="left">
                        <span className="title">{data.title}</span>
                        <span className="counter">{data.isMoney?'RS.':''}
                            {data.value}
                        </span>
                        <span className="link">{data.link}</span>
                    </div>
                    <div className="right">
                        
                        <div className="percentage positive">
                            <KeyboardArrowUpIcon/>
                            30%
                        </div>
                        {data.icon}
                        
                    </div>
                </div>
            :
            <SkeletonColor width={200} height={50}/>
        }
    </>
    
  )
}

export default Widget
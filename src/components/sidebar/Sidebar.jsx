import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className='top'><Link to='/' style={{textDecoration: 'none'}}><span className="logo">Flipkartadmin</span></Link></div>
        <hr />
        <div className='center'>
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>
                        Dashboard
                    </span>
                </li>

                <p className="title">LIST</p>

                <Link to={'/users'} style={{textDecoration: 'none'}}>
                <li>
                    <PeopleIcon className='icon'/>
                    <span>
                        Users
                    </span>
                </li>
                
                </Link>
                

                
                <Link to={'/product'} style={{textDecoration: 'none'}}>
                    <li>
                        <ListAltIcon className='icon'/>
                        <span>
                            Products
                        </span>
                    </li>
                </Link>
                
                <Link to={'/order'} style={{textDecoration: 'none'}}>
                <li>
                    <InventoryIcon className='icon'/>
                    <span>
                        Orders
                    </span>
                </li>
                </Link>
                


                <Link to={'/product/delivery'} style={{textDecoration: 'none'}}>
                    <li>
                        <DeliveryDiningIcon className='icon'/>
                        <span>
                            Delivery
                        </span>
                    </li>
                </Link>
                

                <p className="title">USEFUL</p>

                <li>
                    <AnalyticsIcon className='icon'/>
                    <span>
                        Stats
                    </span>
                </li>


                <li>
                    <NotificationsActiveIcon className='icon'/>
                    <span>
                        Notifications
                    </span>
                </li>
                
                <p className="title">SERVICE</p>

                <li>
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>
                        System Health
                    </span>
                </li>

                <li>
                    <PsychologyIcon className='icon'/>
                    <span>
                        Logs
                    </span>
                </li>

                <li>
                    <SettingsIcon className='icon'/>
                    <span>
                        Settings
                    </span>
                </li>

                <p className="title">USER</p>
                <li>
                    <Person2Icon className='icon'/>
                    <span>
                        Profile
                    </span>
                </li>

                <li>
                    <LogoutIcon className='icon'/>
                    <span>
                        Logout
                    </span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
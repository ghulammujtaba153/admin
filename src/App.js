
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/single/Single';
import New from './Pages/new/New';
import UserList from './Pages/userList/UserList';
import Delivery from './Pages/delivery/Delivery';
import Order from './Pages/order/Order';

import OrderDetail from './Pages/orderdetails/OrderDetail';




function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='users'>
            <Route index element={<UserList/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New/>}/>
          </Route>

          <Route path='order'>
            <Route index element={<Order/>}/>
            
          </Route>
          <Route path="/order/:id" element={<OrderDetail/>} />

          <Route path='product'>
            <Route index element={<List/>}/>
            <Route path=':productId' element={<Single/>}/>
            <Route path='new' element={<New/>}/>
            <Route path='delivery' element={<Delivery/>}/>
          </Route>

        </Route>
      </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;

import React from 'react';
import {Link,Routes,Route} from "react-router-dom";
import logo from "../images/nft-logo.png";
import search_logo from "../images/search-icon.png"
import file_lock from "../images/file_lock.jpg"
import "./navbar.css"
import Home from "../components/home"
import Login from './login';
import Signup from './signup';

const Navbar = () => {
    return (
        <div>
          
            <div className='nav-container'>
                <div>
                    <img src={logo} width='100px' alt="logo"/>
                </div>
                <div className='nav-container02'>
                     <div> <Link className='text-color' to='/'>Home</Link></div>
                <div><Link className='text-color' to='/#'>BuyNFT</Link></div>
                <div><Link className='text-color' to='/#'>Feeding</Link></div>
                <div> <Link className='text-color' to='/#'>FAQ</Link></div>
                </div>
               
               <div className='steup'>
                <div className='search-text'>
                    <img src={search_logo} width='30px' alt="" />
                    <input type="text" placeholder='Browse shop' />
                    <img src={file_lock} width='40px' alt=""/>
                </div>

               </div>
               <div ><Link to='/login' className='login-route'>Login</Link></div>
               <div><Link to='signup' className='login-route'>SignUp</Link></div>
            </div>
            <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
        </div>
    );
}

export default Navbar;

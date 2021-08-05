import React from 'react'
import LoginModal from '../Login/login-modal'
import Navbar from '../Navbar/navbar'
import Register from '../Register/register-modal';
import { useSelector } from 'react-redux';
import Blog from '../MainBoard/blogs';

function Home() {
    const modalReducer = useSelector((state) => state.modalReducer);
    const modalRegiser = useSelector((regState) => regState.modalRegiser);
    return (
        <div>
            <Navbar />
            {modalReducer  ?  <LoginModal /> : ''}
            {modalRegiser ? <Register />    : ''}
            <Blog />
        </div>
    )
}

export default Home

import React from 'react'
import LoginModal from '../Login/login-modal'
import Navbar from '../Navbar/navbar'
import Register from '../Register/register-modal';
import { useSelector } from 'react-redux';

function Home() {
    const modalReducer = useSelector((state) => state.modalReducer);
    const modalRegiser = useSelector((regState) => regState.modalRegiser);
    return (
        <div>
            <Navbar />
            {modalReducer  ?  <LoginModal /> : ''}
            {modalRegiser ? <Register />    : ''}
        </div>
    )
}

export default Home

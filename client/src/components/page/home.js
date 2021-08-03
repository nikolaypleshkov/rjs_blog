import React from 'react'
import LoginModal from '../Login/login-modal'
import Navbar from '../Navbar/navbar'
import {openLogin} from '../../actions';

function Home() {
    return (
        <div>
            <Navbar />
            {openLogin ?  <LoginModal /> : ''}
           
        </div>
    )
}

export default Home

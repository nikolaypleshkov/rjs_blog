import React from 'react'
import {Button} from '../Buttons/priamry-btn'
import { closeRegister } from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import './Register.css'

function Register() {
    const modalRegiser = useSelector((regState) => regState.modalReducer);
    const dispatch = useDispatch();
 
    if(!modalRegiser){
    return (
        <div className={closeRegister === 'CLOSE_REGISTER' ? "rg-card d-n" : "rg-card"}>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => dispatch(closeRegister())}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="card-title">
          <h1>DEVBLOG</h1>
        </div>
        <hr />
        <div className="login-card-title">
          <p className="lg-title">Регистрация</p>
        </div>
        <div className="form-data-validation">
          <form action="#">
          <div className="form-group">
              <p className="lg-data-label">Име</p>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <p className="lg-data-label">Имейл</p>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <p className="lg-data-label">Парола</p>
              <input type="password" name="pass" id="pass" />
            </div>
            <div className="form-group">
              <p className="lg-data-label">Потвърди Парола</p>
              <input type="password" name="ConfPass" id="ConfPass" />
            </div>
            <div className="form-group d-flex justify-content-center">
              <Button>Регистрация</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  else{
      return ' ';
  }
}

export default Register

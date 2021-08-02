import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Buttons/priamry-btn";
import { closeLogin } from "../../actions";
import "./Login.css";

function LoginModal() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  if (!isLogged) {
    return (
      <div class={closeLogin === true ? "lg-card d-n" : "lg-card"}>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => dispatch(closeLogin())}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="card-title">
          <h1>DEVBLOG</h1>
        </div>
        <hr />
        <div className="login-card-title">
          <p className="lg-title">Вход</p>
        </div>
        <div className="form-data-validation">
          <form action="#">
            <div className="form-group">
              <p className="lg-data-label">Email</p>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <p className="lg-data-label">Password</p>
              <input type="password" name="pass" id="pass" />
            </div>
            <div className="form-group d-flex justify-content-center">
              <Button>Вход</Button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default LoginModal;

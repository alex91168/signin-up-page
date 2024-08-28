import React from 'react';
import './register.scss';
import img from './assets/cinnamo.gif'; 

const Register = ({ setAction }) => {
  return (
    <div className = "main-register">
      <img src={img} alt="cinna" />
      <div className="container-main-register">
        <div className="content-box-register">
          <span> Login:
            <input type="text" placeholder='User'/>
          </span>
          <span> E-mail:
            <input type="email" placeholder='E-mail' />
          </span>
          <span> Password:
            <input type="password" placeholder='Password' />
          </span>
          <span> Re-Password:
            <input type="password" placeholder='Re-Password' />
          </span>
        </div>
        <div className="button-box">
          <button onClick={() => setAction("login")}>Login</button>
          <button >Criar</button>
        </div>
      </div>
    </div>
  );
}

export default Register;

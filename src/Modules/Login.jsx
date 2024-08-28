import React from 'react';
import './App.scss';
import img from './assets/cinnamo.gif';

const Login = ({ setAction }) => {
  return (
    <div className="main">
      <img src={img} alt="cinna" />
      <div className="container-main">
        <div className="content-box">
          <span> Login:
            <input type="text" placeholder='User'/>
          </span>
          <span> Password:
            <input type="password" placeholder='Password' />
          </span>
          <div className="rem-pass">
            <input type="checkbox" /><span>Lembrar senha</span>
          </div>
        </div>
        <div className="button-box">
          <button onClick={() => setAction("login")}>Login</button>
          <button onClick={() => setAction("register")}>Cadastro</button>
        </div>
        <div className="passfor">
          <p>Esqueceu sua senha?<span>Clique aqui!</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

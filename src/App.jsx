import React, { useState } from 'react';
import Login from './Modules/Login';
import Register from './Modules/Register';
import banner from './Modules/assets/moon-divider.gif';
import './header.scss';

function App() {
  const [action, setAction] = useState("login");

  return (
    <>
      <header>
        <img src={banner} alt="banner" />
        <h1 id="main-text">Bem-Vindos</h1>
      </header>
      <main>
        {action === "login" ? (
          <Login setAction={setAction} />
        ) : (
          <Register setAction={setAction} />
        )}
      </main>
    </>
  );
}

export default App;

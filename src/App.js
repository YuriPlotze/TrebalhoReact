import React, { useState } from 'react';
import './main.css';
import Roteamento from './Roteamento';


function LoginPage() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState(''); 

  function logar(e) {
    e.preventDefault();
    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    var encontrado = false;

    for (var i = 0; i < cadastros.length; i++) {
      var usuario = cadastros[i];
      if (usuario.login === login && usuario.senha === senha) {
        encontrado = true;
        break;
      }
    }

    if (encontrado) {
      window.location.href = "pginicial.jsx";
    }
  }

  return (
    <div className="page">
      <form onSubmit={logar} className="formLogin">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          placeholder="Digite seu login"
          autoFocus={true}
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite a sua senha"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Roteamento/>

        

        <a href="./pginicial"></a>
      </form>
    </div>
  );
}

export default LoginPage;

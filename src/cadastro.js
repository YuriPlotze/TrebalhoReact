import React, { useState, useEffect} from 'react';
import './cadastro.css';

function Cadastro() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  function cadastrar(event) {
    event.preventDefault();

    if (!isValidEmail(login)) {
      alert('O login deve ser um email válido.');
      return;
    }

    if (senha.length < 8) {
      alert('A senha deve ter 8 caracteres.');
      return;
    }

    if (login && senha && confirmarSenha) {
      if (senha === confirmarSenha) {
        var dadosCadastro = {
          login: login,
          senha: senha
        };

        var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros.push(dadosCadastro);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));

        console.log(dadosCadastro);

        setLogin('');
        setSenha('');
        setConfirmarSenha('');

        alert('Cadastro realizado com sucesso.');

      } else {
        alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
      }
    } else {
      alert('Alguns campos não foram preenchidos corretamente.');
    }
  }

  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      cadastrar(event);
    }
  }

  return (
    <div className="page">
      <form className="formLogin">
        <h1>Cadastro</h1>
        <p>Digite os seus dados para fazer o cadastro</p>
        <label htmlFor="email">Login</label>
        <input
          type="text"
          placeholder="Digite seu login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}

        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required

        />
        <label htmlFor="password">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmarSenha}
          onChange={(event) => setConfirmarSenha(event.target.value)}
          required

        />
        <div className="btn-container">
          <button className="btn1 btn-voltar" onClick={() => (window.location.href = 'main.html')}>
            Voltar
          </button>
          <input type="submit" value="Cadastrar" className="btn btn-cadastrar" onClick={cadastrar} />
        </div>
      </form>
    </div>
  );
}

export default Cadastro;

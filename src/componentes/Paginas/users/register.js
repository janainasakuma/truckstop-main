import React, { useState } from 'react';
import './register.css';

const Register = ({ onUserCreated }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    rg: '',
    rgIssuedDate: '',
    rgIssuer: '',
    password: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const newUser = await response.json();
      onUserCreated(newUser);

      // Exibe mensagem de sucesso
      alert('Usuário cadastrado com sucesso!');

      // Limpa o formulário
      setUserData({
        firstName: '',
        lastName: '',
        cpf: '',
        rg: '',
        rgIssuedDate: '',
        rgIssuer: '',
        password: '',
        phone: '',
        email: '',
      });
    } else {
      // Exibe mensagem de erro caso o cadastro falhe
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Nome"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={userData.cpf}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rg"
          placeholder="RG"
          value={userData.rg}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="rgIssuedDate"
          placeholder="Data RG"
          value={userData.rgIssuedDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rgIssuer"
          placeholder="Expeditor RG"
          value={userData.rgIssuer}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;

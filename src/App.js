import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import SecaoCapa from './componentes/SecaoCapa';
import Produtos from './componentes/Produtos';
import SecaoSobre from './componentes/SecaoSobre';
import Register from './componentes/Paginas/users/register';
import UserList from './componentes/Paginas/users/userList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user._id === updatedUser._id ? updatedUser : user))
    );
  };

  return (
    <div className="App">
      <Header />
      <SecaoCapa />
      <Produtos />
      <SecaoSobre />
      
      <div className="user-management">
        <h2>Cadastro de Usuário</h2>
        <Register onUserCreated={addUser} />
      </div>
      
      <div className="user-list">
        <h2>Lista de Usuários</h2>
        <UserList 
          users={users} 
          onUserDeleted={deleteUser} 
          onUserUpdated={updateUser} 
        />
      </div>
    </div>
  );
}

export default App;
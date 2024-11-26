// src/componentes/Paginas/users/userList.js
import React from 'react';
import './userList.css';

const UserList = ({ users, onUserDeleted, onUserUpdated }) => {
  const deleteUser = (userId) => {
    onUserDeleted(userId);
  };

  const handleEdit = (user) => {
    onUserUpdated(user);
  };

  return (
    <div className="user-list">
      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        users.map((user) => (
          <div key={user._id} className="user-card">
            <h3>{user.nome} {user.sobrenome}</h3>
            <p>Email: {user.email}</p>
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => deleteUser(user._id)}>Deletar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
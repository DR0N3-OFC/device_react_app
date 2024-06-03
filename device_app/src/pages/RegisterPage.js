import React, { useState } from 'react';

const RegisterPage = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica de registro, como enviar os dados para o servidor
    // Por enquanto, apenas simularemos um registro bem-sucedido
    const newUser = { name, email, password };
    onRegister(newUser);
  };

  return (
    <div>
      <h2>Registro</h2>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default RegisterPage;

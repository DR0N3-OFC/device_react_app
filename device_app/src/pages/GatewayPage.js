import React from 'react';
import GatewayList from '../components/Gateway/GatewayList';
import GatewayForm from '../components/Gateway/GatewayForm';
import axios from 'axios';
import { API } from '../Const';

const GatewayPage = () => {
  const handleSubmit = formData => {
    // Enviar dados do formulário para o servidor para cadastrar ou editar um gateway
    axios.post(`${API}/gateway`, formData)
      .then(response => {
        console.log('Gateway cadastrado/editado com sucesso:', response.data);
        // Atualizar a lista de gateways
        // Você pode redirecionar para a lista de gateways ou fazer outra coisa após o sucesso
      })
      .catch(error => {
        console.error('Erro ao cadastrar/editar gateway:', error);
      });
  };

  return (
    <div>
      <GatewayList />
      <GatewayForm onSubmit={handleSubmit} />
    </div>
  );
};

export default GatewayPage;

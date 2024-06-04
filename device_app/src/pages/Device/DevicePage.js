import React from 'react';
import DeviceList from '../../components/Device/DeviceList';
import DeviceForm from '../../components/Device/DeviceForm';
import axios from 'axios';
import { API } from '../../Const';

const DevicePage = () => {
  const handleSubmit = formData => {
    // Enviar dados do formulário para o servidor para cadastrar ou editar um gateway
    axios.post(`${API}/dispositivo`, formData)
      .then(response => {
        console.log('Dispositivo cadastrado/editado com sucesso:', response.data);
        // Atualizar a lista de gateways
        // Você pode redirecionar para a lista de gateways ou fazer outra coisa após o sucesso
      })
      .catch(error => {
        console.error('Erro ao cadastrar/editar gateway:', error);
      });
  };

  return (
    <div>
      <DeviceList />
      <DeviceForm onSubmit={handleSubmit} />
    </div>
  );
};

export default DevicePage;

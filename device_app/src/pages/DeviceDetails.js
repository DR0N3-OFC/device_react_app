import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../Const';

const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de devices do servidor
    axios.get(`${API}/dispositivo/${id}`)
      .then(response => {
        console.log(response.data)
        setDevice(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o dispositivo:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalhes do Dispositivo</h1>
      <p>ID: {id}</p>
      <p>Nome: {device.nome}</p>
      <p>Descrição: {device.descricao}</p>
      <p>Endereço: {device.endereco}</p>
    </div>
  );
};

export default DeviceDetails;

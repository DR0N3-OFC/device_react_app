import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeviceList from '../components/Device/DeviceList';
import { useParams } from 'react-router-dom';
import { API } from '../Const';

const GatewayDetails = () => {
  const { id } = useParams();
  const [gateway, setGateway] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de gateways do servidor
    axios.get(`${API}/gateway/${id}`)
      .then(response => {
        console.log(response.data)
        setGateway(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o gateway:', error);
      });
  }, [id]);

  return (
    <>
      <div>
        <h1>Detalhes do Gateway</h1>
        <p>ID: {gateway.gateway_id}</p>
        <p>Nome: {gateway.nome}</p>
        <p>Descrição: {gateway.descricao}</p>
        <p>Endereço: {gateway.endereco}</p>
      </div>
      <DeviceList />
    </>
  );
};

export default GatewayDetails;

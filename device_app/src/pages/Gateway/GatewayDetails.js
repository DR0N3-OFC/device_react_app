import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeviceList from '../../components/Device/DeviceList';
import { useParams } from 'react-router-dom';
import { API } from '../../Const';

const GatewayDetails = () => {
  const { id } = useParams();
  const [gateway, setGateway] = useState({});

  useEffect(() => {
    // Faça uma solicitação para obter a lista de gateways do servidor
    axios.get(`${API}/gateway/${id}`)
      .then(response => {
        setGateway(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o gateway:', error);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h1>Detalhes do Gateway</h1>
        </div>
        <div className="card-body">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Nome:</strong> {gateway.nome}</p>
          <p><strong>Descrição:</strong> {gateway.descricao}</p>
          <p><strong>Endereço:</strong> {gateway.endereco}</p>
        </div>
      </div>
      <div className="mt-4">
        <DeviceList />
      </div>
    </div>
  );
};

export default GatewayDetails;

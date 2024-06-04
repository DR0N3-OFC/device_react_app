import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../Const';

const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState({});

  useEffect(() => {
    // Faça uma solicitação para obter a lista de dispositivos do servidor
    axios.get(`${API}/dispositivo/${id}`)
      .then(response => {
        console.log(response.data);
        setDevice(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o dispositivo:', error);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h1>Detalhes do Dispositivo</h1>
        </div>
        <div className="card-body">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Nome:</strong> {device.nome}</p>
          <p><strong>Descrição:</strong> {device.descricao}</p>
          <p><strong>Localização:</strong> {device.localizacao}</p>
          <p><strong>Endereço:</strong> {device.endereco}</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;

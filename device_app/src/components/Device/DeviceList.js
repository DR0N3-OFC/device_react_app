import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../Const';
import { Link } from 'react-router-dom';

const GatewayList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de devices do servidor
    axios.get(`${API}/dispositivo`)
      .then(response => {
        console.log(response.data)
        setDevices(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de dispositivos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Dispositivos</h2>
      <ul>
        {devices.map(device => (
          <li key={device.dispositivo_id}>
            <Link to={`/device/${device.dispositivo_id}`}><h3>{device.nome}</h3></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatewayList;

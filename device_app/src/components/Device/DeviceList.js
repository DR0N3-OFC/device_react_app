import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../Const';
import { Link, useNavigate } from 'react-router-dom';

const GatewayList = ({ id }) => {
  const [devices, setDevices] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    // Faça uma solicitação para obter a lista de devices do servidor
    if(id) {
      axios.get(`${API}/gateway/${id}/dispositivos`, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('jwt')}`} })
      .then(response => {
        setDevices(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de dispositivos do gateway:', error);
        nav('/login');
      });
    } else {
      axios.get(`${API}/dispositivo`, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('jwt')}`} })
      .then(response => {
        setDevices(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de dispositivos:', error);
        nav('/login');
      });
    };
  }, [id, nav]);

  return (
    <div>
      <h2>Lista de Dispositivos</h2>
      <ul>
        {devices.length > 0 ? devices.map(device => (
          <li key={device.dispositivo_id}>
            <Link to={`/device/${device.dispositivo_id}`}><h3>{device.nome}</h3></Link>
          </li>
        )) : <p>Ainda não existem dispositivos cadastrados.</p>}
      </ul>
    </div>
  );
};

export default GatewayList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../Const';
import { Link, useNavigate } from 'react-router-dom';

const GatewayList = () => {
  const [gateways, setGateways] = useState([]);
  const nav = useNavigate();
  
  useEffect(() => {
    // Faça uma solicitação para obter a lista de gateways do servidor
    axios.get(`${API}/gateway`, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('jwt')}`} })
      .then(response => {
        setGateways(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de gateways:', error);
        nav('/login');
      });
  }, [nav]);

  return (
    <div>
      <h2>Lista de Gateways</h2>
      <ul>
        {gateways.map(gateway => (
          <li key={gateway.gateway_id}>
            <Link to={`/gateway/${gateway.gateway_id}`}><h3>{gateway.nome}</h3></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatewayList;

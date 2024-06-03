import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../Const';
import { Link } from 'react-router-dom';

const GatewayList = () => {
  const [gateways, setGateways] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de gateways do servidor
    axios.get(`${API}/gateway`)
      .then(response => {
        console.log(response.data)
        setGateways(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de gateways:', error);
      });
  }, []);

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

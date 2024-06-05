import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../Const';
import { Link } from 'react-router-dom';

const ActuatorList = ({id}) => {
  const [actuators, setActuators] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de actuators do servidor
    if(id) {
      axios.get(`${API}/dispositivo/${id}/atuadores`, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('jwt')}`} })
      .then(response => {
        setActuators(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de atuadores do dispositivo:', error);
      });
    } else {
      axios.get(`${API}/atuador`)
      .then(response => {
        setActuators(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de atuadores:', error);
      });
    }
  }, [id]);

  return (
    <div>
      <h2>Lista de Atuadores</h2>
      <ul>
        {actuators.map(actuator => (
          <li key={actuator.atuator_id}>
            <Link to={`/actuator/${actuator.atuador_id}`}><h3>{actuator.nome}</h3></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActuatorList;

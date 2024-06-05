import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../Const';
import { Link } from 'react-router-dom';

const SensorList = ({ id }) => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de sensores do servidor
    if(id) {
      axios.get(`${API}/dispositivo/${id}/sensores`, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('jwt')}`} })
      .then(response => {
        setSensors(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de sensores do dispositivo:', error);
      });
    } else {
      axios.get(`${API}/sensor`)
      .then(response => {
        setSensors(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de sensores:', error);
      });
    }
  }, [id]);

  return (
    <div>
      <h2>Lista de Sensores</h2>
      <ul>
        {sensors.map(sensor => (
          <li key={sensor.sensor_id}>
            <Link to={`/sensor/${sensor.sensor_id}`}><h3>{sensor.nome}</h3></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SensorList;

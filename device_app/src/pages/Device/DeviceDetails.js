import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../Const';
import ActuatorList from '../../components/Actuator/ActuatorList';
import SensorList from '../../components/Sensor/SensorList';
import ActuatorForm from '../../components/Actuator/ActuatorForm';
import SensorForm from '../../components/Sensor/SensorForm';

const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de dispositivos do servidor
    axios.get(`${API}/dispositivo/${id}`)
      .then(response => {
        setDevice(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o dispositivo:', error);
      });
  }, [id]);

  const handleActuatorSubmit = formData => {
    // Enviar dados do formulário para o servidor para cadastrar ou editar um gateway
    axios.post(`${API}/atuador`, formData)
      .then(response => {
        console.log('Atuador cadastrado/editado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao cadastrar/editar atuador:', error);
      })
      .finally(
        window.location.reload()
      );
  };

  const handleSensorSubmit = formData => {
    // Enviar dados do formulário para o servidor para cadastrar ou editar um gateway
    axios.post(`${API}/sensor`, formData)
      .then(response => {
        console.log('Sensor cadastrado/editado com sucesso:', response.data);
        // Atualizar a lista de gateways
        // Você pode redirecionar para a lista de gateways ou fazer outra coisa após o sucesso
      })
      .catch(error => {
        console.error('Erro ao cadastrar/editar sensor:', error);
      })
      .finally(
        window.location.reload()
      );
  };

  return (
    <>
      <div>
        <h1>Detalhes do Dispositivo</h1>
        <p>ID: {id}</p>
        <p>Nome: {device.nome}</p>
        <p>Descrição: {device.descricao}</p>
        <p>Localização: {device.localizacao}</p>
        <p>Endereço: {device.endereco}</p>
      </div>
      <div>
        <ActuatorList id={id}/>
        <ActuatorForm device={device} onSubmit={handleActuatorSubmit} />
      </div>
      <div>
        <SensorList id={id} />
        <SensorForm device={device} onSubmit={handleSensorSubmit} />
      </div>
    </>
  );
};

export default DeviceDetails;

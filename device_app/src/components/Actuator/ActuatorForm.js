import React, { useEffect, useState } from 'react';

const ActuatorForm = ({ actuator = {}, onSubmit, device = {} }) => {
  const [formData, setFormData] = useState({
    ...actuator, 
    nome: actuator.nome || '',
    dispositivo: {
      dispositivo_id: device.dispositivo_id || ''
    }
  });

  useEffect(() => {
    if (device.dispositivo_id) {
      setFormData(formData => ({
        ...formData,
        dispositivo: {
          ...formData.device,
          dispositivo_id: device.dispositivo_id || ''
        }
      }));
    }
  }, [device.dispositivo_id]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
      </div>
      <div>
        <input type="" name="dispositivo_id" value={formData.dispositivo.dispositivo_id} onChange={handleChange} readOnly hidden/>
      </div>
      {/* Outros campos do device */}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ActuatorForm;

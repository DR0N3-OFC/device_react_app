import React, { useState } from 'react';

const GatewayForm = ({ device = {}, onSubmit }) => {
  const [formData, setFormData] = useState(device);

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
        <label>Descrição:</label>
        <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} />
      </div>
      <div>
        <label>Localização:</label>
        <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} />
      </div>
      <div>
        <label>Endereço:</label>
        <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
      </div>
      {/* Outros campos do device */}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default GatewayForm;

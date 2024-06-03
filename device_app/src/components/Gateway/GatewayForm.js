import React, { useState } from 'react';

const GatewayForm = ({ gateway = {}, onSubmit }) => {
  const [formData, setFormData] = useState(gateway);

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
        <label>Endereço:</label>
        <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
      </div>
      {/* Outros campos do gateway */}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default GatewayForm;

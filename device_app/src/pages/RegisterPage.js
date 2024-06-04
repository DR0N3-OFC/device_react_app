import axios from 'axios';
import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../Const';

const URL = `${API}/users`;

const RegisterPage = () => {
  const nav = useNavigate();

  const [submitting, setSubmitting] = useState(false);

  const formReducer = (state, event) => {
    if (event.reset) {
      return {
        first_name: '',
        last_name: '',
        email: ''
      }
    }

    return {
      ...state,
      [event.name]: event.value
    }
  }

  const [formData, setFormData] = useReducer(formReducer, {
    first_name: '',
    last_name: '',
    email: ''
  });

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  const handleSave = event => {
    event.preventDefault();
    setSubmitting(true);

    axios.post(URL, formData)
      .then((res) => {
        console.log(res);
        setFormData({ reset: true });
        alert("Sucesso ao salvar!");
      })
      .catch(err => {
        console.log(err);
        alert("Falha ao salvar!");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>Registro</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSave}>
            <fieldset className="form-group mb-3" disabled={submitting}>
              <label htmlFor="first_name" className="form-label">Primeiro nome</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
                placeholder="Fulano"
                onChange={handleChange}
                value={formData.first_name || ''}
                required
              />
            </fieldset>

            <fieldset className="form-group mb-3" disabled={submitting}>
              <label htmlFor="last_name" className="form-label">Sobrenome</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
                placeholder="Silva"
                onChange={handleChange}
                value={formData.last_name || ''}
                required
              />
            </fieldset>

            <fieldset className="form-group mb-3" disabled={submitting}>
              <label htmlFor="email" className="form-label">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="email@example.com"
                onChange={handleChange}
                value={formData.email || ''}
                required
              />
            </fieldset>

            <div className="mt-3">
              <button type="submit" className="btn btn-success me-2" style={{ minWidth: '100px' }} disabled={submitting}>
                <i className="fas fa-check-circle"></i> Salvar
              </button>

              <button className="btn btn-light" style={{ minWidth: '100px' }} onClick={() => nav('/user')} disabled={submitting}>
                <i className="fas fa-times-circle"></i> Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

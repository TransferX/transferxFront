import React from 'react';

const PersonalDataStep = () => (
  <div>
    <h2>Dados Pessoais</h2>
    <label>
      Nome:
      <input type="text" name="firstName" className="border p-2 rounded w-full" />
    </label>
    <label>
      Sobrenome:
      <input type="text" name="lastName" className="border p-2 rounded w-full" />
    </label>
    <label>
      E-mail:
      <input type="email" name="email" className="border p-2 rounded w-full" />
    </label>
    <label>
      CPF:
      <input type="text" name="cpf" className="border p-2 rounded w-full" />
    </label>
    <label>
      Senha:
      <input type="password" name="password" className="border p-2 rounded w-full" />
    </label>
    <label>
      Confirmar Senha:
      <input type="password" name="confirmPassword" className="border p-2 rounded w-full" />
    </label>
  </div>
);

export default PersonalDataStep;

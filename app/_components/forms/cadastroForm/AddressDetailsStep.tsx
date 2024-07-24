import React from 'react';

const AddressDataStep = () => (
  <div>
    <h2>Dados do Endereço</h2>
    <label>
      Rua:
      <input type="text" name="street" className="border p-2 rounded w-full" />
    </label>
    <label>
      Bairro:
      <input type="text" name="neighborhood" className="border p-2 rounded w-full" />
    </label>
    <label>
      Número:
      <input type="text" name="number" className="border p-2 rounded w-full" />
    </label>
    <label>
      Cidade:
      <input type="text" name="city" className="border p-2 rounded w-full" />
    </label>
    <label>
      Estado:
      <input type="text" name="state" className="border p-2 rounded w-full" />
    </label>
    <label>
      CEP:
      <input type="text" name="cep" className="border p-2 rounded w-full" />
    </label>
  </div>
);

export default AddressDataStep;

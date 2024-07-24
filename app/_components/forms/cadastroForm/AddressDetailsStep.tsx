import React from 'react';
import Input from '../../ui/Input';

const AddressDataStep = () => (
  <div>
     <h6 className=" font-extrabold text-cinzaMedio text-1xl ">
      Dados do Endereço
     </h6>

    <Input
label="Logradouro"
placeholder="Digite seu logradouro"
id="logradouro"
name="logradouro"
type="logradouro"
/>

<Input
label="Número"
placeholder="Número do Logradouro"
id="Número"
name="Número"
type="Número"
/>

<Input
label="Complemento"
placeholder="Complemento do Logradouro"
id="complemento"
name="complemento"
type="complemento"
/>

<Input
label="Código Postal"
placeholder="Digite seu Código Postal"
id="codigoPostal"
name="codigoPostal"
type="codigoPostal"
/>

<Input
label="Bairro"
placeholder="Digite seu Bairro"
id="bairro"
name="bairro"
type="bairro"
/>


<Input
label="Cidade"
placeholder="Digite sua Cidade"
id="cidade"
name="cidade"
type="cidade"
/>


<Input
label="Estado"
placeholder="Digite o Estado"
id="estado"
name="estado"
type="estado"
/>

  
  </div>
);

export default AddressDataStep;



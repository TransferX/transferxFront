import React from 'react';
import Input from '../../ui/Input';

const ObjectDetailsStep = () => (
  <div>
     <h6 className=" font-extrabold text-cinzaMedio text-1xl ">
     Informações do Veículo
     </h6>

    <Input
label="Modelo"
placeholder="Digite o Modelo"
id="modelo"
name="modelo"
type="modelo"
/>

<Input
label="Marca"
placeholder="Digite a Marca"
id="marca"
name="marca"
type="marca"
/>

<Input
label="Digite o Ano"
placeholder="Digite o Ano"
id="ano"
name="ano"
type="ano"
/>

<Input
label="Categoria"
placeholder="Digite a Categoria"
id="categoria"
name="categoria"
type="categoria"
/>

<Input
label="Tipo"
placeholder="Digite o tipo"
id="tipo"
name="tipo"
type="tipo"
/>



  
  </div>
);

export default ObjectDetailsStep;



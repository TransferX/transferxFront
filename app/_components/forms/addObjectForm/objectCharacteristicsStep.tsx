import React from 'react';
import Input from '../../ui/Input';

const ObjectCharacteristicsStep = () => (
  <div>
     <h6 className=" font-extrabold text-cinzaMedio text-1xl ">
     Características do Veículo
     </h6>

    <Input
label="Número de Série"
placeholder="Digite o Número de Série"
id="numeroDeSerie"
name="numeroDeSerie"
type="numeroDeSerie"
/>

<Input
label="Condição"
placeholder="Digite a Condição"
id="condição"
name="condição"
type="condição"
/>

<Input
label="Cor"
placeholder="Cor"
id="cor"
name="cor"
type="cor"
/>





  
  </div>
);

export default ObjectCharacteristicsStep;



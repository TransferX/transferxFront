import Input from "../../ui/Input";

const PersonalDataStep = () => (
  <div>
  <h6 className=" font-extrabold text-cinzaMedio text-1xl ">Dados Pessoais</h6>
    <Input
      label="Nome"
      placeholder="Digite seu Nome"
      id="nome"
      name="nome"
      type="nome"
    />
    <Input
      label="Sobrenome"
      placeholder="Digite seu Sobrenome"
      id="sobrenome"
      name="sobrenome"
      type="sobrenome"
    />
    <Input
      label="E-mail"
      placeholder="Digite seu E-mail"
      id="E-mail"
      name="E-mail"
      type="E-mail"
    />
    <Input
      label="CPF"
      placeholder="Digite seu CPF"
      id="cpf"
      name="cpf"
      type="cpf"
    />
    <Input
      label="Senha"
      placeholder="Digite sua Senha"
      id="senha"
      name="senha"
      type="senha"
    />
    <Input
      label="Confirmar senha"
      placeholder="Confirme sua Senha"
      id="confirmarSenha"
      name="confirmarSenha"
      type="confirmarSenha"
    />
  </div>
);

export default PersonalDataStep;

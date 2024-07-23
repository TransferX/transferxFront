import Input from '../ui/Input'

const Step1 = () => {
  return (<>
        <h3 className=" text-cinzaMedio font-bold text-lg">Dados Pessoais</h3>

    <div className="md:flex w-full gap-4 mb-2">
    <div className="md:flex-1">
      <Input
        label="Nome"
        placeholder="Digite seu Nome"
        id="nome"
        name="nome"
        type="text"
        />
    </div>
    <div className="md:flex-1">
      <Input
        label="Sobrenome"
        placeholder="Digite seu Sobrenome"
        id="sobrenome"
        name="sobrenome"
        type="text"
        />
    </div>
  </div>

  <div className="md:flex w-full gap-4 mb-2">
    <div className="md:flex-1">
      <Input
        label="E-mail"
        placeholder="Digite seu E-mail"
        id="email"
        name="email"
        type="email"
        />
    </div>
    <div className="md:flex-1">
      <Input
        label="CPF"
        placeholder="Digite seu CPF"
        id="cpf"
        name="cpf"
        type="text"
        />
    </div>
  </div>

  <div className="md:flex w-full gap-4 mb-2">
    <div className="md:flex-1">
      <Input
        label="Senha"
        placeholder="Digite sua Senha"
        id="Senha"
        name="Senha"
        type="password"
      />
    </div>
  
  </div>
        </>
  )
}

export default Step1
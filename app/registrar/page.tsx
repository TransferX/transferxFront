"use client"
import { Header } from "../_components/header/Header"
import MultistepForm from "../_components/forms/MultistepForm";
import PersonalDataStep from "../_components/forms/cadastroForm/PersonalDetailsStep";
import AddressDataStep from "../_components/forms/cadastroForm/AddressDetailsStep";

const Registrar = () => {

  const handleFinish = () => {
    alert('Formulário enviado!');
  };

  return (
    <>
      <Header />

      <section className="m-4 p-4 border-2 border-bordaFormulario rounded-2xl  lg:container lg:mx-auto lg:max-w-[680px] md:my-14">
        <h2 className=" my-2 font-extrabold text-cinzaMedio text-2xl ">
          Criar uma Conta
        </h2>
        <span className="text-cinzaClaro text-sm mt-5">
        Comece sua jornada TransferX se registrando conosco
        </span>
       
        <MultistepForm
        steps={[<PersonalDataStep key="personalData" />, <AddressDataStep key="addressData" />]}
        onFinish={handleFinish}
        showFinishButton={true}
      />

      </section>
    </>
  );
};

export default Registrar;

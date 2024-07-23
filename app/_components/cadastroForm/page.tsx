"use client"
import MultistepForm from "@/app/FormAddObjeto/MultistepForm";
import Step1 from "./Step1";
import Step2 from "./Step2";


const CadastroForm = () => {
  return <MultistepForm  showFinishButton={false} steps={[<Step1 />, <Step2  />] } />;

};

export default CadastroForm;

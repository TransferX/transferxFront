"use client"
import React from "react";
import Sidebar from "../_components/sidebar/Sidebar";
import Input from "../_components/ui/Input";

import MultistepForm from '../_components/multistepForm/MultistepForm';

import Step1 from '../addObjetoForm/step1';
import Step2 from '../addObjetoForm/step2';
import Step3 from '../addObjetoForm/step3';
import Step4 from '../addObjetoForm/step4';

const Dashboard = () => {
  const steps = [<Step1 />, <Step2/>, <Step3/>, <Step4/>];
  return (
    <div className="flex items-center justify-center min-h-screen ">

    <MultistepForm steps={steps} />  
  
    </div>

)};

export default Dashboard;

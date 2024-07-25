"use client";
import React, { useState } from "react";
import Sidebar from "../../_components/sidebar/Sidebar";

import Input from "../../_components/ui/Input";
import Modal from "../../_components/ui/Modal";
import MultistepForm from "@/app/_components/forms/MultistepForm";
import PersonalDataStep from "@/app/_components/forms/registerUserForm/PersonalDetailsStep";
import AddressDataStep from "@/app/_components/forms/registerUserForm/AddressDetailsStep";
import ObjectDetailsStep from "@/app/_components/forms/addObjectForm/objectDetailsStep";
import ObjectCharacteristicsStep from "@/app/_components/forms/addObjectForm/objectCharacteristicsStep";
import ObjectModificationsStep from "@/app/_components/forms/addObjectForm/objectModifications";
import ObjectExtrasStep from "@/app/_components/forms/addObjectForm/objectExtrasStep";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFinish = () => {}

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen p-4 mt-16 lg:mt-0 sm:p-6 lg:p-8 bg-gray-100 ml-0">
        <div className="flex-1 flex flex-col items-center justify-center">
          <section className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-center w-full max-w-3xl mx-auto lg:w-2/3 xl:w-1/2">
            <h2 className="my-2 font-extrabold text-cinzaMedio text-2xl">
              Registrar Veículo
            </h2>
            <span className="text-cinzaClaro text-sm mt-5">
              Comece sua jornada TransferX registrando seu Veículo conosco
            </span>
            <MultistepForm
              steps={[
                <ObjectDetailsStep key="ObjectDetailsStep" />,
                <ObjectCharacteristicsStep key="ObjectCharacteristicsStep" />,
                <ObjectModificationsStep key="ObjectModificationsStep" />,
                <ObjectExtrasStep key="ObjectExtrasStep" />
              ]}
              onFinish={handleFinish}
              showFinishButton={true}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

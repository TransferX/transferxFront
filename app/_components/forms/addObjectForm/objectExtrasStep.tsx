import React, { useState } from 'react';
import Input from '../../ui/Input';
import { FaPaperclip, FaFileAlt } from 'react-icons/fa';

const ObjectExtrasStep = () => {
  const [observations, setObservations] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div>
      <h6 className="font-extrabold text-cinzaMedio text-1xl">Informações Adicionais e Anexos</h6>
      <p className="text-gray-600">Essas serão as informações adicionais do veículo, onde você terá posse.</p>
      
      <div className="my-4">
        <label className="text-cinzaMedio font-bold text-md">Observações</label>
        <textarea
          placeholder="Digite suas observações aqui"
          className="border-2 border-bordaFormulario rounded-xl py-2 px-3 mt-1 focus:outline-1 outline-vermelho text-cinzaMedio w-full"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          rows={4}
        />
      </div>

      <div className="my-4">
        <label className="text-cinzaMedio font-bold text-md">Anexar Arquivos</label>
        <div className="flex items-center mt-2">
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileUpload"
            className="bg-vermelho text-white p-2 rounded flex items-center cursor-pointer"
          >
            <FaPaperclip className="mr-2" /> Anexar Arquivos
          </label>
        </div>
        <div className="mt-4">
          <h6 className="text-cinzaMedio font-bold text-md">Seus anexos</h6>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="flex items-center mt-2">
                <FaFileAlt className="mr-2" /> {file.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ObjectExtrasStep;

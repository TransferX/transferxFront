import React, { useState } from 'react';
import Input from '../../ui/Input';
import { FaPencilAlt, FaTrash, FaPlus } from 'react-icons/fa';

interface Modification {
  id: number;
  component: string;
  description: string;
}

const ObjectModificationsStep = () => {
  const [modifications, setModifications] = useState<Modification[]>([]);
  const [newModification, setNewModification] = useState<Modification>({
    id: 0,
    component: '',
    description: ''
  });
  const [editId, setEditId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

  const handleAdd = () => {
    if (editId === null) {
      setModifications([...modifications, { ...newModification, id: Date.now() }]);
    } else {
      setModifications(modifications.map(mod => (mod.id === editId ? newModification : mod)));
      setEditId(null);
    }
    setNewModification({ id: 0, component: '', description: '' });
    setShowForm(false);
  };

  const handleEdit = (id: number) => {
    const mod = modifications.find(mod => mod.id === id);
    if (mod) {
      setNewModification(mod);
      setEditId(id);
      setShowForm(true);
    }
  };

  const handleDelete = (id: number) => {
    setModifications(modifications.filter(mod => mod.id !== id));
  };

  const filteredModifications = modifications.filter(mod =>
    mod.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mod.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredModifications.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredModifications.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className={`px-3 py-1 rounded ${currentPage === number ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h6 className="font-extrabold text-cinzaMedio text-1xl">Modificações do Veículo</h6>
      <p className="text-gray-600">Essas serão as modificações do veículo, onde você terá posse.</p>
      
      <div className="flex justify-between items-center mt-4">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">Mostrar</label>
          <select id="itemsPerPage" className="border rounded p-1">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Procurar"
          className="border rounded p-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setShowForm(true)}
          type='button'
          className="bg-white text-cinzaEscuro p-2 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Adicionar Modificação
        </button>
      </div>

      {showForm && (
        <div className="mt-4">
          <Input
            label="Componente"
            placeholder="Componente"
            id="component"
            name="component"
            type="text"
          />
          <Input
            label="Descrição"
            placeholder="Descrição"
            id="description"
            name="description"
            type="text"
          
          />
          <div className="flex space-x-4 mt-2">
            <button onClick={handleAdd} className="bg-vermelho/90 text-white p-2 rounded">
              {editId === null ? 'Adicionar' : 'Salvar'}
            </button>
            <button onClick={() => setShowForm(false)} className="bg-cinzaClaro text-white p-2 rounded">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {modifications.length > 0 && (
        <table className="min-w-full mt-4 border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Componente</th>
              <th className="border px-4 py-2">Descrição</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(mod => (
              <tr key={mod.id}>
                <td className="border px-4 py-2">{mod.component}</td>
                <td className="border px-4 py-2">{mod.description}</td>
                <td className="border px-4 py-2 flex space-x-2">
                  <button onClick={() => handleEdit(mod.id)} className="text-yellow-500">
                    <FaPencilAlt />
                  </button>
                  <button onClick={() => handleDelete(mod.id)} className="text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {renderPageNumbers()}
    </div>
  );
};

export default ObjectModificationsStep;

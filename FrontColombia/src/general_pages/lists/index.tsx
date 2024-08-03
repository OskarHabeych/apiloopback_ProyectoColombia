import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*import ListItems from './listItems.tsx';*/

const IndexList = () => {
  const [ponencias, setPonencias] = useState([]);

  useEffect(() => {
    getListaPonencia();
  }, []);

  const getListaPonencia = () => {
    axios.get('http://localhost:3355/ponencias/{id}/usuarios/')
      .then(response => {
        setPonencias(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Listas Ponencias</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Título
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Autor
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ponencias.map((ponencia) => (
              <ListItems key={ponencia.id} item={ponencia} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndexList;

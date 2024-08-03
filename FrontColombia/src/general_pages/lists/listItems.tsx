import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  item: {
    id: string;
    resena: string;
    nombre: string;
    apellidos: string;
  };
}

class ListasItems extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }

  render() {
    const { item } = this.state as { item: Props['item'] };
    return (
      <table className="table-auto w-full mt-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">RESEÑA</th>
            <th className="px-4 py-2">PONENCIA</th>
            <th className="px-4 py-2">FECHA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <Link to={`/indexListas/${item.id}`} className="text-blue-500 hover:underline">
                {item.resena}
              </Link>
            </td>
            <td className="border px-4 py-2">
              <Link to={`/ponencia/${item.id}`} className="text-blue-500 hover:underline">
                {item.nombre}
              </Link>
            </td>
            <td className="border px-4 py-2">
              <Link to={`/fecha/${item.id}`} className="text-blue-500 hover:underline">
                {item.apellidos}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ListItems;

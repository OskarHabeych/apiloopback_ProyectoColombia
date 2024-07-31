import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
  history: {
    push: (path: string) => void;
  };
}

interface State {
  details: {
    id: string;
    resena: string;
    ponencia: string;
    fecha: string;
  } | null;
}

class ListDetails extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      details: null,
    };
  }

  componentDidMount() {
    this.getPonencia();
  }

  getPonencia() {
    const ponenciaId = this.props.match.params.id;
    axios
      .get(`http://localhost:3355/ponencias/${ponenciaId}/usuarios/`)
      .then((response) => {
        this.setState({ details: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch((err) => console.log(err));
  }

  onDelete() {
    const ponenciaId = this.state.details?.id;
    axios
      .delete(`http://localhost:3355/ponencias/${ponenciaId}/usuarios/`)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.details) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container mx-auto p-4">
        <Link className="btn bg-gray-500 text-white mb-4" to="/">
          Back
        </Link>
        <h1 className="text-2xl font-bold mb-4">{this.state.details.resena}</h1>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2">Ponencia: {this.state.details.ponencia}</li>
          <li className="mb-2">Fecha: {this.state.details.fecha}</li>
        </ul>
        <button
          onClick={this.onDelete.bind(this)}
          className="btn bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ListDetails;

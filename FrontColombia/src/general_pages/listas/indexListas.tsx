/*import React, { Component } from 'react';
//import { useForm } from 'react-hook-form'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import listasItems from './listasItems';


class indexListas extends Component{
  constructor(){
    super();
    this.state = {
      ponencias: []
      }
   }

componentWillMount(){
    this.getListaPonencia();
  }

  getListaPonencia(){
    axios.get('http://localhost:3355/explorer/#/UsuariosController/PonenciasController')
      .then(response => {
        this.setState({ponecias: response.data}, () => {
          console.log(this.state);
        })
      })
      .catch(err => console.log(err));
    }

    render(){
      const ponenciasItems = this.state.ponencias.map((ponencia, i) => {...
        return (
          <listasItems key={ponencia.id} item={ponencia} />
        )
    } )
    return (
      <div>
      <h1>Listas Ponencias</h1>
      <ul className="collection">
        {ponenciasItems}
      </ul>
    </div>
  )
}
}*/
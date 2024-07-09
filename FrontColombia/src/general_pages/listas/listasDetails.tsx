/*import React, { Component } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


class Listas extends Component{
  constructor(){
    super();
    this.state = {
      gettinPonencia: []
      }
   }

componentWillMount(){
    this.getUsuarios();
  }

  getPonencias(){
    axios.get('http://localhost:3355/explorer/#/UsuariosController/PonenciasController.find')
      .then(response => {
        this.setState({gettinPonencia: response.data}, () => {
          //console.log(this.state);
        })
      })
    }

    render(){
      //const listItems = this.state.gettinPonencia.map((gettinUser, i) => {...
        return (
          
        )
}*/
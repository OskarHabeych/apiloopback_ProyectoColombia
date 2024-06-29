import React, { Component } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


class Listas extends Component{
  constructor(){
    super();
    this.state = {
      gettinUsers: []
      }
   }

componentWillMount(){
    this.getUsuarios();
  }

  getUsuarios(){
    axios.get('http://localhost:3355/explorer/#/UsuariosController/UsuariosController.find')
      .then(response => {
        this.setState({gettinUsers: response.data}, () => {
          //console.log(this.state);
        })
      })
    }

    render(){
      const listItems = this.state.singin.map((gettinUser, i) => {...
        return (
          <div className="container">
            <br>
            <a routerLink="/encomienda/create" class="btn">Registrar Problemática</a>
        
            <table class="table responsive">
              <thead>
                  <tr>
                      <th>alias</th> //otra modelo "persona"
                      <th>RESEÑA</th>
                      <th>PONENCIA</th>
                      <th>FECHA</th>
                  </tr>
              </thead>
        
              <tbody>
                <tr *ngFor="let p of listado">
                  <td>{{p.alias}}</td>
                  <td>{{p.resena}}</td>
                  <td>{{p.ponencia}}</td>
                  <td>{{p.fecha}}</td>
                  <td>
                    <a routerLink="/encomienda/edit/{{p.id}}" class="btn">Editar</a>
                    <button class="btn red" (click)="delete(p.id)">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}*/
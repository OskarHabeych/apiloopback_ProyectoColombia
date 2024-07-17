/*import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class addPonenia extends Component{
  addPonencia(newPonencia){
    axios.request({
      method:'post',
      url:'http://localhost:3355/ponencias',
      data: newPonencia
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newPonencia = {
      resena: this.refs.resena.value,
      ponencia: this.refs.ponencia.value,
      fecha: this.refs.fecha.value
    }
    this.addPonencia(newPonencia);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Registrar Problema</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="resena" ref="resena" />
            <label htmlFor="resena">RESEÑA (en cortas palabras)  </label>
          </div>
          <div className="input-field">
            <input type="text" name="ponencia" ref="ponencia" />
            <label htmlFor="ponencia">Ponencia relacionada</label>
          </div>
          <div className="input-field">
            <input type="text" name="fecha" ref="fecha" />
            <label htmlFor="fecha">Fecha actual</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default addPonenia;*/
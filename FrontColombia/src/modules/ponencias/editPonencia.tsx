/*import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class editPonencia extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      resena:'',
      ponencia:'',
      fecha:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getPonenciasDetails();
  }

  getPonenciasDetails(){
    let ponenciaId = this.props.match.params.id;
    axios.get(`http://localhost:3355/ponencias/${ponenciaId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        resena: response.data.resena,
        ponencia: response.data.ponencia,
        fecha: response.data.fecha
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editPonencia(newPonencia){
    axios.request({
      method:'put',
      url:`http://localhost:3355/ponencias/${this.state.id}`,
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
    this.editPonencia(newPonencia);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Edit Meetup</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="resena" ref="resena" value={this.state.resena} onChange={this.handleInputChange} />
            <label htmlFor="name">RESEÑA (en cortas palabras)</label>
          </div>
          <div className="input-field">
            <input type="text" name="ponencia" ref="ponencia" value={this.state.ponencia} onChange={this.handleInputChange} />
            <label htmlFor="city">Ponencia relacionada</label>
          </div>
          <div className="input-field">
            <input type="text" name="fecha" ref="fecha" value={this.state.fecha} onChange={this.handleInputChange} />
            <label htmlFor="address">Fecha actual</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default editPonencia;*/
/*import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class listasDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getPonencia();
  }

  getPonencia(){
    let ponenciaId = this.props.match.params.id;
    axios.get(`http://localhost:3355/ponencias/{id}/usuarios/${ponenciaId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let ponenciaId = this.state.details.id;
    axios.delete(`http://localhost:3355/ponencias/{id}/usuarios/${ponenciaId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div>
       <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>{this.state.details.resena}</h1>
       <ul className="collection">
        <li className="collection-item">Ponencia: {this.state.details.ponencia}</li>
        <li className="collection-item">Fecha: {this.state.details.fecha}</li>
        </ul>
        
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default listasDetails;*/
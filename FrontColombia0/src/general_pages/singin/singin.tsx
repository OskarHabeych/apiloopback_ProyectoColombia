import React from 'react';
import axios from 'axios';

const SignIn = () => (
  /*(1)class SingIn extends Component{
    constructor(){
      super();
      this.state = {
        singin: []
      }
    }*/

    /*(3)componentWillMount(){
      this.getUsuarios();
    }*/

  /*(2)getUsuarios(){
    axios.get('http://localhost:3355/explorer/#/UsuariosController/UsuariosController.login')
      .then(response => {
        this.setState({singin: response.data}, () => {
        {
          //console.log(this.state);
        });
      })
    }*/
  
   /*Según lo que se quiera hacer
   (4)render(){
    const singinItems = this.state.singin.map((sing, i) => {...
      return(*/
    <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">
        DaisyUI
      </h1>
      <form className="space-y-4">
        <div>
          <label className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input type="text" placeholder="Email Address" className="w-full input input-bordered" />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="w-full input input-bordered" />
        </div>
        <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
        <div>
          <button className="btn btn-block btn-neutral">Login</button>
        </div>
      </form>
    </div>
  </>
);

export default SignIn;

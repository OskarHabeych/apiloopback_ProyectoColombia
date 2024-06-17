import { /* inject, */ BindingScope, injectable} from '@loopback/core';

import {repository} from '@loopback/repository';
import {config} from '../config/config';
import {Usuarios} from '../models';
import {UsuariosRepository} from '../repositories';
const jwt = require('jsonwebtoken');


// Nuevas librerias: paquetes relacionados a registros de usuarios,  generación de contraseñas aleatorias y encriptación de las mismas
const generator = require("password-generator");
const cryptoJS = require("crypto-js");


@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(@repository(UsuariosRepository)
  public usuarioRepository: UsuariosRepository,
  ) { }

  /*
   * Add service methods here
   */

  //Generacion de claves
  GenerarClave() {
    let clave = generator(8, false);
    return clave;
  }

  CifrarClave(clave: String) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  //JWT
  GenerarTokenJWT(usuario: Usuarios) {
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre + " " + usuario.apellidos
      }
    }, config.claveJWT)

    return token
  }

  validarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, config.claveJWT); // paso donde verifica el "token" generado por el usuario inscrito con respecto a la clave general JWT "config.claveJWT" del proyecto
      return datos;
    } catch (error) {
      return false;
    }
  }

  //Autenticacion del usuario
  IdentificarPersona(correo: string, password: string) {
    try {
      let p = this.usuarioRepository.findOne({where: {correo: correo, password: password}})
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }

}

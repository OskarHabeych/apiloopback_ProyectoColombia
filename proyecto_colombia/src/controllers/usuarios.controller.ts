import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Usuarios} from '../models';
import {UsuariosRepository} from '../repositories';

import {service} from '@loopback/core';
import axios from 'axios';
import {AuthService} from '../services';

import {authenticate} from '@loopback/authentication';
import {HttpErrors} from '@loopback/rest';
import {Credenciales} from '../models';

@authenticate("admin")  // Con esta sentencia colocamos permisos de autenticación a todos los servicios web del controlador usuarios
export class UsuariosController {
  constructor(
    @repository(UsuariosRepository)
    public usuariosRepository: UsuariosRepository,
    @service(AuthService)
    public servicioAuth: AuthService

  ) { }
  
  @authenticate.skip() //Instrucción que habilita que este método del servicio web del controlador usuarios no deba tener permisos de autenticación
  @post('/usuarios')
  @response(200, {
    description: 'Usuarios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuarios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuarios, {
            title: 'NewUsuarios',
            exclude: ['id'],
          }),
        },
      },
    })
    usuarios: Omit<Usuarios, 'id'>,
  ): Promise<Usuarios> {
    // return this.usuariosRepository.create(usuarios);
    //Nuevo
    let clave = this.servicioAuth.GenerarClave();
    let claveCifrada = this.servicioAuth.CifrarClave(clave);
    usuarios.password = claveCifrada;
    let p = await this.usuariosRepository.create(usuarios);

    // Notificamos al usuario por correo
    //let destino = usuarios.correo;
    // Notifiamos al usuario por telefono y cambiar la url por send_sms
    let destino = usuarios.telefono;

    let asunto = 'Registro de usuario en plataforma';
    let contenido = `Hola, ${usuarios.nombre} ${usuarios.apellidos} su contraseña en el portal es: ${clave}`
    axios({  // Axios nos hace el papel de enviar el mail como lo hacía el "Postman", osea ya no se manda el mensaje desde el postman sino desde el código
      method: 'post',
      url: 'http://localhost:5000/send_sms', //Si quiero enviar por mensaje cambiar a send_sms

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        destino: destino,
        asunto: asunto,
        contenido: contenido
      }
    }).then((data: any) => {
      console.log(data)
    }).catch((err: any) => {
      console.log(err)
    })

    return p;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuarios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuarios) where?: Where<Usuarios>,
  ): Promise<Count> {
    return this.usuariosRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuarios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuarios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuarios) filter?: Filter<Usuarios>,
  ): Promise<Usuarios[]> {
    return this.usuariosRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuarios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuarios, {partial: true}),
        },
      },
    })
    usuarios: Usuarios,
    @param.where(Usuarios) where?: Where<Usuarios>,
  ): Promise<Count> {
    return this.usuariosRepository.updateAll(usuarios, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuarios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuarios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuarios, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuarios>
  ): Promise<Usuarios> {
    return this.usuariosRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuarios PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuarios, {partial: true}),
        },
      },
    })
    usuarios: Usuarios,
  ): Promise<void> {
    await this.usuariosRepository.updateById(id, usuarios);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuarios PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuarios: Usuarios,
  ): Promise<void> {
    await this.usuariosRepository.replaceById(id, usuarios);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuarios DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuariosRepository.deleteById(id);
  }

  //Servicio de login
  @authenticate.skip()
  @post('/login', {
    responses: {
      '200': {
        description: 'Identificación de usuarios'
      }
    }
  })
  async login(
    @requestBody() credenciales: Credenciales
  ) {
    let p = await this.servicioAuth.IdentificarPersona(credenciales.usuario, credenciales.password);
    if (p) {
      let token = this.servicioAuth.GenerarTokenJWT(p);

      return {
        status: "success",
        data: {
          nombre: p.nombre,
          apellidos: p.apellidos,
          correo: p.correo,
          id: p.id
        },
        token: token
      }
    } else {
      throw new HttpErrors[401]("Datos invalidos")
    }
  }

}

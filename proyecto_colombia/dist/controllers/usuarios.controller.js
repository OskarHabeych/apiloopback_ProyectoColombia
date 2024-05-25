"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const core_1 = require("@loopback/core");
const axios_1 = tslib_1.__importDefault(require("axios"));
const services_1 = require("../services");
const authentication_1 = require("@loopback/authentication");
const rest_2 = require("@loopback/rest");
const models_2 = require("../models");
let UsuariosController = class UsuariosController {
    constructor(usuariosRepository, servicioAuth) {
        this.usuariosRepository = usuariosRepository;
        this.servicioAuth = servicioAuth;
    }
    async create(usuarios) {
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
        let contenido = `Hola, ${usuarios.nombre} ${usuarios.apellidos} su contraseña en el portal es: ${clave}`;
        (0, axios_1.default)({
            method: 'post',
            url: 'http://localhost:5000/send_sms',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                destino: destino,
                asunto: asunto,
                contenido: contenido
            }
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
        return p;
    }
    async count(where) {
        return this.usuariosRepository.count(where);
    }
    async find(filter) {
        return this.usuariosRepository.find(filter);
    }
    async updateAll(usuarios, where) {
        return this.usuariosRepository.updateAll(usuarios, where);
    }
    async findById(id, filter) {
        return this.usuariosRepository.findById(id, filter);
    }
    async updateById(id, usuarios) {
        await this.usuariosRepository.updateById(id, usuarios);
    }
    async replaceById(id, usuarios) {
        await this.usuariosRepository.replaceById(id, usuarios);
    }
    async deleteById(id) {
        await this.usuariosRepository.deleteById(id);
    }
    //Servicio de login
    async login(credenciales) {
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
            };
        }
        else {
            throw new rest_2.HttpErrors[401]("Datos invalidos");
        }
    }
};
exports.UsuariosController = UsuariosController;
tslib_1.__decorate([
    authentication_1.authenticate.skip() //Instrucción que habilita que este método del servicio web del controlador usuarios no deba tener permisos de autenticación
    ,
    (0, rest_1.post)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuarios model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, {
                    title: 'NewUsuarios',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuarios model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Usuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuarios model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Usuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuarios PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Usuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Usuarios, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuarios model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Usuarios, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuarios PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuarios]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuarios PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuarios]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuarios DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "deleteById", null);
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    (0, rest_1.post)('/login', {
        responses: {
            '200': {
                description: 'Identificación de usuarios'
            }
        }
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_2.Credenciales]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "login", null);
exports.UsuariosController = UsuariosController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("admin") // Con esta sentencia colocamos permisos de autenticación a todos los servicios web del controlador usuarios
    ,
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuariosRepository)),
    tslib_1.__param(1, (0, core_1.service)(services_1.AuthService)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuariosRepository,
        services_1.AuthService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map
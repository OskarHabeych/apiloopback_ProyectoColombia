"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PonenciasController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PonenciasController = class PonenciasController {
    constructor(ponenciasRepository) {
        this.ponenciasRepository = ponenciasRepository;
    }
    async create(ponencias) {
        return this.ponenciasRepository.create(ponencias);
    }
    async count(where) {
        return this.ponenciasRepository.count(where);
    }
    async find(filter) {
        return this.ponenciasRepository.find(filter);
    }
    async updateAll(ponencias, where) {
        return this.ponenciasRepository.updateAll(ponencias, where);
    }
    async findById(id, filter) {
        return this.ponenciasRepository.findById(id, filter);
    }
    async updateById(id, ponencias) {
        await this.ponenciasRepository.updateById(id, ponencias);
    }
    async replaceById(id, ponencias) {
        await this.ponenciasRepository.replaceById(id, ponencias);
    }
    async deleteById(id) {
        await this.ponenciasRepository.deleteById(id);
    }
};
exports.PonenciasController = PonenciasController;
tslib_1.__decorate([
    (0, rest_1.post)('/ponencias'),
    (0, rest_1.response)(200, {
        description: 'Ponencias model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Ponencias) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ponencias, {
                    title: 'NewPonencias',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ponencias/count'),
    (0, rest_1.response)(200, {
        description: 'Ponencias model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Ponencias)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ponencias'),
    (0, rest_1.response)(200, {
        description: 'Array of Ponencias model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Ponencias, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Ponencias)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ponencias'),
    (0, rest_1.response)(200, {
        description: 'Ponencias PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ponencias, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Ponencias)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Ponencias, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ponencias/{id}'),
    (0, rest_1.response)(200, {
        description: 'Ponencias model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ponencias, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Ponencias, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ponencias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ponencias PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ponencias, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Ponencias]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ponencias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ponencias PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Ponencias]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ponencias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ponencias DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasController.prototype, "deleteById", null);
exports.PonenciasController = PonenciasController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("admin"),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PonenciasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PonenciasRepository])
], PonenciasController);
//# sourceMappingURL=ponencias.controller.js.map
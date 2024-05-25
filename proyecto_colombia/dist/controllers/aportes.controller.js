"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AportesController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AportesController = class AportesController {
    constructor(aportesRepository) {
        this.aportesRepository = aportesRepository;
    }
    async create(aportes) {
        return this.aportesRepository.create(aportes);
    }
    async count(where) {
        return this.aportesRepository.count(where);
    }
    async find(filter) {
        return this.aportesRepository.find(filter);
    }
    async updateAll(aportes, where) {
        return this.aportesRepository.updateAll(aportes, where);
    }
    async findById(id, filter) {
        return this.aportesRepository.findById(id, filter);
    }
    async updateById(id, aportes) {
        await this.aportesRepository.updateById(id, aportes);
    }
    async replaceById(id, aportes) {
        await this.aportesRepository.replaceById(id, aportes);
    }
    async deleteById(id) {
        await this.aportesRepository.deleteById(id);
    }
};
exports.AportesController = AportesController;
tslib_1.__decorate([
    (0, rest_1.post)('/aportes'),
    (0, rest_1.response)(200, {
        description: 'Aportes model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Aportes) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aportes, {
                    title: 'NewAportes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/aportes/count'),
    (0, rest_1.response)(200, {
        description: 'Aportes model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Aportes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/aportes'),
    (0, rest_1.response)(200, {
        description: 'Array of Aportes model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Aportes, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Aportes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/aportes'),
    (0, rest_1.response)(200, {
        description: 'Aportes PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aportes, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Aportes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Aportes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/aportes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Aportes model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aportes, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Aportes, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/aportes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aportes PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aportes, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Aportes]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/aportes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aportes PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Aportes]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/aportes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aportes DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesController.prototype, "deleteById", null);
exports.AportesController = AportesController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("admin"),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AportesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AportesRepository])
], AportesController);
//# sourceMappingURL=aportes.controller.js.map
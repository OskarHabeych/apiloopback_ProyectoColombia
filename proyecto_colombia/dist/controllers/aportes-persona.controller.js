"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AportesPersonaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AportesPersonaController = class AportesPersonaController {
    constructor(aportesRepository) {
        this.aportesRepository = aportesRepository;
    }
    async getPersona(id) {
        return this.aportesRepository.comentarioFk(id);
    }
};
exports.AportesPersonaController = AportesPersonaController;
tslib_1.__decorate([
    (0, rest_1.get)('/aportes/{id}/persona', {
        responses: {
            '200': {
                description: 'Persona belonging to Aportes',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Persona),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AportesPersonaController.prototype, "getPersona", null);
exports.AportesPersonaController = AportesPersonaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AportesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AportesRepository])
], AportesPersonaController);
//# sourceMappingURL=aportes-persona.controller.js.map
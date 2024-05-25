"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PersonaRepository = class PersonaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuariosRepositoryGetter) {
        super(models_1.Persona, dataSource);
        this.usuariosRepositoryGetter = usuariosRepositoryGetter;
        this.aliasFk = this.createBelongsToAccessorFor('aliasFk', usuariosRepositoryGetter);
        this.registerInclusionResolver('aliasFk', this.aliasFk.inclusionResolver);
    }
};
exports.PersonaRepository = PersonaRepository;
exports.PersonaRepository = PersonaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Mongo')),
    tslib_1.__param(1, repository_1.repository.getter('UsuariosRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function])
], PersonaRepository);
//# sourceMappingURL=persona.repository.js.map
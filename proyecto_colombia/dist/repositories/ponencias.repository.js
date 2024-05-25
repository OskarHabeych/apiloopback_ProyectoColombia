"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PonenciasRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PonenciasRepository = class PonenciasRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuariosRepositoryGetter) {
        super(models_1.Ponencias, dataSource);
        this.usuariosRepositoryGetter = usuariosRepositoryGetter;
        this.resenaFk = this.createBelongsToAccessorFor('resenaFk', usuariosRepositoryGetter);
        this.registerInclusionResolver('resenaFk', this.resenaFk.inclusionResolver);
    }
};
exports.PonenciasRepository = PonenciasRepository;
exports.PonenciasRepository = PonenciasRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Mongo')),
    tslib_1.__param(1, repository_1.repository.getter('UsuariosRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function])
], PonenciasRepository);
//# sourceMappingURL=ponencias.repository.js.map
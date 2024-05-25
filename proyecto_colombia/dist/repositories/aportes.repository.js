"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AportesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AportesRepository = class AportesRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, personaRepositoryGetter) {
        super(models_1.Aportes, dataSource);
        this.personaRepositoryGetter = personaRepositoryGetter;
        this.comentarioFk = this.createBelongsToAccessorFor('comentarioFk', personaRepositoryGetter);
        this.registerInclusionResolver('comentarioFk', this.comentarioFk.inclusionResolver);
    }
};
exports.AportesRepository = AportesRepository;
exports.AportesRepository = AportesRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Mongo')),
    tslib_1.__param(1, repository_1.repository.getter('PersonaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function])
], AportesRepository);
//# sourceMappingURL=aportes.repository.js.map
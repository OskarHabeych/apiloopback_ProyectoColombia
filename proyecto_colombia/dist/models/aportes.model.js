"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aportes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const persona_model_1 = require("./persona.model");
let Aportes = class Aportes extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Aportes = Aportes;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Aportes.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => persona_model_1.Persona, { name: 'comentarioFk' }),
    tslib_1.__metadata("design:type", String)
], Aportes.prototype, "comantario", void 0);
exports.Aportes = Aportes = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Aportes);
//# sourceMappingURL=aportes.model.js.map
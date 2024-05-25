"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Persona = class Persona extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Persona = Persona;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Persona.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Persona.prototype, "alias", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Persona.prototype, "actividad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Persona.prototype, "pais", void 0);
exports.Persona = Persona = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Persona);
//# sourceMappingURL=persona.model.js.map
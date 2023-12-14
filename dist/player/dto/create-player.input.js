"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreatePlayerInput = class CreatePlayerInput {
};
exports.CreatePlayerInput = CreatePlayerInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Player's name" }),
    __metadata("design:type", String)
], CreatePlayerInput.prototype, "PlayerName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Password of player" }),
    __metadata("design:type", String)
], CreatePlayerInput.prototype, "PlayerPassword", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "User's roll" }),
    __metadata("design:type", String)
], CreatePlayerInput.prototype, "Roll", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Municipio' }),
    __metadata("design:type", String)
], CreatePlayerInput.prototype, "Municipio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Provincia' }),
    __metadata("design:type", String)
], CreatePlayerInput.prototype, "Provincia", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Telefono' }),
    __metadata("design:type", Number)
], CreatePlayerInput.prototype, "Tel", void 0);
exports.CreatePlayerInput = CreatePlayerInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePlayerInput);
//# sourceMappingURL=create-player.input.js.map
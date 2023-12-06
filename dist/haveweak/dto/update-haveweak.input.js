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
exports.UpdateHaveweakInput = void 0;
const create_haveweak_input_1 = require("./create-haveweak.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateHaveweakInput = class UpdateHaveweakInput extends (0, graphql_1.PartialType)(create_haveweak_input_1.CreateHaveweakInput) {
};
exports.UpdateHaveweakInput = UpdateHaveweakInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Tournament's date" }),
    __metadata("design:type", Number)
], UpdateHaveweakInput.prototype, "TournamentDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: " Tournament's name" }),
    __metadata("design:type", String)
], UpdateHaveweakInput.prototype, "TournamentName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: " Match's id" }),
    __metadata("design:type", Number)
], UpdateHaveweakInput.prototype, "MatchID", void 0);
exports.UpdateHaveweakInput = UpdateHaveweakInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateHaveweakInput);
//# sourceMappingURL=update-haveweak.input.js.map
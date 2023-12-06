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
exports.UpdateDeckInput = void 0;
const create_deck_input_1 = require("./create-deck.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateDeckInput = class UpdateDeckInput extends (0, graphql_1.PartialType)(create_deck_input_1.CreateDeckInput) {
};
exports.UpdateDeckInput = UpdateDeckInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateDeckInput.prototype, "DeckID", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Deck name" }),
    __metadata("design:type", String)
], UpdateDeckInput.prototype, "DeckName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Main deck cards count" }),
    __metadata("design:type", Number)
], UpdateDeckInput.prototype, "MainDeckCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Side deck cards count" }),
    __metadata("design:type", Number)
], UpdateDeckInput.prototype, "SideDeckCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Extra deck cards count" }),
    __metadata("design:type", Number)
], UpdateDeckInput.prototype, "ExtraDeckCount", void 0);
exports.UpdateDeckInput = UpdateDeckInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateDeckInput);
//# sourceMappingURL=update-deck.input.js.map
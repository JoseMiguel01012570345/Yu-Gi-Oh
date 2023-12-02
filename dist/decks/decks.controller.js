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
exports.DecksController = void 0;
const common_1 = require("@nestjs/common");
const decks_service_1 = require("./decks.service");
let DecksController = class DecksController {
    constructor(decksService) {
        this.decksService = decksService;
    }
    getDecks() {
        let result = [];
        const deck = this.decksService.getDecks();
        for (let i = 0; i < 10; i++)
            result.push(deck);
        return result;
    }
};
exports.DecksController = DecksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DecksController.prototype, "getDecks", null);
exports.DecksController = DecksController = __decorate([
    (0, common_1.Controller)("decks"),
    __metadata("design:paramtypes", [decks_service_1.DecksService])
], DecksController);
//# sourceMappingURL=decks.controller.js.map
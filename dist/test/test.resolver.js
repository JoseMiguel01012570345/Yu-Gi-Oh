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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const test_service_1 = require("./test.service");
const test_entity_1 = require("./entities/test.entity");
const create_test_input_1 = require("./dto/create-test.input");
const update_test_input_1 = require("./dto/update-test.input");
let TestResolver = class TestResolver {
    constructor(testService) {
        this.testService = testService;
    }
    createTest(createTestInput) {
        return this.testService.create(createTestInput);
    }
    findAll() {
        return this.testService.findAll();
    }
    findOne(id) {
        return this.testService.findOne(id);
    }
    updateTest(updateTestInput) {
        return this.testService.update(updateTestInput.id, updateTestInput);
    }
    removeTest(id) {
        return this.testService.remove(id);
    }
};
exports.TestResolver = TestResolver;
__decorate([
    (0, graphql_1.Mutation)(() => test_entity_1.Test),
    __param(0, (0, graphql_1.Args)('createTestInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_input_1.CreateTestInput]),
    __metadata("design:returntype", void 0)
], TestResolver.prototype, "createTest", null);
__decorate([
    (0, graphql_1.Query)(() => [test_entity_1.Test], { name: 'test' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => test_entity_1.Test, { name: 'test' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => test_entity_1.Test),
    __param(0, (0, graphql_1.Args)('updateTestInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_test_input_1.UpdateTestInput]),
    __metadata("design:returntype", void 0)
], TestResolver.prototype, "updateTest", null);
__decorate([
    (0, graphql_1.Mutation)(() => test_entity_1.Test),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestResolver.prototype, "removeTest", null);
exports.TestResolver = TestResolver = __decorate([
    (0, graphql_1.Resolver)(() => test_entity_1.Test),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestResolver);
//# sourceMappingURL=test.resolver.js.map
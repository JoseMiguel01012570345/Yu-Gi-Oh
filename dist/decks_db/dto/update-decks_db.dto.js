"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDecksDbDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_decks_db_dto_1 = require("./create-decks_db.dto");
class UpdateDecksDbDto extends (0, mapped_types_1.PartialType)(create_decks_db_dto_1.CreateDecksDbDto) {
}
exports.UpdateDecksDbDto = UpdateDecksDbDto;
//# sourceMappingURL=update-decks_db.dto.js.map
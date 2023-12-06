import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
export declare class TestService {
    create(createTestInput: CreateTestInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestInput: UpdateTestInput): string;
    remove(id: number): string;
}

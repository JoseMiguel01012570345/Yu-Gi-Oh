import { TestService } from './test.service';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
export declare class TestResolver {
    private readonly testService;
    constructor(testService: TestService);
    createTest(createTestInput: CreateTestInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateTest(updateTestInput: UpdateTestInput): string;
    removeTest(id: number): string;
}

import { CreateKeyboardDto } from '../dto/create-keyboard.dto';
import { KeyboardsService } from '../services/keyboards.service';
import { Keyboard } from '../interfaces/keyboard.interface';
export declare class KeyboardsController {
    private readonly keyboardsService;
    constructor(keyboardsService: KeyboardsService);
    findAll(): Promise<Keyboard[]>;
    findOne(id: any): Promise<Keyboard>;
    create(createKeyboardDto: CreateKeyboardDto): Promise<Keyboard>;
}

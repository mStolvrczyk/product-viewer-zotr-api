import { Keyboard } from '../interfaces/keyboard.interface';
import { Model } from 'mongoose';
export declare class KeyboardsService {
    private readonly keyboardModel;
    constructor(keyboardModel: Model<Keyboard>);
    findAll(): Promise<Keyboard[]>;
    findKeyboardType(brand: string): Promise<Keyboard>;
    create(keyboard: Keyboard): Promise<Keyboard>;
}

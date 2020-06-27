import { Keyboard } from '../interfaces/laptop.interface';
import { Model } from 'mongoose';
export declare class KeyboardsService {
    private readonly keyboardModel;
    constructor(keyboardModel: Model<Keyboard>);
    findAll(): Promise<Keyboard[]>;
    findOne(id: string): Promise<Keyboard>;
    create(keyboard: Keyboard): Promise<Keyboard>;
}

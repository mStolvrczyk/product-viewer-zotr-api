import { Mouse } from '../interfaces/mouse.interface';
import { Model } from 'mongoose';
export declare class MousesService {
    private readonly mouseModel;
    constructor(mouseModel: Model<Mouse>);
    findAll(): Promise<Mouse[]>;
    findMouseType(gamingMouse: boolean): Promise<Mouse>;
    create(mouse: Mouse): Promise<Mouse>;
}

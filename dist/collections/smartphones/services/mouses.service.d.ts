import { Mouse } from '../interfaces/smartphone.interface';
import { Model } from 'mongoose';
export declare class MousesService {
    private readonly mouseModel;
    constructor(mouseModel: Model<Mouse>);
    findAll(): Promise<Mouse[]>;
    findOne(id: string): Promise<Mouse>;
    create(mouse: Mouse): Promise<Mouse>;
}

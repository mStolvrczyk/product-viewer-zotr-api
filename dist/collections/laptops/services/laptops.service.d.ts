import { Laptop } from '../interfaces/laptop.interface';
import { Model } from 'mongoose';
export declare class LaptopsService {
    private readonly laptopModel;
    constructor(laptopModel: Model<Laptop>);
    findAll(): Promise<Laptop[]>;
    findOne(id: string): Promise<Laptop>;
    create(laptop: Laptop): Promise<Laptop>;
}

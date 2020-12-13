import { Laptop } from '../interfaces/laptop.interface';
import { Model } from 'mongoose';
export declare class LaptopsService {
    private readonly laptopModel;
    constructor(laptopModel: Model<Laptop>);
    findAll(): Promise<Laptop[]>;
    count(): Promise<Laptop>;
    countByType(type: string): Promise<Laptop>;
    findLaptopType(type: string): Promise<Laptop>;
    create(laptop: Laptop): Promise<Laptop>;
}

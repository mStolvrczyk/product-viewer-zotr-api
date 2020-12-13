import { Smartphone } from '../interfaces/smartphone.interface';
import { Model } from 'mongoose';
import { Laptop } from "../../laptops/interfaces/laptop.interface";
export declare class SmartphonesService {
    private readonly smartphoneModel;
    constructor(smartphoneModel: Model<Smartphone>);
    findAll(): Promise<Smartphone[]>;
    count(): Promise<Laptop>;
    findOne(id: string): Promise<Smartphone>;
    create(smartphone: Smartphone): Promise<Smartphone>;
}

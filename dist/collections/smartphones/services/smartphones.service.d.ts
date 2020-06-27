import { Smartphone } from '../interfaces/smartphone.interface';
import { Model } from 'mongoose';
export declare class SmartphonesService {
    private readonly smartphoneModel;
    constructor(smartphoneModel: Model<Smartphone>);
    findAll(): Promise<Smartphone[]>;
    findOne(id: string): Promise<Smartphone>;
    create(smartphone: Smartphone): Promise<Smartphone>;
}

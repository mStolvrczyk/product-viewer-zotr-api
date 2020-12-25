import { Smartphone } from '../interfaces/smartphone.interface';
import { Model } from 'mongoose';
export declare class SmartphonesService {
    private readonly smartphoneModel;
    constructor(smartphoneModel: Model<Smartphone>);
    findAll(): Promise<Smartphone[]>;
    count(): Promise<Smartphone>;
    findOne(id: string): Promise<Smartphone>;
    create(smartphone: Smartphone): Promise<Smartphone>;
    delete(id: string): Promise<Smartphone>;
    update(id: string, smartphone: Smartphone): Promise<Smartphone>;
}

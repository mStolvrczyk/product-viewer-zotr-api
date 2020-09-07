import { Monitor } from '../interfaces/mouse.interface';
import { Model } from 'mongoose';
export declare class MonitorsService {
    private readonly monitorModel;
    constructor(monitorModel: Model<Monitor>);
    findAll(): Promise<Monitor[]>;
    findOne(id: string): Promise<Monitor>;
    create(monitor: Monitor): Promise<Monitor>;
}

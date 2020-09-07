import { Drone } from './interfaces/drone.interface';
import { Model } from 'mongoose';
export declare class DronesService {
    private readonly droneModel;
    constructor(droneModel: Model<Drone>);
    findAll(): Promise<Drone[]>;
    findOne(id: string): Promise<Drone>;
    create(drone: Drone): Promise<Drone>;
}

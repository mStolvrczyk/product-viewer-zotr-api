import { Injectable } from '@nestjs/common';
import { Drone } from '../interfaces/drone.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DronesService {
    constructor(@InjectModel('Drone') private readonly droneModel: Model<Drone>) {}

    async findAll(): Promise<Drone[]> {
        return await this.droneModel.find();
    }

    async findOne(id: string): Promise<Drone> {
        return await this.droneModel.findOne({ _id: id });
    }

    async create(drone: Drone): Promise<Drone> {
        const newDrone = new this.droneModel(drone);
        return newDrone.save();
    }
}

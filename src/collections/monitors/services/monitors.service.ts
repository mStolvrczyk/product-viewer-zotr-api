import { Injectable } from '@nestjs/common';
import { Monitor } from '../interfaces/monitor.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MonitorsService {
    constructor(@InjectModel('Monitor') private readonly monitorModel: Model<Monitor>) {}

    async findAll(): Promise<Monitor[]> {
        return await this.monitorModel.find();
    }

    async findOne(id: string): Promise<Monitor> {
        return await this.monitorModel.findOne({ _id: id });
    }

    async create(monitor: Monitor): Promise<Monitor> {
        const newMonitor = new this.monitorModel(monitor);
        return newMonitor.save();
    }
}

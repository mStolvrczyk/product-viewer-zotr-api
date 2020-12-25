import { Injectable } from '@nestjs/common';
import { Smartphone } from '../interfaces/smartphone.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SmartphonesService {
    constructor(@InjectModel('Smartphone') private readonly smartphoneModel: Model<Smartphone>) {}

    async findAll(): Promise<Smartphone[]> {
        return await this.smartphoneModel.find();
    }
    async count(): Promise<Smartphone> {
        return await this.smartphoneModel.countDocuments();
    }
    async findOne(id: string): Promise<Smartphone> {
        return await this.smartphoneModel.findOne({ _id: id });
    }

    async create(smartphone: Smartphone): Promise<Smartphone> {
        const newSmartphone = new this.smartphoneModel(smartphone);
        return newSmartphone.save();
    }
    async delete(id: string): Promise<Smartphone> {
        return await this.smartphoneModel.findByIdAndRemove(id);
    }
    async update(id: string, smartphone: Smartphone): Promise<Smartphone> {
        return await this.smartphoneModel.findByIdAndUpdate(id, smartphone, { new: true });
    }
}

import { Injectable } from '@nestjs/common';
import { Smartphone } from '../interfaces/smartphone.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import {Laptop} from "../../laptops/interfaces/laptop.interface";

@Injectable()
export class SmartphonesService {
    constructor(@InjectModel('Smartphone') private readonly smartphoneModel: Model<Smartphone>) {}

    async findAll(): Promise<Smartphone[]> {
        return await this.smartphoneModel.find();
    }
    async count(): Promise<Laptop> {
        return await this.smartphoneModel.countDocuments();
    }
    async findOne(id: string): Promise<Smartphone> {
        return await this.smartphoneModel.findOne({ _id: id });
    }

    async create(smartphone: Smartphone): Promise<Smartphone> {
        const newSmartphone = new this.smartphoneModel(smartphone);
        return newSmartphone.save();
    }
}

import { Injectable } from '@nestjs/common';
import { Laptop } from '../interfaces/laptop.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LaptopsService {
    constructor(@InjectModel('Laptop') private readonly laptopModel: Model<Laptop>) {}

    async findAll(): Promise<Laptop[]> {
        return await this.laptopModel.find();
    }

    async findOne(id: string): Promise<Laptop> {
        return await this.laptopModel.findOne({ _id: id });
    }

    async create(laptop: Laptop): Promise<Laptop> {
        const newLaptop = new this.laptopModel(laptop);
        return newLaptop.save();
    }
}

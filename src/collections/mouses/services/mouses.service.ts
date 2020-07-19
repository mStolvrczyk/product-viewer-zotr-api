import { Injectable } from '@nestjs/common';
import { Mouse } from '../interfaces/mouse.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MousesService {
    constructor(@InjectModel('Mouse') private readonly mouseModel: Model<Mouse>) {}

    async findAll(): Promise<Mouse[]> {
        return await this.mouseModel.find();
    }

    async findMouseType(gamingMouse: boolean): Promise<Mouse> {
        return await this.mouseModel.find({ gamingMouse: gamingMouse });
    }

    async create(mouse: Mouse): Promise<Mouse> {
        const newMouse = new this.mouseModel(mouse);
        return newMouse.save();
    }
}

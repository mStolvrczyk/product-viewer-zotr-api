import { Injectable } from '@nestjs/common';
import { GraphicsCard } from '../interfaces/graphicsCard.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import {Laptop} from "../../laptops/interfaces/laptop.interface";

@Injectable()
export class GraphicsCardsService {
    constructor(@InjectModel('GraphicsCard') private readonly graphicsCardModel: Model<GraphicsCard>) {}

    async findAll(): Promise<GraphicsCard[]> {
        return await this.graphicsCardModel.find();
    }
    async count(): Promise<Laptop> {
        return await this.graphicsCardModel.countDocuments();
    }
    async findOne(id: string): Promise<GraphicsCard> {
        return await this.graphicsCardModel.findOne({ _id: id });
    }

    async create(graphicsCard: GraphicsCard): Promise<GraphicsCard> {
        const newGraphicsCard = new this.graphicsCardModel(graphicsCard);
        return newGraphicsCard.save();
    }
}

import { GraphicsCard } from '../interfaces/graphicsCard.interface';
import { Model } from 'mongoose';
import { Laptop } from "../../laptops/interfaces/laptop.interface";
export declare class GraphicsCardsService {
    private readonly graphicsCardModel;
    constructor(graphicsCardModel: Model<GraphicsCard>);
    findAll(): Promise<GraphicsCard[]>;
    count(): Promise<Laptop>;
    findOne(id: string): Promise<GraphicsCard>;
    create(graphicsCard: GraphicsCard): Promise<GraphicsCard>;
}

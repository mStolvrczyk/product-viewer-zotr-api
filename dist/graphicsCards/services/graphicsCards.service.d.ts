import { GraphicsCard } from '../interfaces/graphicsCard.interface';
import { Model } from 'mongoose';
export declare class GraphicsCardsService {
    private readonly graphicsCardModel;
    constructor(graphicsCardModel: Model<GraphicsCard>);
    findAll(): Promise<GraphicsCard[]>;
    findOne(id: string): Promise<GraphicsCard>;
    create(drone: GraphicsCard): Promise<GraphicsCard>;
}

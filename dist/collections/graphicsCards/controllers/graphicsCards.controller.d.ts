import { CreateGraphicsCardDto } from '../dto/create-graphicsCard.dto';
import { GraphicsCardsService } from '../services/graphicsCards.service';
import { GraphicsCard } from '../interfaces/graphicsCard.interface';
import { Laptop } from "../../laptops/interfaces/laptop.interface";
export declare class GraphicsCardsController {
    private readonly graphicsCardsService;
    constructor(graphicsCardsService: GraphicsCardsService);
    findAll(): Promise<GraphicsCard[]>;
    count(): Promise<Laptop>;
    findOne(id: any): Promise<GraphicsCard>;
    create(createGraphicsCardDto: CreateGraphicsCardDto): Promise<GraphicsCard>;
}

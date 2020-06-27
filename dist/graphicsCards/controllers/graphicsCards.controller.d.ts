import { CreateGraphicsCardDto } from '../dto/create-graphicsCard.dto';
import { GraphicsCardsService } from '../services/graphicsCards.service';
import { GraphicsCard } from '../interfaces/graphicsCard.interface';
export declare class GraphicsCardsController {
    private readonly graphicsCardsService;
    constructor(graphicsCardsService: GraphicsCardsService);
    findAll(): Promise<GraphicsCard[]>;
    findOne(id: any): Promise<GraphicsCard>;
    create(createGraphicsCardDto: CreateGraphicsCardDto): Promise<GraphicsCard>;
}

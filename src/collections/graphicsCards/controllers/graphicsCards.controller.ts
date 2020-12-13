import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateGraphicsCardDto } from '../dto/create-graphicsCard.dto';
import { GraphicsCardsService } from '../services/graphicsCards.service';
import { GraphicsCard } from '../interfaces/graphicsCard.interface';
import {Laptop} from "../../laptops/interfaces/laptop.interface";

@Controller('graphicsCards')
export class GraphicsCardsController {
    constructor(private readonly graphicsCardsService: GraphicsCardsService) {}

    @Get()
    async findAll(): Promise<GraphicsCard[]> {
        return this.graphicsCardsService.findAll()
    }
    @Get('count')
    async count(): Promise<Laptop> {
        return this.graphicsCardsService.count()
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<GraphicsCard> {
        return this.graphicsCardsService.findOne(id);
    }
    @Post()
    create(@Body() createGraphicsCardDto: CreateGraphicsCardDto): Promise<GraphicsCard> {
        return this.graphicsCardsService.create(createGraphicsCardDto);
    }
}

import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
// import { CreateDroneDto } from '../dto/create-drone.dto';
import { CrawlerService } from './crawler.service';
// import { Drone } from '../interfaces/drone.interface';

@Controller('graphicsCards')
export class CrawlerController {
    constructor(private readonly crawlerService: CrawlerService) {}

    @Get(':target')
    async getGraphicsCard(@Param('target') target): Promise<unknown> {
        return this.crawlerService.scrape(target)
    }
    // @Get(':id')
    // async findOne(@Param('id') id): Promise<Drone> {
    //     return this.dronesService.findOne(id);
    // }
    // @Post()
    // create(@Body() createDroneDto: CreateDroneDto): Promise<Drone> {
    //     return this.dronesService.create(createDroneDto);
    // }
}

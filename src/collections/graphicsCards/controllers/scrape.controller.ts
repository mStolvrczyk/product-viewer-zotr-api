import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
// import { CreateDroneDto } from '../dto/create-drone.dto';
import { ScrapeService } from '../services/scrape.service';
// import { Drone } from '../interfaces/drone.interface';

@Controller('graphicsCard')
export class ScrapeController {
    constructor(private readonly scrapeService: ScrapeService) {}

    @Get(':target')
    async getGraphicsCard(@Param('target') target): Promise<unknown> {
        return this.scrapeService.scrape(target)
    }
}

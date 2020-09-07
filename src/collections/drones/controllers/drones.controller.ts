import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateDroneDto } from '../dto/create-drone.dto';
import { DronesService } from '../services/drones.service';
import { Drone } from '../interfaces/drone.interface';

@Controller('drones')
export class DronesController {
    constructor(private readonly dronesService: DronesService) {}

    @Get()
    async findAll(): Promise<Drone[]> {
        return this.dronesService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Drone> {
        return this.dronesService.findOne(id);
    }
    @Post()
    create(@Body() createDroneDto: CreateDroneDto): Promise<Drone> {
        return this.dronesService.create(createDroneDto);
    }
}

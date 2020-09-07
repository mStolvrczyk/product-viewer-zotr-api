import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateSmartphoneDto } from '../dto/create-smartphone.dto';
import { SmartphonesService } from '../services/smartphones.service';
import { Smartphone } from '../interfaces/smartphone.interface';

@Controller('smartphones')
export class SmartphonesController {
    constructor(private readonly smartphonesService: SmartphonesService) {}

    @Get()
    async findAll(): Promise<Smartphone[]> {
        return this.smartphonesService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Smartphone> {
        return this.smartphonesService.findOne(id);
    }
    @Post()
    create(@Body() createSmartphoneDto: CreateSmartphoneDto): Promise<Smartphone> {
        return this.smartphonesService.create(createSmartphoneDto);
    }
}

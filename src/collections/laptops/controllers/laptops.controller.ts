import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateLaptopDto } from '../dto/create-laptop.dto';
import { LaptopsService } from '../services/laptops.service';
import { Laptop } from '../interfaces/laptop.interface';

@Controller('laptops')
export class LaptopsController {
    constructor(private readonly laptopsService: LaptopsService) {}

    @Get()
    async findAll(): Promise<Laptop[]> {
        return this.laptopsService.findAll()
    }
    @Get('count')
    async count(): Promise<Laptop> {
        return this.laptopsService.count()
    }
    @Get(':type/count')
    async countByType(@Param('type') type): Promise<Laptop> {
        return this.laptopsService.countByType(type);
    }
    @Get(':type')
    async findLaptopType(@Param('type') type): Promise<Laptop> {
        return this.laptopsService.findLaptopType(type);
    }
    @Post()
    create(@Body() createLaptopDto: CreateLaptopDto): Promise<Laptop> {
        return this.laptopsService.create(createLaptopDto);
    }
}

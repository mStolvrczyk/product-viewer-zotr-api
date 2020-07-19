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
    @Get(':id')
    async findOne(@Param('id') id): Promise<Laptop> {
        return this.laptopsService.findOne(id);
    }
    @Post()
    create(@Body() createLaptopDto: CreateLaptopDto): Promise<Laptop> {
        return this.laptopsService.create(createLaptopDto);
    }
}

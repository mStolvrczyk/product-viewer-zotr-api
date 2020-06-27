import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateMouseDto } from '../dto/create-mouse.dto';
import { MousesService } from '../services/mouses.service';
import { Mouse } from '../interfaces/mouse.interface';

@Controller('mouses')
export class MousesController {
    constructor(private readonly mousesService: MousesService) {}

    @Get()
    async findAll(): Promise<Mouse[]> {
        return this.mousesService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Mouse> {
        return this.mousesService.findOne(id);
    }
    @Post()
    create(@Body() createMouseDto: CreateMouseDto): Promise<Mouse> {
        return this.mousesService.create(createMouseDto);
    }
}

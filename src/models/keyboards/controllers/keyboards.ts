import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateKeyboardDto } from '../dto/create-keyboard.dto';
import { KeyboardsService } from '../services/keyboards.service';
import { Keyboard } from '../interfaces/keyboard.interface';

@Controller('keyboards')
export class KeyboardsController {
    constructor(private readonly keyboardsService: KeyboardsService) {}

    @Get()
    async findAll(): Promise<Keyboard[]> {
        return this.keyboardsService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Keyboard> {
        return this.keyboardsService.findOne(id);
    }
    @Post()
    create(@Body() createKeyboardDto: CreateKeyboardDto): Promise<Keyboard> {
        return this.keyboardsService.create(createKeyboardDto);
    }
}

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
    @Get(':gamingKeyboard')
    async findKeyboardType(@Param('gamingKeyboard') gamingKeyboard): Promise<Keyboard> {
        return this.keyboardsService.findKeyboardType(gamingKeyboard);
    }
    @Post()
    create(@Body() createKeyboardDto: CreateKeyboardDto): Promise<Keyboard> {
        return this.keyboardsService.create(createKeyboardDto);
    }
}

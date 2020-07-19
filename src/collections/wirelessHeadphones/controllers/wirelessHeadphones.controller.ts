import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateWirelessHeadphonesDto } from '../dto/create-wirelessHeadphones.dto';
import { WirelessHeadphonesService } from '../services/wirelessHeadphones.service';
import { WirelessHeadphones } from '../interfaces/wirelessHeadphones.interface';

@Controller('wirelessHeadphones')
export class WirelessHeadphonesController {
    constructor(private readonly wirelessHeadphonesService: WirelessHeadphonesService) {}

    @Get()
    async findAll(): Promise<WirelessHeadphones[]> {
        return this.wirelessHeadphonesService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<WirelessHeadphones> {
        return this.wirelessHeadphonesService.findOne(id);
    }
    @Post()
    create(@Body() createWirelessHeadphonesDto: CreateWirelessHeadphonesDto): Promise<WirelessHeadphones> {
        return this.wirelessHeadphonesService.create(createWirelessHeadphonesDto);
    }
}

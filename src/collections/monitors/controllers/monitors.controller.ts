import {Body, Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
import { CreateMonitorDto } from '../dto/create-monitor.dto';
import { MonitorsService } from '../services/monitors.service';
import { Monitor } from '../interfaces/monitor.interface';

@Controller('monitors')
export class MonitorsController {
    constructor(private readonly monitorsService: MonitorsService) {}

    @Get()
    async findAll(): Promise<Monitor[]> {
        return this.monitorsService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Monitor> {
        return this.monitorsService.findOne(id);
    }
    @Post()
    create(@Body() createMonitorDto: CreateMonitorDto): Promise<Monitor> {
        return this.monitorsService.create(createMonitorDto);
    }
}

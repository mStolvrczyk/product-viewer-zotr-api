import { CreateMonitorDto } from '../dto/create-monitor.dto';
import { MonitorsService } from '../services/monitors.service';
import { Monitor } from '../interfaces/monitor.interface';
export declare class MonitorsController {
    private readonly monitorsService;
    constructor(monitorsService: MonitorsService);
    findAll(): Promise<Monitor[]>;
    findOne(id: any): Promise<Monitor>;
    create(createMonitorDto: CreateMonitorDto): Promise<Monitor>;
}

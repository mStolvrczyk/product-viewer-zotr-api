import { CreateDroneDto } from './dto/create-drone.dto';
import { DronesService } from './drones.service';
import { Drone } from './interfaces/drone.interface';
export declare class DronesController {
    private readonly dronesService;
    constructor(dronesService: DronesService);
    findAll(): Promise<Drone[]>;
    findOne(id: any): Promise<Drone>;
    create(createDroneDto: CreateDroneDto): Promise<Drone>;
}

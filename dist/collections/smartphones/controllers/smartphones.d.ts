import { CreateSmartphoneDto } from '../dto/create-smartphone.dto';
import { SmartphonesService } from '../services/smartphones.service';
import { Smartphone } from '../interfaces/smartphone.interface';
export declare class SmartphonesController {
    private readonly smartphonesService;
    constructor(smartphonesService: SmartphonesService);
    findAll(): Promise<Smartphone[]>;
    findOne(id: any): Promise<Smartphone>;
    create(createSmartphoneDto: CreateSmartphoneDto): Promise<Smartphone>;
}

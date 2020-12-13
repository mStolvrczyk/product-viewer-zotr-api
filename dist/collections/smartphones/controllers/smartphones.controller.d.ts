import { CreateSmartphoneDto } from '../dto/create-smartphone.dto';
import { SmartphonesService } from '../services/smartphones.service';
import { Smartphone } from '../interfaces/smartphone.interface';
import { Laptop } from "../../laptops/interfaces/laptop.interface";
export declare class SmartphonesController {
    private readonly smartphonesService;
    constructor(smartphonesService: SmartphonesService);
    findAll(): Promise<Smartphone[]>;
    count(): Promise<Laptop>;
    findOne(id: any): Promise<Smartphone>;
    create(createSmartphoneDto: CreateSmartphoneDto): Promise<Smartphone>;
}

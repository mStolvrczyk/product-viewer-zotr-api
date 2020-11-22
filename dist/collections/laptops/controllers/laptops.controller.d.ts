import { CreateLaptopDto } from '../dto/create-laptop.dto';
import { LaptopsService } from '../services/laptops.service';
import { Laptop } from '../interfaces/laptop.interface';
export declare class LaptopsController {
    private readonly laptopsService;
    constructor(laptopsService: LaptopsService);
    findAll(): Promise<Laptop[]>;
    count(): Promise<Laptop>;
    findLaptopType(type: any): Promise<Laptop>;
    create(createLaptopDto: CreateLaptopDto): Promise<Laptop>;
}

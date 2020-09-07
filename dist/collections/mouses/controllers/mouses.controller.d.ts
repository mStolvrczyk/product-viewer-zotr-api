import { CreateMouseDto } from '../dto/create-mouse.dto';
import { MousesService } from '../services/mouses.service';
import { Mouse } from '../interfaces/mouse.interface';
export declare class MousesController {
    private readonly mousesService;
    constructor(mousesService: MousesService);
    findAll(): Promise<Mouse[]>;
    findMouseType(gamingMouse: any): Promise<Mouse>;
    create(createMouseDto: CreateMouseDto): Promise<Mouse>;
}

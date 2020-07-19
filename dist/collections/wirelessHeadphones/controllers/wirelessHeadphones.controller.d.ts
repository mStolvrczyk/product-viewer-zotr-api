import { CreateWirelessHeadphonesDto } from '../dto/create-wirelessHeadphones.dto';
import { WirelessHeadphonesService } from '../services/wirelessHeadphones.service';
import { WirelessHeadphones } from '../interfaces/wirelessHeadphones.interface';
export declare class WirelessHeadphonesController {
    private readonly wirelessHeadphonesService;
    constructor(wirelessHeadphonesService: WirelessHeadphonesService);
    findAll(): Promise<WirelessHeadphones[]>;
    findOne(id: any): Promise<WirelessHeadphones>;
    create(createWirelessHeadphonesDto: CreateWirelessHeadphonesDto): Promise<WirelessHeadphones>;
}

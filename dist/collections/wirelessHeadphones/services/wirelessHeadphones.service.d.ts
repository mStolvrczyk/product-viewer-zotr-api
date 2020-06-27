import { WirelessHeadphones } from '../interfaces/wirelessHeadphones.interface';
import { Model } from 'mongoose';
export declare class WirelessHeadphonesService {
    private readonly wirelessHeadphonesModel;
    constructor(wirelessHeadphonesModel: Model<WirelessHeadphones>);
    findAll(): Promise<WirelessHeadphones[]>;
    findOne(id: string): Promise<WirelessHeadphones>;
    create(wirelessHeadphones: WirelessHeadphones): Promise<WirelessHeadphones>;
}

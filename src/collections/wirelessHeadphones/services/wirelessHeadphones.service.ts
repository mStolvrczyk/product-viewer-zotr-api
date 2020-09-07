import { Injectable } from '@nestjs/common';
import { WirelessHeadphones } from '../interfaces/wirelessHeadphones.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WirelessHeadphonesService {
    constructor(@InjectModel('WirelessHeadphones') private readonly wirelessHeadphonesModel: Model<WirelessHeadphones>) {}

    async findAll(): Promise<WirelessHeadphones[]> {
        return await this.wirelessHeadphonesModel.find();
    }

    async findOne(id: string): Promise<WirelessHeadphones> {
        return await this.wirelessHeadphonesModel.findOne({ _id: id });
    }

    async create(wirelessHeadphones: WirelessHeadphones): Promise<WirelessHeadphones> {
        const newWirelessHeadphones = new this.wirelessHeadphonesModel(wirelessHeadphones);
        return newWirelessHeadphones.save();
    }
}

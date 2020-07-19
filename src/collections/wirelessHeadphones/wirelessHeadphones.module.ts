import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WirelessHeadphonesController } from './controllers/wirelessHeadphones.controller';
import { WirelessHeadphonesService } from './services/wirelessHeadphones.service';
import { WirelessHeadphonesSchema } from './schemas/wirelessHeadphones.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'WirelessHeadphones', schema: WirelessHeadphonesSchema }])],
    controllers: [WirelessHeadphonesController],
    providers: [WirelessHeadphonesService],
})
export class WirelessHeadphonesModule {}

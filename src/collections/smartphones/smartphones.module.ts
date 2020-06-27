import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SmartphonesController } from './controllers/smartphones';
import { SmartphonesService } from './services/smartphones.service';
import { SmartphoneSchema } from './schemas/smartphone.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Smartphone', schema: SmartphoneSchema }])],
    controllers: [SmartphonesController],
    providers: [SmartphonesService],
})
export class SmartphonesModule {}

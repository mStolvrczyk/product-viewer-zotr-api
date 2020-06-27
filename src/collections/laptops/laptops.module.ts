import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LaptopsController } from './controllers/laptops';
import { LaptopsService } from './services/laptops.service';
import { LaptopSchema } from './schemas/laptop.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Laptop', schema: LaptopSchema }])],
    controllers: [LaptopsController],
    providers: [LaptopsService],
})
export class LaptopsModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestCrawlerModule } from 'nest-crawler';
import { ScrapeController } from './controllers/scrape.controller';
import { ScrapeService } from './services/scrape.service';
import { SmartphonesController } from './controllers/smartphones.controller';
import { SmartphonesService } from './services/smartphones.service';
import { SmartphoneSchema } from './schemas/smartphone.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Smartphone', schema: SmartphoneSchema }]), NestCrawlerModule],
    controllers: [SmartphonesController, ScrapeController],
    providers: [SmartphonesService, ScrapeService],
})
export class SmartphonesModule {}

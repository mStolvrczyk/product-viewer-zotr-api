import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestCrawlerModule } from 'nest-crawler';
import { ScrapeController } from './controllers/scrape.controller';
import { ScrapeService } from './services/scrape.service';
import { LaptopsController } from './controllers/laptops.controller';
import { LaptopsService } from './services/laptops.service';
import { LaptopSchema } from './schemas/laptop.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Laptop', schema: LaptopSchema }]), NestCrawlerModule],
    controllers: [LaptopsController, ScrapeController],
    providers: [LaptopsService, ScrapeService],
})
export class LaptopsModule {}

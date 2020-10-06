import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestCrawlerModule } from 'nest-crawler';
import { ScrapeController } from './controllers/scrape.controller';
import { ScrapeService } from './services/scrape.service';
import { GraphicsCardsController } from './controllers/graphicsCards.controller';
import { GraphicsCardsService } from './services/graphicsCards.service';
import { GraphicsCardSchema } from './schemas/graphicsCard.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'GraphicsCard', schema: GraphicsCardSchema }]), NestCrawlerModule],
    controllers: [GraphicsCardsController, ScrapeController],
    providers: [GraphicsCardsService, ScrapeService],
})
export class GraphicsCardsModule {}

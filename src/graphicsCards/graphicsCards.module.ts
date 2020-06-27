import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphicsCardsController } from './controllers/graphicsCards.controller';
import { GraphicsCardsService } from './services/graphicsCards.service';
import { GraphicsCardSchema } from './schemas/graphicsCard.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'GraphicsCard', schema: GraphicsCardSchema }])],
    controllers: [GraphicsCardsController],
    providers: [GraphicsCardsService],
})
export class GraphicsCardsModule {}

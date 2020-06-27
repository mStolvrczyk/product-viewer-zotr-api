import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DronesModule } from './models/drones/drones.module';
import { GraphicsCardsModule } from './models/graphicsCards/graphicsCards.module';
import { KeyboardsModule } from './models/keyboards/keyboards.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [DronesModule, GraphicsCardsModule, KeyboardsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

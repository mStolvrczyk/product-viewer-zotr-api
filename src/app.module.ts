import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DronesModule } from './collections/drones/drones.module';
import { GraphicsCardsModule } from './collections/graphicsCards/graphicsCards.module';
import { KeyboardsModule } from './collections/keyboards/keyboards.module';
import { LaptopsModule } from './collections/laptops/laptops.module';
import { MonitorsModule } from './collections/monitors/monitors.module';
import { MousesModule } from './collections/mouses/mouses.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [DronesModule, GraphicsCardsModule, KeyboardsModule, LaptopsModule, MonitorsModule, MousesModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

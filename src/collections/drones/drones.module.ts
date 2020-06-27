import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DronesController } from './controllers/drones.controller';
import { DronesService } from './services/drones.service';
import { DroneSchema } from './schemas/drone.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Drone', schema: DroneSchema }])],
    controllers: [DronesController],
    providers: [DronesService],
})
export class DronesModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MonitorsController } from './controllers/monitors.controller';
import { MonitorsService } from './services/monitors.service';
import { MonitorSchema } from './schemas/monitor.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Monitor', schema: MonitorSchema }])],
    controllers: [MonitorsController],
    providers: [MonitorsService],
})
export class MonitorsModule {}

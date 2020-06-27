import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MousesController } from './controllers/mouses';
import { MousesService } from './services/mouses.service';
import { MouseSchema } from './schemas/mouse.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Mouse', schema: MouseSchema }])],
    controllers: [MousesController],
    providers: [MousesService],
})
export class MousesModule {}

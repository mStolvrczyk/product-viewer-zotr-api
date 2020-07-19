import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KeyboardsController } from './controllers/keyboards.controller';
import { KeyboardsService } from './services/keyboards.service';
import { KeyboardSchema } from './schemas/keyboard.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Keyboard', schema: KeyboardSchema }])],
    controllers: [KeyboardsController],
    providers: [KeyboardsService],
})
export class KeyboardsModule {}

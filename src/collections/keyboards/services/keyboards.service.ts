import { Injectable } from '@nestjs/common';
import { Keyboard } from '../interfaces/keyboard.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class KeyboardsService {
    constructor(@InjectModel('Keyboard') private readonly keyboardModel: Model<Keyboard>) {}

    async findAll(): Promise<Keyboard[]> {
        return await this.keyboardModel.find();
    }

    async findKeyboardType(gamingKeyboard: boolean): Promise<Keyboard> {
        return await this.keyboardModel.find({ gamingKeyboard: gamingKeyboard });
    }

    async create(keyboard: Keyboard): Promise<Keyboard> {
        const newKeyboard = new this.keyboardModel(keyboard);
        return newKeyboard.save();
    }
}

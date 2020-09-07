import * as mongoose from 'mongoose'

export const KeyboardSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    numericBlock: String,
    backlight: String,
    keyboardType: String,
    interface: String,
    connection: String,
    gamingKeyboard: Boolean,
    description: String,
    price: String
});

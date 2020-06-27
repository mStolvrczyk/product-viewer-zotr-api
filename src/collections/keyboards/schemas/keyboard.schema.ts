import * as mongoose from 'mongoose'

export const KeyboardSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    numericBlock: Boolean,
    backlight: Boolean,
    keyboardType: String,
    keyboardLayout: String,
    wireless: Boolean,
    gamingKeyboard: Boolean,
    description: String,
    price: String
});

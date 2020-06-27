import * as mongoose from 'mongoose'

export const MouseSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    dpi: String,
    numberOfButtons: String,
    backlight: Boolean,
    sensorType: String,
    wireless: Boolean,
    gamingMouse: Boolean,
    description: String,
    price: String
});

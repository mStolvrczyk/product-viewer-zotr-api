import * as mongoose from 'mongoose'

export const MouseSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    dpi: String,
    numberOfButtons: String,
    interface: String,
    profile: String,
    connection: String,
    gamingMouse: Boolean,
    description: String,
    price: String
});

import * as mongoose from 'mongoose'

export const SmartphoneSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    screen: String,
    battery: String,
    ram: Number,
    memory: String,
    description: String,
    price: String
});

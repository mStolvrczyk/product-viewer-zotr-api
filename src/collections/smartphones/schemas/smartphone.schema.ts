import * as mongoose from 'mongoose'

export const SmartphoneSchema = new mongoose.Schema({
    images: Object,
    brand: String,
    model: String,
    screen: String,
    battery: String,
    ram: String,
    memory: String,
    description: String,
    price: String
});

import * as mongoose from 'mongoose'

export const GraphicsCardSchema = new mongoose.Schema({
    images: Object,
    brand: String,
    model: String,
    ram: String,
    cpuClockSpeed: String,
    ports: String,
    description: String,
    price: String
});

import * as mongoose from 'mongoose'

export const GraphicsCardSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    ram: String,
    chipset: String,
    cpuClockSpeed: String,
    ports: String,
    description: String,
    price: String
});

import * as mongoose from 'mongoose'

export const LaptopSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    ram: Number,
    cpu: String,
    gpu: String,
    drive: String,
    matrix: String,
    leasing: Boolean,
    description: String,
    price: String
});

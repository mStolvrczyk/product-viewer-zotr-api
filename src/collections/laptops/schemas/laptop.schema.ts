import * as mongoose from 'mongoose'

export const LaptopSchema = new mongoose.Schema({
    brand: String,
    model: String,
    images: Object,
    ram: String,
    cpu: String,
    gpu: String,
    drive: String,
    matrix: String,
    type: String,
    description: String,
    price: String
});

import * as mongoose from 'mongoose'

export const LaptopSchema = new mongoose.Schema({
    images: Object,
    brand: String,
    model: String,
    ram: String,
    cpu: String,
    gpu: String,
    drive: String,
    matrix: String,
    type: String,
    description: String,
    price: String
});

import * as mongoose from 'mongoose'

export const MonitorSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    resolution: String,
    displaySize: String,
    refreshRate: String,
    ports: String,
    matrixType: String,
    description: String,
    price: String
});

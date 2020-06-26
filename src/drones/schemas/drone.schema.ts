import * as mongoose from 'mongoose'

export const DroneSchema = new mongoose.Schema({
    // image: String,
    // brand: String,
    model: String,
    camera: String,
    batteryWorkTime: String,
    resolution: String,
    controller: String,
    description: String,
    price: String
});

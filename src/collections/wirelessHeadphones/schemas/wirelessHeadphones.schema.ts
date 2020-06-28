import * as mongoose from 'mongoose'

export const WirelessHeadphonesSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    batteryWorkTime: String,
    type: String,
    microphone: Boolean,
    reach: String,
    description: String,
    price: String
});

import * as mongoose from 'mongoose'

export const WirelessHeadphonesSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    batteryWorkTime: String,
    volumeRegulation: Boolean,
    microphone: Boolean,
    reach: String,
    description: String,
    price: String
});

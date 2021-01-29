import * as mongoose from 'mongoose'

export const SmartphoneSchema = new mongoose.Schema({
    images: Object,
    details: {
        brand: String,
        model: String,
        shopLink: String,
        screen: String,
        battery: String,
        ram: String,
        memory: String,
        description: String,
        price: String
    }
});

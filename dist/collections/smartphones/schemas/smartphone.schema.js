"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartphoneSchema = void 0;
const mongoose = require("mongoose");
exports.SmartphoneSchema = new mongoose.Schema({
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
//# sourceMappingURL=smartphone.schema.js.map
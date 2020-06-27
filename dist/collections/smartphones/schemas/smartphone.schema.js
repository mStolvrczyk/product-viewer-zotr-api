"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartphoneSchema = void 0;
const mongoose = require("mongoose");
exports.SmartphoneSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    screen: String,
    battery: String,
    ram: Number,
    memory: String,
    description: String,
    price: String
});
//# sourceMappingURL=smartphone.schema.js.map
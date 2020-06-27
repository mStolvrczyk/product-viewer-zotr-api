"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopSchema = void 0;
const mongoose = require("mongoose");
exports.LaptopSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    ram: Number,
    cpu: String,
    gpu: String,
    drive: String,
    matrix: String,
    wireless: Boolean,
    gamingKeyboard: Boolean,
    description: String,
    price: String
});
//# sourceMappingURL=keyboard.schema.js.map
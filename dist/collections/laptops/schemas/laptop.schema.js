"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopSchema = void 0;
const mongoose = require("mongoose");
exports.LaptopSchema = new mongoose.Schema({
    imagePath: String,
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
//# sourceMappingURL=laptop.schema.js.map
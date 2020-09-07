"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicsCardSchema = void 0;
const mongoose = require("mongoose");
exports.GraphicsCardSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    ram: String,
    chipset: String,
    cpuClockSpeed: String,
    ports: String,
    description: String,
    price: String
});
//# sourceMappingURL=graphicsCard.schema.js.map
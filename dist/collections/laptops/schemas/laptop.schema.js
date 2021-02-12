"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopSchema = void 0;
const mongoose = require("mongoose");
exports.LaptopSchema = new mongoose.Schema({
    images: Object,
    details: {
        brand: String,
        model: String,
        shopLink: String,
        ram: String,
        cpu: String,
        gpu: String,
        drive: String,
        matrix: String,
        type: String,
        description: String,
        price: String
    }
});
//# sourceMappingURL=laptop.schema.js.map
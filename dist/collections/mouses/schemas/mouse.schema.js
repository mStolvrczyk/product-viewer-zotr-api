"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseSchema = void 0;
const mongoose = require("mongoose");
exports.MouseSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    dpi: String,
    numberOfButtons: String,
    interface: String,
    profile: String,
    connection: String,
    gamingMouse: Boolean,
    description: String,
    price: String
});
//# sourceMappingURL=mouse.schema.js.map
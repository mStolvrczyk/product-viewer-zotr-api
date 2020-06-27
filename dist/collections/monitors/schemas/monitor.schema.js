"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSchema = void 0;
const mongoose = require("mongoose");
exports.MonitorSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    resolution: String,
    displaySize: String,
    refreshRate: String,
    ports: String,
    matrixType: String,
    description: String,
    price: String
});
//# sourceMappingURL=monitor.schema.js.map
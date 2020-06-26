"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DroneSchema = void 0;
const mongoose = require("mongoose");
exports.DroneSchema = new mongoose.Schema({
    model: String,
    camera: String,
    batteryWorkTime: String,
    resolution: String,
    controller: String,
    description: String,
    price: String
});
//# sourceMappingURL=drone.schema.js.map
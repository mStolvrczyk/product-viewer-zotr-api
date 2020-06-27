"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WirelessHeadphonesSchema = void 0;
const mongoose = require("mongoose");
exports.WirelessHeadphonesSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    batteryWorkTime: String,
    volumeRegulation: Boolean,
    microphone: Boolean,
    reach: String,
    description: String,
    price: String
});
//# sourceMappingURL=wirelessHeadphones.schema.js.map
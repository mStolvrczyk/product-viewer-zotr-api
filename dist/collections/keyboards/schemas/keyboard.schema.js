"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardSchema = void 0;
const mongoose = require("mongoose");
exports.KeyboardSchema = new mongoose.Schema({
    imagePath: String,
    brand: String,
    model: String,
    numericBlock: Boolean,
    backlight: Boolean,
    keyboardType: String,
    keyboardLayout: String,
    wireless: Boolean,
    gamingKeyboard: Boolean,
    description: String,
    price: String
});
//# sourceMappingURL=keyboard.schema.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WirelessHeadphonesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let WirelessHeadphonesService = class WirelessHeadphonesService {
    constructor(wirelessHeadphonesModel) {
        this.wirelessHeadphonesModel = wirelessHeadphonesModel;
    }
    async findAll() {
        return await this.wirelessHeadphonesModel.find();
    }
    async findOne(id) {
        return await this.wirelessHeadphonesModel.findOne({ _id: id });
    }
    async create(wirelessHeadphones) {
        const newWirelessHeadphones = new this.wirelessHeadphonesModel(wirelessHeadphones);
        return newWirelessHeadphones.save();
    }
};
WirelessHeadphonesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('WirelessHeadphones')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], WirelessHeadphonesService);
exports.WirelessHeadphonesService = WirelessHeadphonesService;
//# sourceMappingURL=wirelessHeadphones.service.js.map
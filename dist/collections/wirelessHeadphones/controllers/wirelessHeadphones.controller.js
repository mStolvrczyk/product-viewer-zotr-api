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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WirelessHeadphonesController = void 0;
const common_1 = require("@nestjs/common");
const create_wirelessHeadphones_dto_1 = require("../dto/create-wirelessHeadphones.dto");
const wirelessHeadphones_service_1 = require("../services/wirelessHeadphones.service");
let WirelessHeadphonesController = class WirelessHeadphonesController {
    constructor(wirelessHeadphonesService) {
        this.wirelessHeadphonesService = wirelessHeadphonesService;
    }
    async findAll() {
        return this.wirelessHeadphonesService.findAll();
    }
    async findOne(id) {
        return this.wirelessHeadphonesService.findOne(id);
    }
    create(createWirelessHeadphonesDto) {
        return this.wirelessHeadphonesService.create(createWirelessHeadphonesDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WirelessHeadphonesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WirelessHeadphonesController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wirelessHeadphones_dto_1.CreateWirelessHeadphonesDto]),
    __metadata("design:returntype", Promise)
], WirelessHeadphonesController.prototype, "create", null);
WirelessHeadphonesController = __decorate([
    common_1.Controller('wirelessHeadphones'),
    __metadata("design:paramtypes", [wirelessHeadphones_service_1.WirelessHeadphonesService])
], WirelessHeadphonesController);
exports.WirelessHeadphonesController = WirelessHeadphonesController;
//# sourceMappingURL=wirelessHeadphones.controller.js.map
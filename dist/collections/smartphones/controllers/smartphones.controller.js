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
exports.SmartphonesController = void 0;
const common_1 = require("@nestjs/common");
const create_smartphone_dto_1 = require("../dto/create-smartphone.dto");
const smartphones_service_1 = require("../services/smartphones.service");
let SmartphonesController = class SmartphonesController {
    constructor(smartphonesService) {
        this.smartphonesService = smartphonesService;
    }
    async findAll() {
        return this.smartphonesService.findAll();
    }
    async count() {
        return this.smartphonesService.count();
    }
    async findOne(id) {
        return this.smartphonesService.findOne(id);
    }
    create(createSmartphoneDto) {
        return this.smartphonesService.create(createSmartphoneDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SmartphonesController.prototype, "findAll", null);
__decorate([
    common_1.Get('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SmartphonesController.prototype, "count", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SmartphonesController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_smartphone_dto_1.CreateSmartphoneDto]),
    __metadata("design:returntype", Promise)
], SmartphonesController.prototype, "create", null);
SmartphonesController = __decorate([
    common_1.Controller('smartphones'),
    __metadata("design:paramtypes", [smartphones_service_1.SmartphonesService])
], SmartphonesController);
exports.SmartphonesController = SmartphonesController;
//# sourceMappingURL=smartphones.controller.js.map
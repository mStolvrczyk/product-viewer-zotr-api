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
exports.LaptopsController = void 0;
const common_1 = require("@nestjs/common");
const create_laptop_dto_1 = require("../dto/create-laptop.dto");
const laptops_service_1 = require("../services/laptops.service");
let LaptopsController = class LaptopsController {
    constructor(laptopsService) {
        this.laptopsService = laptopsService;
    }
    async findAll() {
        return this.laptopsService.findAll();
    }
    async count() {
        return this.laptopsService.count();
    }
    async findLaptopType(type) {
        return this.laptopsService.findLaptopType(type);
    }
    create(createLaptopDto) {
        return this.laptopsService.create(createLaptopDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LaptopsController.prototype, "findAll", null);
__decorate([
    common_1.Get('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LaptopsController.prototype, "count", null);
__decorate([
    common_1.Get(':type'),
    __param(0, common_1.Param('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LaptopsController.prototype, "findLaptopType", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_laptop_dto_1.CreateLaptopDto]),
    __metadata("design:returntype", Promise)
], LaptopsController.prototype, "create", null);
LaptopsController = __decorate([
    common_1.Controller('laptops'),
    __metadata("design:paramtypes", [laptops_service_1.LaptopsService])
], LaptopsController);
exports.LaptopsController = LaptopsController;
//# sourceMappingURL=laptops.controller.js.map
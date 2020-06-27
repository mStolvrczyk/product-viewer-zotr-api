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
exports.DronesController = void 0;
const common_1 = require("@nestjs/common");
const create_drone_dto_1 = require("../dto/create-drone.dto");
const drones_service_1 = require("../services/drones.service");
let DronesController = class DronesController {
    constructor(dronesService) {
        this.dronesService = dronesService;
    }
    async findAll() {
        return this.dronesService.findAll();
    }
    async findOne(id) {
        return this.dronesService.findOne(id);
    }
    create(createDroneDto) {
        return this.dronesService.create(createDroneDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DronesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DronesController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_drone_dto_1.CreateDroneDto]),
    __metadata("design:returntype", Promise)
], DronesController.prototype, "create", null);
DronesController = __decorate([
    common_1.Controller('drones'),
    __metadata("design:paramtypes", [drones_service_1.DronesService])
], DronesController);
exports.DronesController = DronesController;
//# sourceMappingURL=drones.controller.js.map
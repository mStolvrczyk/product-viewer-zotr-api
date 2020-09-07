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
exports.MonitorsController = void 0;
const common_1 = require("@nestjs/common");
const create_monitor_dto_1 = require("../dto/create-monitor.dto");
const monitors_service_1 = require("../services/monitors.service");
let MonitorsController = class MonitorsController {
    constructor(monitorsService) {
        this.monitorsService = monitorsService;
    }
    async findAll() {
        return this.monitorsService.findAll();
    }
    async findOne(id) {
        return this.monitorsService.findOne(id);
    }
    create(createMonitorDto) {
        return this.monitorsService.create(createMonitorDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MonitorsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MonitorsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_monitor_dto_1.CreateMonitorDto]),
    __metadata("design:returntype", Promise)
], MonitorsController.prototype, "create", null);
MonitorsController = __decorate([
    common_1.Controller('monitors'),
    __metadata("design:paramtypes", [monitors_service_1.MonitorsService])
], MonitorsController);
exports.MonitorsController = MonitorsController;
//# sourceMappingURL=monitors.js.map
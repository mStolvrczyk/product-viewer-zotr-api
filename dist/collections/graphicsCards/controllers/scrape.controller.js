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
exports.ScrapeController = void 0;
const common_1 = require("@nestjs/common");
const scrape_service_1 = require("../services/scrape.service");
let ScrapeController = class ScrapeController {
    constructor(scrapeService) {
        this.scrapeService = scrapeService;
    }
    async getGraphicsCard(target) {
        return this.scrapeService.scrape(target);
    }
};
__decorate([
    common_1.Get(':target'),
    __param(0, common_1.Param('target')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScrapeController.prototype, "getGraphicsCard", null);
ScrapeController = __decorate([
    common_1.Controller('graphicsCard'),
    __metadata("design:paramtypes", [scrape_service_1.ScrapeService])
], ScrapeController);
exports.ScrapeController = ScrapeController;
//# sourceMappingURL=scrape.controller.js.map
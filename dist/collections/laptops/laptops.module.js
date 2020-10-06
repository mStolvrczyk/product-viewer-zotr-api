"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const nest_crawler_1 = require("nest-crawler");
const scrape_controller_1 = require("./controllers/scrape.controller");
const scrape_service_1 = require("./services/scrape.service");
const laptops_controller_1 = require("./controllers/laptops.controller");
const laptops_service_1 = require("./services/laptops.service");
const laptop_schema_1 = require("./schemas/laptop.schema");
let LaptopsModule = class LaptopsModule {
};
LaptopsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Laptop', schema: laptop_schema_1.LaptopSchema }]), nest_crawler_1.NestCrawlerModule],
        controllers: [laptops_controller_1.LaptopsController, scrape_controller_1.ScrapeController],
        providers: [laptops_service_1.LaptopsService, scrape_service_1.ScrapeService],
    })
], LaptopsModule);
exports.LaptopsModule = LaptopsModule;
//# sourceMappingURL=laptops.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerModule = void 0;
const common_1 = require("@nestjs/common");
const nest_crawler_1 = require("nest-crawler");
const crawler_controller_1 = require("./crawler.controller");
const crawler_service_1 = require("./crawler.service");
let CrawlerModule = class CrawlerModule {
};
CrawlerModule = __decorate([
    common_1.Module({
        imports: [
            nest_crawler_1.NestCrawlerModule,
        ],
        controllers: [crawler_controller_1.CrawlerController],
        providers: [crawler_service_1.CrawlerService],
    })
], CrawlerModule);
exports.CrawlerModule = CrawlerModule;
//# sourceMappingURL=crawler.module.js.map
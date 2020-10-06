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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerService = void 0;
const common_1 = require("@nestjs/common");
const nest_crawler_1 = require("nest-crawler");
let CrawlerService = class CrawlerService {
    constructor(crawler) {
        this.crawler = crawler;
    }
    async scrape() {
        const data = await this.crawler.fetch({
            target: 'http://example.com',
            fetch: {
                title: 'h1',
                info: {
                    selector: 'p > a',
                    attr: 'href',
                },
                content: {
                    selector: '.content',
                    how: 'html',
                },
            },
        });
        console.log(data);
    }
    async crawl() {
        const pages = await this.crawler.fetch({
            target: {
                url: 'https://news.ycombinator.com',
                iterator: {
                    selector: 'span.age > a',
                    convert: (x) => `https://news.ycombinator.com/${x}`,
                },
            },
            fetch: (data, index, url) => ({
                title: '.title > a',
            }),
        });
        console.log(pages);
    }
};
CrawlerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nest_crawler_1.NestCrawlerService])
], CrawlerService);
exports.CrawlerService = CrawlerService;
//# sourceMappingURL=crawler.service.js.map
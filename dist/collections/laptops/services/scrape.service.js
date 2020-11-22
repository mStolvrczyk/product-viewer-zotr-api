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
exports.ScrapeService = void 0;
const common_1 = require("@nestjs/common");
const nest_crawler_1 = require("nest-crawler");
let ScrapeService = class ScrapeService {
    constructor(scraper) {
        this.scraper = scraper;
    }
    async scrape(target) {
        const details = await this.scraper.fetch({
            waitFor: 1,
            target: `https://www.x-kom.pl/p/${target}`,
            fetch: {
                brand: {
                    selector: 'div.kcleDT > div.kJMAqu > div.cFVEqu span.VFZxh > a'
                },
                model: {
                    selector: 'div.fXjZNH > h1'
                },
                ram: {
                    selector: 'ul.sc-1re71we-11 > li:nth-of-type(2) > span.dKxbux'
                },
                cpu: {
                    selector: 'ul.sc-1re71we-11 > li:nth-of-type(1) > span.dKxbux'
                },
                gpu: {
                    selector: 'ul.sc-1re71we-11 > li:nth-of-type(3) > span.dKxbux'
                },
                drive: {
                    selector: 'div.sc-13p5mv-2 > div:nth-of-type(5) > div:nth-of-type(2)'
                },
                matrix: {
                    selector: 'ul.sc-1re71we-11 > li:last-of-type > span.dKxbux'
                },
                description: {
                    selector: 'div.content > div:nth-of-type(1) > div.col-md-12 > div.text-center > div.col-md-12 > div.fresh-content > div.col-md-10 > p:nth-of-type(1)'
                },
                price: {
                    selector: 'div.fkieai-0 > div.u7xnnm-0 > div.u7xnnm-1 > div.u7xnnm-4'
                }
            }
        });
        const images = await this.scraper.fetch({
            waitFor: 1,
            target: `https://www.x-kom.pl/p/${target}/#modal:galeria`,
            fetch: {
                imageOne: {
                    selector: 'div.sc-10crcwp-1 > div.sc-10crcwp-2 > div.sc-1ys1y5k-1 > div.sc-1ys1y5k-5 > div.sc-1ys1y5k-4 > div:first-of-type > div:nth-of-type(1) > div:first-of-type > div:first-of-type > span.sc-1tblmgq-0 > img',
                    attr: 'src'
                },
                imageTwo: {
                    selector: 'div.sc-10crcwp-1 > div.sc-10crcwp-2 > div.sc-1ys1y5k-1 > div.sc-1ys1y5k-5 > div.sc-1ys1y5k-4 > div:first-of-type > div:nth-of-type(2) > div:first-of-type > div:first-of-type > span.sc-1tblmgq-0 > img',
                    attr: 'src'
                },
                imageThree: {
                    selector: 'div.sc-10crcwp-1 > div.sc-10crcwp-2 > div.sc-1ys1y5k-1 > div.sc-1ys1y5k-5 > div.sc-1ys1y5k-4 > div:first-of-type > div:nth-of-type(3) > div:first-of-type > div:first-of-type > span.sc-1tblmgq-0 > img',
                    attr: 'src'
                }
            }
        });
        return { details, images };
    }
};
ScrapeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nest_crawler_1.NestCrawlerService])
], ScrapeService);
exports.ScrapeService = ScrapeService;
//# sourceMappingURL=scrape.service.js.map
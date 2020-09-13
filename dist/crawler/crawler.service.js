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
                dupa: 'span.age > a',
            }),
        });
        return pages;
    }
    async scrape() {
        const details = await this.crawler.fetch({
            waitFor: 3 * 1000,
            target: 'https://www.x-kom.pl/p/517898-karta-graficzna-nvidia-msi-geforce-rtx-2070-super-gaming-x-8gb-gddr6.html?gclid=Cj0KCQjwwOz6BRCgARIsAKEG4FVf2zs35SZOE09seoEC7FHVJzzEiWuh_dDmxfJDzBCjJTg4IR40skgaAhHAEALw_wcB',
            fetch: {
                brand: {
                    selector: 'span.bBGNsf > a'
                },
                model: {
                    selector: 'div.fXjZNH > h1'
                },
                ram: {
                    selector: 'div.sc-13p5mv-2 > div:nth-of-type(3) > div:nth-of-type(2) '
                },
                cpuClockSpeed: {
                    selector: 'div.sc-13p5mv-2 > div:nth-of-type(7) > div:nth-of-type(2) '
                },
                ports: {
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
        const images = await this.crawler.fetch({
            waitFor: 3 * 1000,
            target: [
                'https://www.x-kom.pl/p/513336-karta-graficzna-amd-asus-radeon-rx-5700-xt-tuf-oc-8gb-gddr6.html#modal:galeria',
                'https://www.x-kom.pl/p/513336-karta-graficzna-amd-asus-radeon-rx-5700-xt-tuf-oc-8gb-gddr6.html#modal:galeria',
                'https://www.x-kom.pl/p/513336-karta-graficzna-amd-asus-radeon-rx-5700-xt-tuf-oc-8gb-gddr6.html#modal:galeria',
                'https://www.x-kom.pl/p/513336-karta-graficzna-amd-asus-radeon-rx-5700-xt-tuf-oc-8gb-gddr6.html#modal:galeria',
            ],
            fetch: (data, index, url) => ({
                imagePath: {
                    selector: `div.sc-10crcwp-1 > div.sc-10crcwp-2 > div.sc-1ys1y5k-1 > div.sc-1ys1y5k-4 > div.sc-1ys1y5k-3 > div:first-of-type > div:nth-of-type(${index + 1}) > div:first-of-type > span.sc-1tblmgq-0 > img`,
                    attr: 'src'
                }
            }),
        });
        return { details, images };
    }
};
CrawlerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nest_crawler_1.NestCrawlerService])
], CrawlerService);
exports.CrawlerService = CrawlerService;
//# sourceMappingURL=crawler.service.js.map
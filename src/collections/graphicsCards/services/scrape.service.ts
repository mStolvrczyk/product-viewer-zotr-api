import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';

@Injectable()
export class ScrapeService {
    constructor(
        private readonly scraper: NestCrawlerService,
    ) {}
    public async scrape(target: string): Promise<unknown> {
        interface GraphicsCard {
            brand: string;
            model: string;
            ram: string;
            cpuClockSpeed: string;
            ports: string;
            description: string;
            price: string;
        }
        const details: GraphicsCard = await this.scraper.fetch({
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
                cpuClockSpeed: {
                    selector: 'div.sc-13p5mv-2 > div:nth-of-type(7) > div:nth-of-type(2) '
                },
                ports: {
                    selector: 'ul.sc-1re71we-11 > li:last-of-type > span.dKxbux'
                },
                description: {
                    selector: 'div.content > div:nth-of-type(1) > div.col-md-12 > div.text-center > div.col-md-12 > div.fresh-content > div.col-md-10 > p:nth-of-type(1)'
                    // selector: 'div.content > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)'
                },
                price: {
                    selector: 'div.fkieai-0 > div.u7xnnm-0 > div.u7xnnm-1 > div.u7xnnm-4'
                }
            }
        });
        const images: GraphicsCard = await this.scraper.fetch({
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
        // const images: GraphicsCard = await this.scraper.fetch({
        //     waitFor: 3 * 1000,
        //     target: [
        //         `https://www.x-kom.pl/p/${target}#modal:galeria`,
        //         `https://www.x-kom.pl/p/${target}#modal:galeria`,
        //         `https://www.x-kom.pl/p/${target}#modal:galeria`,
        //     ],
        //     fetch: (data: any, index: number, url: string) => ({
        //         imagePath: {
        //             selector: `div.sc-10crcwp-1 > div.sc-10crcwp-2 > div.sc-1ys1y5k-1 > div.sc-1ys1y5k-5 > div.sc-1ys1y5k-4 > div:first-of-type > div:nth-of-type(${index+1}) > div:first-of-type > div:first-of-type > span.sc-1tblmgq-0 > img`,
        //             attr: 'src'
        //         }
        //     }),
        // });
        return {details, images};
    }
}

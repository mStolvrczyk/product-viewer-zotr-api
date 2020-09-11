import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';

@Injectable()
export class CrawlerService {
    constructor(
        private readonly crawler: NestCrawlerService,
    ) {}

    // scraping the specific page
    public async scrape(): Promise<unknown> {
        interface ExampleCom {
            brand: string;
            model: string;
            ram: string;
            chipset: string;
            cpuClockSpeed: string;
            ports: [];
            description: string;
            price: string;
        }
        const data: ExampleCom[] = await this.crawler.fetch({
            waitFor: 3 * 100,
            // target: 'https://news.ycombinator.com',
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
                // chipset: {
                //     selector: 'div.sc-13p5mv-2 > div:nth-of-type(3) > div:nth-of-type(2) '
                // },
            },
        });
        return data;
        // {
        //   title: 'Example Domain',
        //   info: 'http://www.iana.org/domains/example',
        //   content: '<div><h1>Example Heading</h1><p>Example Paragraph</p></div>'
        // }
        // return 'kutas'
    }
    public async crawl(): Promise<unknown> {
        interface HackerNewsPage {
            title: string;
        }

        const pages: HackerNewsPage[] = await this.crawler.fetch({
            target: {
                url: 'https://news.ycombinator.com',
                iterator: {
                    selector: 'span.age > a',
                    convert: (x: string) => `https://news.ycombinator.com/${x}`,
                },
            },
            fetch: (data: any, index: number, url: string) => ({
                title: '.title > a',
            }),
        });

        return pages;
        // [
        //   { title: 'Post Title 1' },
        //   { title: 'Post Title 2' },
        //   ...
        //   ...
        //   { title: 'Post Title 30' }
        // ]
    }
}

    // crawling multi pages is also supported
    // public async crawl(): Promise<void> {
    //     interface HackerNewsPage {
    //         title: string;
    //     }
    //
    //     const pages: HackerNewsPage[] = await this.crawler.fetch({
    //         target: {
    //             url: 'https://news.ycombinator.com',
    //             iterator: {
    //                 selector: 'span.age > a',
    //                 convert: (x: string) => `https://news.ycombinator.com/${x}`,
    //             },
    //         },
    //         fetch: (data: any, index: number, url: string) => ({
    //             title: '.title > a',
    //         }),
    //     });
    //
    //     console.log(pages);
    //     // [
    //     //   { title: 'Post Title 1' },
    //     //   { title: 'Post Title 2' },
    //     //   ...
    //     //   ...
    //     //   { title: 'Post Title 30' }
    //     // ]
    // }
// }

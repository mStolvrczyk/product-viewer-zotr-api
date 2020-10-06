import { NestCrawlerService } from 'nest-crawler';
export declare class ScrapeService {
    private readonly scraper;
    constructor(scraper: NestCrawlerService);
    scrape(target: string): Promise<unknown>;
}

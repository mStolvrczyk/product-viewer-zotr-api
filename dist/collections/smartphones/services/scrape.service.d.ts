import { NestCrawlerService } from 'nest-crawler';
export declare class ScrapeService {
    private readonly crawler;
    constructor(crawler: NestCrawlerService);
    scrape(target: string): Promise<unknown>;
}

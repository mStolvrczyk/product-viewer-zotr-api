import { NestCrawlerService } from 'nest-crawler';
export declare class ScraperService {
    private readonly crawler;
    constructor(crawler: NestCrawlerService);
    crawl(): Promise<unknown>;
    scrape(target: string): Promise<unknown>;
}

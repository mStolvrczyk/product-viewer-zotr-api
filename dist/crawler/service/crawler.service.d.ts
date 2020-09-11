import { NestCrawlerService } from 'nest-crawler';
export declare class CrawlerService {
    private readonly crawler;
    constructor(crawler: NestCrawlerService);
    scrape(): Promise<void>;
}

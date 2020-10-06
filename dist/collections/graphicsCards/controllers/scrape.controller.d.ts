import { ScrapeService } from '../services/scrape.service';
export declare class ScrapeController {
    private readonly scrapeService;
    constructor(scrapeService: ScrapeService);
    getGraphicsCard(target: any): Promise<unknown>;
}

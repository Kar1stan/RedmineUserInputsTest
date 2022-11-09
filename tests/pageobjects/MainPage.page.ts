import { expect, Locator, Page } from '@playwright/test'
import 'dotenv/config'
const redmine_url=process.env.REDMINEURL;

export class MainPage{
    readonly page: Page;
    static RandomFunction:any;
    
    constructor(page: Page) {
        this.page = page;    
    }

    async goto(){
        await this.page.goto(redmine_url!);
    }

}
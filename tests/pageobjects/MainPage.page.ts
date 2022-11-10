import { expect, Locator, Page } from '@playwright/test'
import 'dotenv/config'


export class MainPage{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;    
    }

    async goto(){
        await this.page.goto(process.env.REDMINE_URL!);
    }

}

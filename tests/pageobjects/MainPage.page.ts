import { expect, Locator, Page } from '@playwright/test'
import 'dotenv/config'


export class MainPage{
    constructor(readonly page:Page){}

    async goto(){
        await this.page.goto(process.env.REDMINE_URL!);
    }

}

import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";
import User from "../models/UserSauce";
import UserSauce from "../models/UserSauce";

type CartItem = { name: string; price: number };

export default class OrderConfirmationPage{
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    constructor(page:Page,requst?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=requst;
        this.context=context
    }
    
   async fillDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
    await this.page.click('[data-test="continue"]');
  }

   async verifySuccessMessage() {
    const confirmationMessage = this.page.locator('.complete-header');
    await expect(confirmationMessage).toHaveText('Thank you for your order!');
  }
    

     
    

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

}
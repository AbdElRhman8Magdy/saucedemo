import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";
import User from "../models/UserSauce";
import UserSauce from "../models/UserSauce";

type CartItem = { name: string; price: number };

export default class CartPage{
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

  async verifyTotal(items: CartItem[]) {
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const itemTotalText = await this.page.locator('.summary_subtotal_label').innerText();
    const actualSubtotal = parseFloat(itemTotalText.replace('Item total: $', ''));
    expect(actualSubtotal).toBeCloseTo(subtotal, 2);
  }

  async completeOrder() {
    await this.page.click('[data-test="finish"]');
  }


  async goToCheckout() {
    await this.page.click('[data-test="checkout"]');
  } 

   async verifySuccessMessage() {
    const confirmationMessage = this.page.locator('.complete-header');
    await expect(confirmationMessage).toHaveText('Thank you for your order!');
  }
    

     
    

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

}
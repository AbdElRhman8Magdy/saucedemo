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
    
    async verifyItems(expectedItems: CartItem[]) {
    const cartItems = this.page.locator('.cart_item');
    const count = await cartItems.count();
    expect(count).toBe(expectedItems.length);

    for (let i = 0; i < count; i++) {
      const name = await cartItems.nth(i).locator('.inventory_item_name').innerText();
      const priceText = await cartItems.nth(i).locator('.inventory_item_price').innerText();
      const price = parseFloat(priceText.replace('$', ''));
      expect(name).toBe(expectedItems[i].name);
      expect(price).toBeCloseTo(expectedItems[i].price, 2);
    }
  }

  async goToCheckout() {
    await this.page.click('[data-test="checkout"]');
  } 
    

     
    

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

}
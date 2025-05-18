import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";
import User from "../models/UserSauce";
import UserSauce from "../models/UserSauce";

export default class InventoryPage{
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    constructor(page:Page,requst?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=requst;
        this.context=context
    }
   
     private get SortLowPrice(){
        return this.page.locator('[data-test="product-sort-container"]')
    } 
    

     
    async SortLoPrice(user:User){
        await this.SortLowPrice.selectOption(user.getLowPrice());
       
       }


         async sortBy(option: 'lohi' | 'hilo' | 'az' | 'za') {
    await this.page.selectOption('.product_sort_container', option);
  }

  async addCheapestItems(count: number) {
    const items = this.page.locator('.inventory_item');
    const itemCount = await items.count();
    const selectedItems: { name: string; price: number }[] = [];

    for (let i = 0; i < Math.min(count, itemCount); i++) {
      const name = await items.nth(i).locator('.inventory_item_name').innerText();
      const priceText = await items.nth(i).locator('.inventory_item_price').innerText();
      const price = parseFloat(priceText.replace('$', ''));
      await items.nth(i).locator('button').click();
      selectedItems.push({ name, price });
    //   UserSauce.setSelectItemName1(name);
    //   UserSauce.setSelectItemName1temPrice1(priceText);
      console.log(`Added item: ${name} with price: ${priceText}`);
    }

    return selectedItems;
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

}
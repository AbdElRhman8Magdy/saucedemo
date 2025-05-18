import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";
import User from "../models/UserSauce";

export default class LoginPage{
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    constructor(page:Page,requst?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=requst;
        this.context=context
    }
   
     private get emailInput(){
        return this.page.locator('[data-test="username"]')
    } 
    private get passwordInput(){
        return this.page.locator('[data-test="password"]')
    }
    private get SubmitBtn(){
        return this.page.locator('[data-test="login-button"]')
    }
    private get Broduct(){
        return this.page.locator('[data-test="title"]')
    }
    private get ErrorMessage(){
        return this.page.locator('[data-test="error"]')
    }


     async Load(){
        await this.page.goto('/')
       }
    async loginWithValid(user:User){
        await this.emailInput.fill(user.getEmailSauce())
        await this.passwordInput.fill(user.getPasswordSauce())
        await this.SubmitBtn.click()
        await expect(this.Broduct).toContainText('Products');
        await expect(this.page).toHaveURL(/inventory.html/);
       }

       async loginInValidPassword(user:User){
        await this.emailInput.fill(user.getEmailSauce())
        await this.passwordInput.fill(user.getPasswordSauce()+  "123")
        await this.SubmitBtn.click()
        await expect(this.ErrorMessage).toContainText(user.getInvalidLogin());
       }

       async loginInValidEmail(user:User){
        await this.emailInput.fill(user.getEmailSauce()+  "123")
        await this.passwordInput.fill(user.getPasswordSauce())
        await this.SubmitBtn.click()
        await expect(this.ErrorMessage).toContainText(user.getInvalidLogin());
       }
}
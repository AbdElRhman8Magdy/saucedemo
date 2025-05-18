import { fa, faker, th } from "@faker-js/faker";

export default class UserSauce{
   
    private emailsauc:string;
    private passwordsauc:string;
    private InvalidLogin:string;
    private LowPrice:string;
    private SelectItemName1:string;
    private SelectItemName2:string;
    private SelectItemPrice1:string;
    private SelectItemPrice2:string;
    static setSelectItemName1: any;
    static setSelectItemName1temPrice1: any;




     constructor(){
        this.emailsauc="standard_user";
        this.passwordsauc="secret_sauce";
        this.InvalidLogin="Username and password";
        this.LowPrice="lohi";
     }
    

    getEmailSauce(){
        return this.emailsauc
    }
    getPasswordSauce(){
        return this.passwordsauc
    }
    getInvalidLogin(){
        return this.InvalidLogin
    }
    getLowPrice(){
        return this.LowPrice
    }
    setSelectItemName1(SelectItemName1:string){
        this.SelectItemName1=SelectItemName1;
    }
    setSelectItemName2(SelectItemName2:string){
        this.SelectItemName2=SelectItemName2;
    }
    setSelectItemPrice1(SelectItemPrice1:string){
        this.SelectItemPrice1=SelectItemPrice1;
    }
    setSelectItemPrice2(SelectItemPrice2:string){
        this.SelectItemPrice2=SelectItemPrice2;
    }   
   
}
import { fa, faker, th } from "@faker-js/faker";

export default class UserSauce{
   
    private emailsauc:string;
    private passwordsauc:string;
    private InvalidLogin:string;
    private LowPrice:string;




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
   
}
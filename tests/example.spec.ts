import { test, expect, request } from '@playwright/test';


import LoginPage from '../Pages/LoginPage';
import UserSauce from '../models/UserSauce';
import User from '../models/User';
import User1 from '../models/UserSauce';
import InventoryPage from '../Pages/InventoryPage';


test.describe('Sauce Login', () => {
  test.beforeEach(async ({ page, request, context }) => {
    // Navigate to the page before each test
   const loginPage = new LoginPage(page,);
   await loginPage.Load();
 
    })
test('has title', async ({ page }) => {
  
    const loginPage = new LoginPage(page,); 
    await loginPage.loginWithValid(new UserSauce());

});

test('Invalid Password', async ({ page }) => {
  
    const loginPage = new LoginPage(page,); 
    await loginPage.loginInValidPassword(new UserSauce());
})

test('Invalid Email', async ({ page }) => {
  
    const loginPage = new LoginPage(page,); 
    await loginPage.loginInValidEmail(new UserSauce());
})
    })


    test.describe('Sauce Inventory', () => {
  test.beforeEach(async ({ page, request, context }) => {
    // Navigate to the page before each test
   const loginPage = new LoginPage(page,);
   await loginPage.Load();
   await loginPage.loginWithValid(new UserSauce());
 
    })
test('Inventory Page', async ({ page }) => {
  
    const inventoryPage = new InventoryPage(page,);
    await inventoryPage.SortLoPrice(new UserSauce());

    

});
    })


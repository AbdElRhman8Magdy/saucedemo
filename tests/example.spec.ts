import { test, expect, request } from '@playwright/test';


import LoginPage from '../Pages/LoginPage';
import UserSauce from '../models/UserSauce';
import User from '../models/User';
import User1 from '../models/UserSauce';
import InventoryPage from '../Pages/InventoryPage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckOutPage';
import testData from '../data/testData.json';
import OrderConfirmationPage from '../Pages/OrderConfirmationPage';


test.describe('Sauce Login', () => {
  test.beforeEach(async ({ page, request, context }) => {
    // Navigate to the page before each test
   const loginPage = new LoginPage(page,);
   await loginPage.Load();
 
    })
test(' Login', {
  tag: '@smoke',
}, async ({ page }) => {
  
    const loginPage = new LoginPage(page,); 
    await loginPage.loginWithValid(new UserSauce());

});

test(' Invalid Password', {
  tag: '@negative',
}, async ({ page }) => {
  
    const loginPage = new LoginPage(page,); 
    await loginPage.loginInValidPassword(new UserSauce());
})

test(' Invalid Email', {
  tag: '@negative',
}, async ({ page }) => {
  
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
test(' Inventory Page - add cheapest item', {
  tag: '@smoke',
}, async ({ page }) => {
  
    const inventoryPage = new InventoryPage(page,);
    await inventoryPage.SortLoPrice(new UserSauce());
    await inventoryPage.addCheapestItems(2);
    const addedItems = await inventoryPage.addCheapestItems(2);

    

});
test(' Confirm order', {
  tag: '@smoke',
}, async ({ page }) => {
  
   const cartPage = new CartPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);
    const confirmationPage = new OrderConfirmationPage(page);
    await inventoryPage.goToCart();
    const addedItems = await inventoryPage.addCheapestItems(2);

    await cartPage.verifyItems(addedItems);
    await cartPage.goToCheckout();
    await checkoutPage.fillDetails(
      testData.customerInfo.firstName,
      testData.customerInfo.lastName,
      testData.customerInfo.postalCode
    );

    

});
    })



    test.describe(' End-to-End Purchase Flow', {
  tag: '@smoke',
}, () => {
  test('Successful order placement', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const confirmationPage = new OrderConfirmationPage(page);

    await page.goto('https://www.saucedemo.com');
    await loginPage.loginWithValid( new UserSauce());
    await inventoryPage.SortLoPrice(new UserSauce());
    const addedItems = await inventoryPage.addCheapestItems(2);
    await inventoryPage.goToCart();
    await cartPage.verifyItems(addedItems);
    await cartPage.goToCheckout();
    await checkoutPage.fillDetails(
      testData.customerInfo.firstName,
      testData.customerInfo.lastName,
      testData.customerInfo.postalCode
    );
    await checkoutPage.verifyTotal(addedItems);
    await checkoutPage.completeOrder();
    await confirmationPage.verifySuccessMessage();
  });

  test(' Negative login test with invalid credentials', {
  tag: '@negative',
}, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com');
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await loginPage.verifyLoginError();
  });
});



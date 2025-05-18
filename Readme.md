# E2E Playwright Automation - Saucedemo

This project demonstrates an end-to-end test automation framework built using **Playwright with TypeScript** for [SauceDemo](https://www.saucedemo.com), focusing on a complete purchase flow.

---

## 🚀 How to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbdElRhman8Magdy/saucedemo.git
   cd saucedemo-e2e-playwright
2. **Install dependencies**:
    npm install

3. **Install Playwright browsers:**
    npx playwright install

-----------------.

 **🧪 How to Run Tests Locally**
  
1.**Run all tests with HTML report:**
    npx playwright test --reporter html
2.**Open the test report after run:**
    npx playwright show-report
3.**Run a specific test file:**
    npx playwright test tests/endToEndPurchase.spec.ts
4.**Run tests in a specific browser:**
    npx playwright test --project=chromium
5. **Tagging**
    npx playwright test --grep @smoke
    npx playwright test --grep @negative
6. **Environment configuration support**
    npx playwright test --project=staging
    npx playwright test --project=production


🏗 **Folder Structure**
.
├── pages/               # Page Object Model classes
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── OrderConfirmationPage.ts
│
├── tests/               # Test specs
│   └── endToEndPurchase.spec.ts
│
├── data/                # External test data
│   └── testData.json
│
├── screenshots/         # Screenshots captured on test failure (optional)
│
├── playwright.config.ts # Playwright global config (to be added)
└── README.md

🧰 **Tools & Libraries Used**
Playwright for browser automation

TypeScript for type safety

Jest-style Assertions

JSON for external test data abstraction

⚙ **Assumptions & Limitations**
This framework tests only happy-path and negative login flows.

Items added to cart are assumed to be sorted correctly using site’s filter.

No mocking or API-layer assertions are used—entirely UI-driven.

Framework is built for demonstration and not connected to any CI/CD yet.


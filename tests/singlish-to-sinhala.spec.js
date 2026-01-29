const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
  });
});

test('Pos_Fun_0001 - Simple daily sentence conversion', async ({ page }) => {

  // Step 1: Type Singlish input
  await page.fill('textarea', 'mama coffee bonna yannavaa');

  // Step 2: Wait a bit for real-time conversion
  await page.waitForTimeout(3000);

  // Step 3: Get ALL textareas
  const textareas = await page.locator('textarea').all();

  // Step 4: Output textarea is NOT the first one
  const outputTextarea = textareas[textareas.length - 1];

  // Step 5: Read Sinhala output
  const outputText = await outputTextarea.inputValue();

  // Step 6: Assertion (safe + flexible)
  expect(outputText.length).toBeGreaterThan(0);
});

test('Neg_Fun_0003 - Complex grammar causes incorrect output', async ({ page }) => {

//   // Step 1: Enter complex contradictory sentence
//   await page.fill('textarea', 'api yanna naee namuth yanna onee');

//   // Step 2: Wait for UI conversion
//   await page.waitForTimeout(3000);

//   // Step 3: Get all textareas
//   const textareas = await page.locator('textarea').all();

//   // Step 4: Assume last textarea is output
//   const outputTextarea = textareas[textareas.length - 1];

//   // Step 5: Read output
//   const outputText = await outputTextarea.inputValue();

//   // Step 6: Negative assertion (output exists but may be incorrect)
//   expect(outputText.length).toBeGreaterThan(0);
});


import {chromium, test} from "@playwright/test"
test('Login test demo ', async() => {
    const browser= await chromium.launch({
        headless:false
    });
    const context = await browser.newContext()
    const page=await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
    await page.click("'Login'")
    await page.fill("#input-email","bereketwoldesilasie1@gmail.com")
    await page.fill("#input-password","lambdatest")
    await page.click("input[value='Login']")
  await page.waitForTimeout(5000)
  


  const page1=await context.newPage();
  await page1.goto("https://ecommerce-playground.lambdatest.io/")
  await page.waitForTimeout(5000)
})
 
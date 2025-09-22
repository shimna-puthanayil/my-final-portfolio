import { test, expect } from "playwright/test";

test("homepage", async ({ page }) => {
  await page.goto("https://shimna-puthanayil.netlify.app/");
  await expect(page).toHaveTitle(/Portfolio/);

  //check the home page contains name of the person
  await expect(
    page.locator("//h2[normalize-space()='Shimna Puthanayil']")
  ).toBeVisible();
  const aboutLink = await page.locator("//a[normalize-space()='About']");
  await expect(aboutLink).toBeVisible();
  await aboutLink.click();
  await page.locator("class=css-1y0vg2").click;
  await page.locator("class=css-1d5gc7k").click;
  await page.locator("class=css-1d5gc7k").click;

  await page.close();
});

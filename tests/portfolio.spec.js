import { test, expect } from "playwright/test";
test("portfolio", async ({ page }) => {
  await page.goto("https://shimna-puthanayil.netlify.app/Portfolio");

  const projects = await page.$$("//div[@class='css-1spku6t']//div/h2");
  for (const project of projects) {
    const projName = await project.textContent();
    console.log(projName);
  }
});

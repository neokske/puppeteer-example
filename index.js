const puppeteer = require("puppeteer");
(async () => {
  const headless = true;
  const browser = await puppeteer.launch({ headless });
  const page = await browser.newPage();
  await page.goto("https://www.google.com", { waitUntil: "networkidle2" });
  await page.focus(".gLFyf");
  await page.keyboard.type("javascript");
  await page.keyboard.press("Enter");
  await page.waitForNavigation({ waitUntil: "networkidle2" });
  console.log("Current page:", page.url());

  if (headless) {
    await page.screenshot({ path: "example.png" });
    console.log("Take a look at example.png");
    await browser.close();
  }
})();

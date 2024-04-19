const selenium = require('selenium-webdriver');

const main = async ()=> {
    console.log('hello world!');
    const driver = await new selenium.Builder().forBrowser('chrome').build();
    await driver.get("https://www.wikipedia.org/");

    const selection = selenium.By.id("searchInput");
    const element = driver.findElement(selection);

    element.sendKeys("javascript");

    const searchFormSelection = selenium.By.id("search-form");
    const searchForm = driver.findElement(searchFormSelection);
    
    // searchForm.submit();

    const searchBtnSelection = selenium.By.css("button.pure-button-primary-progressive");
    console.log("Search Btn Selection = ", searchBtnSelection);
    const searchBtn = driver.findElement(searchBtnSelection);

    searchBtn.click();

    
}
main();

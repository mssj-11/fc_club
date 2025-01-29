const assert = require('assert');
const { expect } = require('chai');
const { Builder, Browser, By, until } = require("selenium-webdriver");

describe ("Pruebas de navegación en el sitio web", () => {
    let driver;

    before(async () => {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        await driver.get("http://127.0.0.1:5500/index.html");
    });

    after(async () => {
        await driver.quit();
    });

    it("Debe de tener un enlace a 'Inicio'", async () => {
        let inicioLink = await driver.findElement(By.linkText("Inicio"));
        await inicioLink.click();
        
        let inicioSection = await driver.findElement(By.id("inicio"));
        let isVisible = await inicioSection.isDisplayed();
        assert.ok(isVisible, "La sección 'Inicio' no es visible después de hacer clic en el enlace");
    });

    


});

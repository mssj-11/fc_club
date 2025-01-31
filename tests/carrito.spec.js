const assert = require('assert');
const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Pruebas del carrito", () => {
    let driver;

    before(async () => {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        await driver.get("http://127.0.0.1:5500/index.html");

        // Obtener los productos desde el localStorage del navegador
        const productos = await driver.executeScript(() => {
            return JSON.parse(localStorage.getItem("productosBarca")) || [];
        });

        // Verificar que los productos existen
        console.log("Productos cargados desde localStorage:", productos);
    });
/*
    after(async () => {
        await driver.quit();
    });*/

    
    it("Verificar 'Agregar al carrito' ", async () => {
        // Espera implícita para dar tiempo a que las imágenes se carguen
        await driver.manage().setTimeouts({ implicit: 5000 });
        const addToCartButton = await driver.findElement(By.className("btn-agregar"));
        console.log(addToCartButton);
        await addToCartButton.click();
    });
    

});
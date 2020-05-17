import {Given, When, Then} from "cucumber";

Then("la pagina de home es cargada", () => {
    $("div#logo").waitForDisplayed(5000); //Logo
    $("ul#user_information > span").waitForDisplayed(5000); //Elemento usuario logueado
    $("img[alt='GAP Vacations Management']").waitForDisplayed(5000); //Banner
});
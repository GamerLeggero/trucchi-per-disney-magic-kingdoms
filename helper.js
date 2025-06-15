// helper.js
// Script simulato per supporto a Disney Magic Kingdoms

console.log("Avvio DMK Helper...");

const attractions = ["Space Mountain", "Castello", "Trono di Elsa"];

function showAttractions() {
    attractions.forEach(name => {
        console.log(`Attrazione attiva: ${name}`);
    });
}

showAttractions();

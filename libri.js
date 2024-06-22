// Klasa për të përfaqësuar një liber
class Libri {
    constructor(titulli, autori, viti, kategoria, nrFaqesh, pershkrimi) {
        this.titulli = titulli;
        this.autori = autori;
        this.viti = viti;
        this.kategoria = kategoria;
        this.nrFaqesh = nrFaqesh;
        this.pershkrimiLiberit = pershkrimi;
    }

    // Metoda për të shfaqur një pershkrim të formatuar të librit
    pershkrimi() {
        return `${this.titulli} - ${this.autori}\nViti: ${this.viti}\nKategoria: ${this.kategoria}\nNr. Faqesh: ${this.nrFaqesh}\n${this.pershkrimiLiberit}`;
    }
}

// Array për të mbajtur listën e librave
let listaLibrave = [];

// Funksioni për të shtuar një liber të ri në listë
function shtoLiber(titulli, autori, viti, kategoria, nrFaqesh, pershkrimi) {
    let liberIRi = new Libri(titulli, autori, viti, kategoria, nrFaqesh, pershkrimi);
    listaLibrave.push(liberIRi);
    console.log(`Liberi "${titulli}" është shtuar me sukses.`);
}

// Testimi i funksionit për të shtuar një liber të ri
shtoLiber("Titulli i Librit1", "Autori Librit1", 2012, "Kategoria Librit1", 300, "Pershkrimi i Librit1...");
shtoLiber("Titulli i Librit2", "Autori Librit2", 2013, "Kategoria Librit2", 400, "Pershkrimi i Librit2...");
shtoLiber("Titulli i Librit3", "Autori Librit3", 2014, "Kategoria Librit3", 500, "Pershkrimi i Librit3...");

// Afishimi i inventarit të librave
console.log("Inventari i Librave:", listaLibrave);
for (let i = 0; i < listaLibrave.length; i++) {
    console.log(listaLibrave[i].pershkrimi());
}

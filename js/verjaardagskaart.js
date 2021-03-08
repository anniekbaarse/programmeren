// wat altijd bovenaan javascript bestand staat in opmerkingen (3 regels)

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


// Ondertitel wordt verwerkt in verschillende variabelen
var genietKnop = document.getElementById('geniet');
var verwenKnop = document.getElementById('verwen');
var levenKnop = document.getElementById('leven');
var gezondKnop = document.getElementById('gezond');
var ondertitelKaartTekst = document.getElementById('kaartOndertitel');

// Het aanklikken van de afbeeldingen
var hoofdAfbeelding = document.querySelector('.afbeeldingGroot');
// De kleine afbeeldingen in een array zetten
var arrayAfbeeldingen = document.querySelectorAll('.afbeeldingKlein');
var lengteAfbeeldingen = arrayAfbeeldingen.length;
//console.log(lengteAfbeeldingen);



// Alle mogelijke kleuren worden opgeslagen in een array
// Input[name=kaartkleur] betekend dat een lijst van inputs wordt teruggestuurd met een naam attribuut waarvan de waarde kaartkleur is
var arrayKleur = document.querySelectorAll('input[name=kaartkleur]');
//console.log(arrayKleur);
var lengteKleur = arrayKleur.length;
//console.log(lengteKleur);





// Door een for loop wordt bij elke radiobutton de functie 'kaartkleur' uitgevoerd als er op geklikt wordt
// Zolang variabele i kleiner is dan lengte array kleur, wordt de loop uitgevoerd
// i++ zorgt ervoor dat er 1 bij de variabele wordt opgeteld, dit gebeurd zolang de i kleiner is dan de lengte van de array
// Wat er uitgevoerd wordt, is dat de eerste kaarkleur wordt gepakt (AddEventListener), wordt er bij een click event de functie kaartkleur uitgevoerd
for (var i = 0; i < lengteKleur; i++) {
    arrayKleur[i].addEventListener('click', kaartkleur);
}

// Door een for loop wordt bij elke afbeelding de functie 'klikAfbeelding' uitgevoerd als er op geklikt wordt
// Zolang variabele a kleiner is dan lengte array afbeeldingen, wordt de loop uitgevoerd
// a++ zorgt ervoor dat er 1 bij de variabele wordt opgeteld, dit gebeurd zolang de a kleiner is dan de lengte van de array
// Wat er uitgevoerd wordt, is dat de eerste afbeelding wordt gepakt (AddEventListener), wordt er bij een click event de functie klikAfbeelding uitgevoerd
for (var a = 0; a < lengteAfbeeldingen; a++) {
    arrayAfbeeldingen [a].addEventListener('click', klikAfbeelding);
}





// Het inputveld van de naam van de jarige wordt verwerkt
// Hulp gehad van Rianne Hoenderdos (3e jaars CMD studente)
function naamJarige() {
    // De ingevoerde tekst uit het tekstveld halen en opslaan in variabele 'naam'
    // Met .value wordt de waarde van het kenmerk value van een tekstveld ingesteld of geretourneerd
    var naam = document.querySelector('#naam').value;
    if (naam === '') {
        // Met textContent kan je de tekst in een element verzamelen of aanpassen
        document.querySelector('#kaartTitel').textContent = 'Gefeliciteerd!';
    } else {
        document.querySelector('#kaartTitel').textContent = 'Gefeliciteerd ' + naam + '!';
    }
}

// Functies voor de ondertitel
function ondertitelGeniet() {
        ondertitelKaartTekst.textContent = 'Geniet van deze mooie dag!';
}

function ondertitelVerwen() {
        ondertitelKaartTekst.textContent = 'Laat je maar eens flink verwennen vandaag!';
}

function ondertitelLeven() {
        ondertitelKaartTekst.textContent = 'Lang zal je leven!';
}

function ondertitelGezond() {
        ondertitelKaartTekst.textContent = 'Op nog vele gezonde jaren erbij!';
}

// Het selecteren van kleuren
// Een eerder gekozen kleur kan hierdoor weer opnieuw gekozen worden
function verwijderKleur() {
    // De oude class(kleur) wordt verwijderd van de kaart
    // Met element.classList kan je CSS beïnvloeden (toepassen/weghalen)
    document.querySelector('#livePreview').classList.remove('wit');
    document.querySelector('#livePreview').classList.remove('roze');
    document.querySelector('#livePreview').classList.remove('lichtblauw');
    document.querySelector('#livePreview').classList.remove('geel');
}

function kaartkleur() {
    var gekozenKleur =
    // ('Input[name=kaartkleur]:checked').value heb ik van https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
    // Input[name=kaartkleur]:checked betekend dat er wordt gekeken welke radiobutton geselecteerd is. Deze waarde wordt dan in de variabele gekozenKleur gestopt, waarna het stukje uit de functie van die gekozen kleur wordt uitgevoerd

    //Met .value wordt de waarde van het kenmerk value van een tekstveld ingesteld of geretourneerd
    document.querySelector('input[name=kaartkleur]:checked').value;
    // Door de verwijderKleur functie aan te roepen, kan een eerder gekozen kleur weer opnieuw gekozen worden
    verwijderKleur();
    if (gekozenKleur == 'wit') {
        document.querySelector('#livePreview').classList.add('wit');
    }
    else if (gekozenKleur == 'roze') {
        document.querySelector('#livePreview').classList.add('roze');
    }
    else if (gekozenKleur == 'lichtblauw') {
        document.querySelector('#livePreview').classList.add('lichtblauw');
    }
    else {
        document.querySelector('#livePreview').classList.add('geel');
    }
}

function klikAfbeelding(event){
// Event.target gevonden op https://www.w3schools.com/jquery/event_target.asp en beter uitgelegd gekregen door Rianne Hoenderdos (3e jaars CMD studente)
// Event.target geeft altijd het element terug die een event getriggerd heeft
// Event.target kijkt welke van de 6 kleine afbeeldingen er wordt aangeklikt, deze waarde wordt gestopt in variable kleineAfbeelding
        var kleineAfbeelding = event.target;
// De src van de geselecteerde kleine afbeelding wordt geplaatst in de src van de hoofdAfbeelding, waardoor de bron wordt aangepast
        hoofdAfbeelding.src = kleineAfbeelding.src;
}





// Input event op ingevulde naam van de jarige
document.querySelector('#naam').addEventListener('input', naamJarige);

// Click event op button ondertitel
genietKnop.addEventListener('click', ondertitelGeniet);
verwenKnop.addEventListener('click', ondertitelVerwen);
levenKnop.addEventListener('click', ondertitelLeven);
gezondKnop.addEventListener('click', ondertitelGezond);

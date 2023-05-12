"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)

// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
// // function test ()
// {
//     console.log("Moin. Alles Andere ist Gebabbel!");
// }

// /***** Funktionen 02a *****/
// // 2a. Parametrisierung + Datenübergabe von INNEN

// // ausgabeNamen();

// function ausgabeNamen() 

// { 
//     // What happens in Vegas...
//     let firstName = "Sven"

//     console.log("Moin " + firstName + "!");
// }


// console.log(firstName);   FEHLER: Scope! 

// ausgabeNamenParam("Asad"); // Argument (Daten für Parameter)
// ausgabeNamenParam("Sven");
// ausgabeNamenParam("Karsten");

// function ausgabeNamenParam(firstName) // Parameter

// {
//     console.log("Moin " + firstName + "!");

// };


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams( "Dave", "Batista");
// ausgabeNamenParams("Fritz", "Kalkbrenner");
// ausgabeNamenParams(prompt("Wie ist dein Vorname?"), prompt("Wie ist dein Nachname?"))

// function ausgabeNamenParams(firstName, familyName) 

// {
//     console.log("Moin " + firstName + " " + familyName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob) --> Begründer: Cecil Martin aka Uncle Bob (Nice to Know)
// SRP single responsibility principle

// ausgabeNamenParams2("Jamshid", "Rahmanzani");

// function ausgabeNamenParams2(firstName, familyName) {

//      // 1. Funktionalität: string composing
//     const GAP = " ";
//     let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    
//      // 2. Funktionalität: string output
//     console.log(outputStr);
// }

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten in Funktionen | return

// getString("Maxine","Mützerich");
// output(getString("Maxine","Mützerich"));
output(getString(prompt("Vorname?"),prompt("Nachname?")));

function getString(firstName,familyName) {
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr; // return sendet Daten an den call zurück
    console.log(outputStr); // return bricht die Funktion ab!
}

/** INPUT --> Parameter | return --> OUTPUT **/

// 2. Funktionalität: string output
// output("Hi");
// output(2);
// output(true);
function output(outputData) {    // Das hier nennt man Wrapper! Wird uns später immer wieder begegnen und den Arsch retten!
    console.log(outputData);
}
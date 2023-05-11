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

ausgabeNamenParams( "Dave", "Batista");
ausgabeNamenParams("Fritz", "Kalkbrenner");
ausgabeNamenParams(prompt("Wie ist dein Vorname?"), prompt("Wie ist dein Nachname?"))

function ausgabeNamenParams(firstName, familyName) 

{
    console.log("Moin " + firstName + " " + familyName + "!");
}
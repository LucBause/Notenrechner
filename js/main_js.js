let n1;
let n2;
let n3;
let n4;
let n5;
let summe = 0;
let anzahlNoten = 0;
let ergebnis;

function tfAuslesen ()
{
    n1 = parseInt(document.getElementById("tf_note1").value); //zeile auslesen und in zahl umwandeln
    n2 = parseInt(document.getElementById("tf_note2").value);
    n3 = parseInt(document.getElementById("tf_note3").value);
    n4 = parseInt(document.getElementById("tf_note4").value);
    n5 = parseInt(document.getElementById("tf_note5").value);

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" +n5);

    punktePruefen(n1); //Funktion punktePrüfen für alle tf ausführen
    punktePruefen(n2);
    punktePruefen(n3);
    punktePruefen(n4);
    punktePruefen(n5);

    ergebnis = summe / anzahlNoten; //ergebnis berechnen

    document.getElementById("Ausgabe").innerHTML = ergebnis; //ergebnis in html einfügen und auslesen lassen

    if(ergebnis < 5)    //ergebnis je nach Wert einfärben
    {
        document.getElementById("Ausgabe").style.color = "crimson"
    }
    if(ergebnis > 5 && ergebnis < 11)
    {
        document.getElementById("Ausgabe").style.color = "darkorange"
    }
    if(ergebnis > 10)
    {
        document.getElementById("Ausgabe").style.color = "darkgreen"
    }
}

function punktePruefen(punkte) //punkte auf richtigkeit prüfen und "summe" und "anzahlNoten" berechnen
{
    if(isNaN(punkte))  //prüfen ob eingabe zahl ist
    {
        console.log(punkte + "ist keine Zahl!")
    }

    if(punkte < 16 && punkte > 0) //"summe" und "anzahlNoten" berechnen
    {
        summe = summe + punkte;
        anzahlNoten = anzahlNoten + 1;
    }

    if(punkte < 1 && punkte > 15) //prüfen ob eingabe zwischen 1 und 15 ist
    {
        console.log(punkte + "falsche Eingabe!")
    }
}
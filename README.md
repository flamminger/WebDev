## Assignment 1: HTML/CSS

Das Ziel für Ass. 1 ist die Umsetzung einer Seite, die Schiffe bzw. die Marine aus der Zeit um 1900 bis 1950 näher bringt.
Bilder bzw. Postkarten in Kombination mit Artikeln stellen auf der Seite einzelne Schiffe, Schiffsklassen, Typen, Marinen
etc. vor. Vorläufig gib es eine Ausgangsseite die auf zwei Auswahlseiten zu Einträgen bzw. auf allgemeine Artikel verweist.
Weiters gibt es eine Pseudoartikelseite, also wie ein konkreter Eintrag aussehen könnte.<br/>
Sollte der (Leidens-)Weg zum Endprodukt interessant sein, findet sich der git Ordner auch noch im Zip-Verzeichnis... <br/>
... der Header und ich werden jedenfalls keine Freunde mehr... <br/>
Das Ganze ist in mehrere HTML Seiten gegliedert:

#### home.html
Der Ausgangspunkt der Seite. Platz für Vorstellung der Seite und direkte Verweise auf andere Artikel[^1].

#### index.html
Diese Seite dient als Register der erfassten Schiffe.
Diese werden mit Bild dargestellt und am Ende findet sich noch eine ausklappbare Tabelle [^2]mit den Einträgen,
dargestellt als Listenansicht.

#### shipgroup.html
Im Vergleich zu index.html gibt es hier Platz für allgemeine weiterführende Artikel zu vorkommenden Nationen oder 
Schiffsklassen. Alternativ bietet sich hierfür das Dropdownmenü im Header an.

#### page.html
Die vierte Seite dient als Vorlage für "richtige" Artikel. Dieser gliedert sich in Titel, Kurzbeschreibung, 
Textkörper, Bilder und verlinkte Artikel.
Hier würde ich gerne im Verlauf des Semesters noch eine Karte einbauen, die z.B. Standorte oder Routen anzeigt. 

#### styles.css:
In der Datei styles.css findet sich dann noch alles, was außerhalb von Bootstrap angepasst wurde.

#### Allgemeine Elemente:
- im Header finden sich allgemeine Navigationselemente als Navbar mit Suchleiste [^3]. Link auf home.html, page.html, index.html und shipgroup.html sind vorhanden.
- Footer mit Text und Hintergrundbild



[^1]: Tooltipps im ersten Absatz
[^2]: für Punkt 7 
[^3]: Gesamte Header läuft mit. Wenn nur die Navbar bis zum Ende des Headerelements mitlaufen soll, einfach Z70-72 im CSS auskommentieren.
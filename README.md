## Assignment 1: HTML/CSS

Das Ziel für Ass. 1 ist die Umsetzung einer Seite, die als Begleitmaterial für ein Museum oder konkrete Ausstellung, verwendet werden kann. Als "Thema" dienen hier ein paar Postkarten mit dem gemeinsamen Motiv Schiff.
Das ganze ist in mehrere HTML Seiten gegliedert:

#### home.html
Der Ausgangspunkt der Seite. Platz für erklärende Inhalte und direkte Verweise auf andere Artikel[^1].

#### index.html
Diese Seite dient Register der erfassten Schiffe. Diese werden mit Bild dargestellt und am Ende findet sich noch eine ausklappbare Tabelle [^2] mit den Einträge als Listenansicht.

#### shipgroup.html
Im Vergleich zu index.html gibt es die Auswahl auf weiterführende Artikel zu vorkommenden Nationen oder zu dezidierten Artikeln von Schiffen zu navigieren. Alternativ bietet sich hierfür das Dropdownmenü im Header an.

#### page.html
Die vierte Seite dient als Vorlage für "richtige" Artikel. Dieser gliedert sich in Titel, Kurzbeschreibung, Textkörper, Bilder und verlinkten Artikeln.

#### Allgemeine Elemente:
In der Datei styles.css findet sich dann noch alles, was außerhalb von Bootstrap angepasst wurde.

#### Allgemeine Elemente:
- im Header finden sich allgemeine Navigationselemente als Navbar mit Suchleiste [^3]. Link auf home.html, page.html, index.html und shipgroup.html sind vorhanden.
- Footer mit Text und Hintergrundbild



[^1]: Tooltipps im ersten Absatz
[^2]: für Punkt 7 
[^3]: Navbar läuft bis zum Ende des Headerelements mit, wenn das ganze Teil bis zum Ende der Seite mitlaufen soll, kann man im CSS bei der Klasse main-header, das Auskommentierte entfernen...
...sieht aber komisch aus.
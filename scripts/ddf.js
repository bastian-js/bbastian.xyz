function spielerHinzufuegen() {
  let spielerName = window.prompt("Bitte den Spielernamen eingeben!");

  if (spielerName) {
    const spielerListe = document.getElementById("spielerListe");
    const neuerSpieler = document.createElement("div");
    neuerSpieler.classList.add("spieler");

    const spielerNameElement = document.createElement("span");
    spielerNameElement.textContent = spielerName;
    neuerSpieler.appendChild(spielerNameElement);

    for (let i = 0; i < 3; i++) {
      const herz = document.createElement("span");
      herz.classList.add("herz");
      herz.textContent = "♥";
      herz.onclick = function () {
        this.classList.add("verschwunden");
        if (
          this.parentNode.querySelectorAll(".herz:not(.verschwunden)")
            .length === 0
        ) {
          this.parentNode.classList.add("durchgestrichen");
          spielerListe.appendChild(this.parentNode);
        }
      };
      neuerSpieler.appendChild(herz);
    }

    spielerListe.insertBefore(neuerSpieler, spielerListe.firstChild);

    document.getElementById("neuerSpieler").value = "";
  }
}

function getQuestion() {
  const questions = [
    { frage: "Was ist die Hauptstadt von Frankreich?", antwort: "Paris" },
    { frage: "Wie viele Kontinente gibt es auf der Erde?", antwort: "Sieben" },
    {
      frage: "Wer hat die Relativitätstheorie entwickelt?",
      antwort: "Albert Einstein",
    },
    { frage: "Welcher Planet ist der Sonne am nächsten?", antwort: "Merkur" },
    { frage: "Wie viele Spieler hat eine Fußballmannschaft?", antwort: "Elf" },
    { frage: "Wie viele Bundesländer hat Deutschland?", antwort: "Sechzehn" },
    { frage: "Was ist die größte Wüste der Welt?", antwort: "Antarktis" },
    { frage: "Wer schrieb 'Faust'?", antwort: "Johann Wolfgang von Goethe" },
    {
      frage: "Welches Element hat das chemische Symbol 'O'?",
      antwort: "Sauerstoff",
    },
    { frage: "Was ist die Währung von Japan?", antwort: "Yen" },
    { frage: "Wie heißt der längste Fluss der Welt?", antwort: "Nil" },
    {
      frage: "Welche Sprache wird in Brasilien gesprochen?",
      antwort: "Portugiesisch",
    },
    { frage: "Wer malte die Mona Lisa?", antwort: "Leonardo da Vinci" },
    {
      frage: "Welches Tier ist das größte lebende Säugetier?",
      antwort: "Blauwal",
    },
    { frage: "Wie viele Planeten hat unser Sonnensystem?", antwort: "Acht" },
    { frage: "Wer schrieb 'Die Verwandlung'?", antwort: "Franz Kafka" },
    { frage: "Welches Land hat die meisten Einwohner?", antwort: "China" },
    { frage: "Wie viele Knochen hat ein erwachsener Mensch?", antwort: "206" },
    { frage: "In welchem Jahr fiel die Berliner Mauer?", antwort: "1989" },
    {
      frage: "Wer war der erste Mensch auf dem Mond?",
      antwort: "Neil Armstrong",
    },
    {
      frage: "Welches Element hat das chemische Symbol 'H'?",
      antwort: "Wasserstoff",
    },
    { frage: "Wie heißt der höchste Berg der Welt?", antwort: "Mount Everest" },
    { frage: "Wer erfand das Telefon?", antwort: "Alexander Graham Bell" },
    { frage: "Was ist die Hauptstadt von Italien?", antwort: "Rom" },
    {
      frage: "Welcher Planet ist der größte in unserem Sonnensystem?",
      antwort: "Jupiter",
    },
    { frage: "Wie viele Spieler hat ein Basketballteam?", antwort: "Fünf" },
    { frage: "Was ist die Hauptstadt von Kanada?", antwort: "Ottawa" },
    { frage: "Welcher Kontinent ist auch ein Land?", antwort: "Australien" },
    {
      frage: "Wie heißt die Königin von Großbritannien?",
      antwort: "Elizabeth II.",
    },
    {
      frage: "Wie viele Ringe sind auf der Olympischen Flagge?",
      antwort: "Fünf",
    },
    { frage: "Wer schrieb 'Don Quijote'?", antwort: "Miguel de Cervantes" },
    {
      frage: "Welches Meer liegt zwischen Europa und Afrika?",
      antwort: "Mittelmeer",
    },
    { frage: "Wie viele Planeten sind kleiner als die Erde?", antwort: "Drei" },
    { frage: "Was ist die Hauptstadt von Spanien?", antwort: "Madrid" },
    { frage: "Welches Land hat die Form eines Stiefels?", antwort: "Italien" },
    { frage: "Wie viele Minuten hat eine Stunde?", antwort: "Sechzig" },
    { frage: "Was ist die Hauptstadt von Russland?", antwort: "Moskau" },
    { frage: "Wer entdeckte Amerika?", antwort: "Christoph Kolumbus" },
    { frage: "Welcher Planet wird der Rote Planet genannt?", antwort: "Mars" },
    { frage: "Wie viele Monate hat ein Jahr?", antwort: "Zwölf" },
    { frage: "Welches Land ist das größte der Welt?", antwort: "Russland" },
    { frage: "Was ist die Hauptstadt von Ägypten?", antwort: "Kairo" },
    { frage: "Wer schrieb 'Der Herr der Ringe'?", antwort: "J.R.R. Tolkien" },
    { frage: "Wie viele Zeitzonen gibt es auf der Erde?", antwort: "24" },
    { frage: "Was ist die Hauptstadt von Australien?", antwort: "Canberra" },
    { frage: "Wer erfand die Glühbirne?", antwort: "Thomas Edison" },
    { frage: "Wie viele Farben hat der Regenbogen?", antwort: "Sieben" },
    {
      frage: "Wer war der erste Präsident der USA?",
      antwort: "George Washington",
    },
    {
      frage: "Welches Land ist das kleinste der Welt?",
      antwort: "Vatikanstadt",
    },
    { frage: "Wie viele Sekunden hat eine Minute?", antwort: "Sechzig" },
    { frage: "Was ist die Hauptstadt von Indien?", antwort: "Neu-Delhi" },
    { frage: "Wer malte 'Die Sternennacht'?", antwort: "Vincent van Gogh" },
    { frage: "Wie viele Kontinente hat die Welt?", antwort: "Sieben" },
    { frage: "Was ist die Hauptstadt von Brasilien?", antwort: "Brasília" },
    {
      frage: "Welches Element hat das chemische Symbol 'C'?",
      antwort: "Kohlenstoff",
    },
    { frage: "Wie viele Weltkriege gab es?", antwort: "Zwei" },
    { frage: "Was ist die Hauptstadt von Mexiko?", antwort: "Mexiko-Stadt" },
    { frage: "Wie viele Sterne hat die US-Flagge?", antwort: "Fünfzig" },
    {
      frage: "Wer schrieb 'Die Brüder Karamasow'?",
      antwort: "Fyodor Dostoevsky",
    },
    { frage: "Welcher Kontinent ist der zweitgrößte?", antwort: "Afrika" },
    { frage: "Was ist die Hauptstadt von Südafrika?", antwort: "Pretoria" },
    { frage: "Wie viele Nullen hat eine Milliarde?", antwort: "Neun" },
    {
      frage: "Was ist die Hauptstadt von Argentinien?",
      antwort: "Buenos Aires",
    },
    {
      frage: "Wer malte 'Das letzte Abendmahl'?",
      antwort: "Leonardo da Vinci",
    },
    {
      frage: "Wie viele Länder gibt es in der Europäischen Union?",
      antwort: "27",
    },
    { frage: "Was ist die Hauptstadt von China?", antwort: "Peking" },
    { frage: "Wer schrieb '1984'?", antwort: "George Orwell" },
    { frage: "Welches Land liegt nördlich von Mexiko?", antwort: "USA" },
    { frage: "Wie viele Planeten sind im Sonnensystem?", antwort: "Acht" },
    { frage: "Was ist die Hauptstadt von Griechenland?", antwort: "Athen" },
    { frage: "Wer malte 'Die Erschaffung Adams'?", antwort: "Michelangelo" },
    { frage: "Wie viele Tage hat ein Schaltjahr?", antwort: "366" },
    { frage: "Was ist die Hauptstadt von Norwegen?", antwort: "Oslo" },
    { frage: "Wer schrieb 'Moby Dick'?", antwort: "Herman Melville" },
    {
      frage: "Welches Land grenzt an Frankreich im Süden?",
      antwort: "Spanien",
    },
    { frage: "Was ist die Hauptstadt von Schweden?", antwort: "Stockholm" },
    { frage: "Wie viele Minuten hat ein Tag?", antwort: "1440" },
    { frage: "Wer schrieb 'Der Prozess'?", antwort: "Franz Kafka" },
    {
      frage: "Welcher Planet ist der heißeste in unserem Sonnensystem?",
      antwort: "Venus",
    },
    { frage: "Was ist die Hauptstadt von Portugal?", antwort: "Lissabon" },
    { frage: "Wie viele Millimeter hat ein Meter?", antwort: "1000" },
    { frage: "Wer schrieb 'Krieg und Frieden'?", antwort: "Leo Tolstoi" },
    { frage: "Was ist die Hauptstadt von Finnland?", antwort: "Helsinki" },
    { frage: "Wie viele Zähne hat ein Erwachsener?", antwort: "32" },
    {
      frage: "Wer schrieb 'Der große Gatsby'?",
      antwort: "F. Scott Fitzgerald",
    },
    { frage: "Was ist die Hauptstadt von Österreich?", antwort: "Wien" },
    { frage: "Wie viele Meter hat ein Kilometer?", antwort: "1000" },
    { frage: "Wer schrieb 'Frankenstein'?", antwort: "Mary Shelley" },
    { frage: "Was ist die Hauptstadt von Dänemark?", antwort: "Kopenhagen" },
    { frage: "Wie viele Seiten hat ein Würfel?", antwort: "Sechs" },
    { frage: "Wer schrieb 'Hamlet'?", antwort: "William Shakespeare" },
    { frage: "Was ist die Hauptstadt von Ungarn?", antwort: "Budapest" },
    { frage: "Wie viele Gramm hat ein Kilogramm?", antwort: "1000" },
    { frage: "Wer schrieb 'Die Odyssee'?", antwort: "Homer" },
    { frage: "Was ist die Hauptstadt von Polen?", antwort: "Warschau" },
    { frage: "Wie viele Augen hat eine Spinne?", antwort: "Acht" },
    { frage: "Wer schrieb 'Stolz und Vorurteil'?", antwort: "Jane Austen" },
    { frage: "Was ist die Hauptstadt von Belgien?", antwort: "Brüssel" },
    { frage: "Wie viele Wochen hat ein Jahr?", antwort: "52" },
    {
      frage: "Wer schrieb 'Die Göttliche Komödie'?",
      antwort: "Dante Alighieri",
    },
    { frage: "Was ist die Hauptstadt von Tschechien?", antwort: "Prag" },
    { frage: "Wie viele Milliliter hat ein Liter?", antwort: "1000" },
    { frage: "Wer schrieb 'Ulysses'?", antwort: "James Joyce" },
    { frage: "Was ist die Hauptstadt von Irland?", antwort: "Dublin" },
    { frage: "Wie viele Sekunden hat eine Stunde?", antwort: "3600" },
    {
      frage: "Wer schrieb 'Der alte Mann und das Meer'?",
      antwort: "Ernest Hemingway",
    },
    { frage: "Was ist die Hauptstadt von Kroatien?", antwort: "Zagreb" },
    { frage: "Wie viele Jahre hat ein Jahrhundert?", antwort: "100" },
    { frage: "Wer schrieb 'Die drei Musketiere'?", antwort: "Alexandre Dumas" },
    { frage: "Was ist die Hauptstadt von Bulgarien?", antwort: "Sofia" },
    { frage: "Wie viele Tage hat eine Woche?", antwort: "Sieben" },
    { frage: "Wer schrieb 'Brave New World'?", antwort: "Aldous Huxley" },
    { frage: "Was ist die Hauptstadt von Rumänien?", antwort: "Bukarest" },
    {
      frage: "Wie viele Tage hat der Februar in einem Schaltjahr?",
      antwort: "29",
    },
    { frage: "Wer schrieb 'Jane Eyre'?", antwort: "Charlotte Brontë" },
    { frage: "Was ist die Hauptstadt von Slowenien?", antwort: "Ljubljana" },
    { frage: "Wie viele Ecken hat ein Quadrat?", antwort: "Vier" },
    { frage: "Wer schrieb 'Madame Bovary'?", antwort: "Gustave Flaubert" },
    { frage: "Was ist die Hauptstadt von Litauen?", antwort: "Vilnius" },
    { frage: "Wie viele Tage hat der Monat Januar?", antwort: "31" },
    {
      frage: "Wer schrieb 'Die Abenteuer des Huckleberry Finn'?",
      antwort: "Mark Twain",
    },
    { frage: "Was ist die Hauptstadt von Lettland?", antwort: "Riga" },
    {
      frage: "Wie viele Tage hat der Monat Februar in einem normalen Jahr?",
      antwort: "28",
    },
    { frage: "Wer schrieb 'Der Fänger im Roggen'?", antwort: "J.D. Salinger" },
    { frage: "Was ist die Hauptstadt von Estland?", antwort: "Tallinn" },
    {
      frage: "Wie viele Wochen hat der Monat Januar?",
      antwort: "Vier bis fünf",
    },
    {
      frage: "Wer schrieb 'Im Westen nichts Neues'?",
      antwort: "Erich Maria Remarque",
    },
    { frage: "Was ist die Hauptstadt von Griechenland?", antwort: "Athen" },
    { frage: "Wie viele Tage hat der Monat März?", antwort: "31" },
    {
      frage: "Wer schrieb 'Der Glöckner von Notre-Dame'?",
      antwort: "Victor Hugo",
    },
    { frage: "Was ist die Hauptstadt von Zypern?", antwort: "Nikosia" },
    { frage: "Wie viele Tage hat der Monat April?", antwort: "30" },
    {
      frage: "Wer schrieb 'Das Bildnis des Dorian Gray'?",
      antwort: "Oscar Wilde",
    },
    { frage: "Was ist die Hauptstadt von Luxemburg?", antwort: "Luxemburg" },
    { frage: "Wie viele Tage hat der Monat Mai?", antwort: "31" },
    { frage: "Wer schrieb 'Robinson Crusoe'?", antwort: "Daniel Defoe" },
    { frage: "Was ist die Hauptstadt von Malta?", antwort: "Valletta" },
    { frage: "Wie viele Tage hat der Monat Juni?", antwort: "30" },
    { frage: "Wer schrieb 'Der unsichtbare Mann'?", antwort: "H.G. Wells" },
    { frage: "Was ist die Hauptstadt von Norwegen?", antwort: "Oslo" },
    { frage: "Wie viele Tage hat der Monat Juli?", antwort: "31" },
    { frage: "Wer schrieb 'Anna Karenina'?", antwort: "Leo Tolstoi" },
    { frage: "Was ist die Hauptstadt von Schweden?", antwort: "Stockholm" },
    { frage: "Wie viele Tage hat der Monat August?", antwort: "31" },
    {
      frage: "Wer schrieb 'Der Graf von Monte Christo'?",
      antwort: "Alexandre Dumas",
    },
    { frage: "Was ist die Hauptstadt von Finnland?", antwort: "Helsinki" },
    { frage: "Wie viele Tage hat der Monat September?", antwort: "30" },
    { frage: "Wer schrieb 'Frankenstein'?", antwort: "Mary Shelley" },
    { frage: "Was ist die Hauptstadt von Island?", antwort: "Reykjavik" },
    { frage: "Wie viele Tage hat der Monat Oktober?", antwort: "31" },
    { frage: "Wer schrieb 'Dracula'?", antwort: "Bram Stoker" },
    { frage: "Was ist die Hauptstadt von Irland?", antwort: "Dublin" },
    { frage: "Wie viele Tage hat der Monat November?", antwort: "30" },
    { frage: "Wer schrieb 'Sherlock Holmes'?", antwort: "Arthur Conan Doyle" },
    { frage: "Was ist die Hauptstadt von Kanada?", antwort: "Ottawa" },
    { frage: "Wie viele Tage hat der Monat Dezember?", antwort: "31" },
    {
      frage: "Wer schrieb 'Die Schatzinsel'?",
      antwort: "Robert Louis Stevenson",
    },
    { frage: "Was ist die Hauptstadt von Australien?", antwort: "Canberra" },
    { frage: "Wie viele Tage hat ein Jahr?", antwort: "365" },
    { frage: "Wer schrieb 'Das Phantom der Oper'?", antwort: "Gaston Leroux" },
    { frage: "Was ist die Hauptstadt von Neuseeland?", antwort: "Wellington" },
    { frage: "Wie viele Tage hat ein Schaltjahr?", antwort: "366" },
    { frage: "Wer schrieb '1984'?", antwort: "George Orwell" },
    { frage: "Was ist die Hauptstadt von Südafrika?", antwort: "Pretoria" },
    { frage: "Wie viele Tage hat eine Woche?", antwort: "Sieben" },
    {
      frage: "Wer schrieb 'Der kleine Prinz'?",
      antwort: "Antoine de Saint-Exupéry",
    },
    { frage: "Was ist die Hauptstadt von Ägypten?", antwort: "Kairo" },
    { frage: "Wie viele Minuten hat eine Stunde?", antwort: "Sechzig" },
    { frage: "Wer schrieb 'Die Verwandlung'?", antwort: "Franz Kafka" },
    { frage: "Was ist die Hauptstadt von Indien?", antwort: "Neu-Delhi" },
    { frage: "Wie viele Sekunden hat eine Minute?", antwort: "Sechzig" },
    {
      frage: "Wer schrieb 'Der alte Mann und das Meer'?",
      antwort: "Ernest Hemingway",
    },
    { frage: "Was ist die Hauptstadt von Japan?", antwort: "Tokio" },
    { frage: "Wie viele Stunden hat ein Tag?", antwort: "24" },
    {
      frage: "Wer schrieb 'Die Leiden des jungen Werthers'?",
      antwort: "Johann Wolfgang von Goethe",
    },
    { frage: "Was ist die Hauptstadt von Südkorea?", antwort: "Seoul" },
    { frage: "Wie viele Monate hat ein Jahr?", antwort: "Zwölf" },
    { frage: "Wer schrieb 'Moby-Dick'?", antwort: "Herman Melville" },
    { frage: "Was ist die Hauptstadt von Vietnam?", antwort: "Hanoi" },
    { frage: "Wie viele Jahrzehnte hat ein Jahrhundert?", antwort: "Zehn" },
    { frage: "Wer schrieb 'Pride and Prejudice'?", antwort: "Jane Austen" },
    { frage: "Was ist die Hauptstadt von Thailand?", antwort: "Bangkok" },
    { frage: "Wie viele Jahre hat ein Jahrzehnt?", antwort: "Zehn" },
    { frage: "Wer schrieb 'Hamlet'?", antwort: "William Shakespeare" },
    { frage: "Was ist die Hauptstadt von Malaysia?", antwort: "Kuala Lumpur" },
    {
      frage: "Wie viele Tage hat der Monat Februar in einem Schaltjahr?",
      antwort: "29",
    },
    { frage: "Wer schrieb 'Gullivers Reisen'?", antwort: "Jonathan Swift" },
    { frage: "Was ist die Hauptstadt von Indonesien?", antwort: "Jakarta" },
    {
      frage: "Wie viele Tage hat der Monat Februar in einem normalen Jahr?",
      antwort: "28",
    },
    { frage: "Wer schrieb 'Jane Eyre'?", antwort: "Charlotte Brontë" },
    { frage: "Was ist die Hauptstadt von Singapur?", antwort: "Singapur" },
    { frage: "Wie viele Wochen hat ein Jahr?", antwort: "52" },
    { frage: "Wer schrieb 'Die drei Musketiere'?", antwort: "Alexandre Dumas" },
    { frage: "Was ist die Hauptstadt von Sri Lanka?", antwort: "Colombo" },
    { frage: "Wie viele Stunden hat ein Jahr?", antwort: "8760" },
    { frage: "Wer schrieb 'Die Zeitmaschine'?", antwort: "H.G. Wells" },
    { frage: "Was ist die Hauptstadt von den Philippinen?", antwort: "Manila" },
    { frage: "Wie viele Tage hat der Monat März?", antwort: "31" },
    { frage: "Wer schrieb 'Robinson Crusoe'?", antwort: "Daniel Defoe" },
    {
      frage: "Was ist die Hauptstadt von Brunei?",
      antwort: "Bandar Seri Begawan",
    },
    { frage: "Wie viele Monate haben 30 Tage?", antwort: "Vier" },
    { frage: "Wer schrieb 'Oliver Twist'?", antwort: "Charles Dickens" },
    { frage: "Was ist die Hauptstadt von Kambodscha?", antwort: "Phnom Penh" },
    { frage: "Wie viele Tage hat der Monat April?", antwort: "30" },
    { frage: "Wer schrieb 'Große Erwartungen'?", antwort: "Charles Dickens" },
    { frage: "Was ist die Hauptstadt von Myanmar?", antwort: "Naypyidaw" },
    { frage: "Wie viele Tage hat der Monat Mai?", antwort: "31" },
    {
      frage: "Wer schrieb 'Der seltsame Fall des Dr. Jekyll und Mr. Hyde'?",
      antwort: "Robert Louis Stevenson",
    },
    { frage: "Was ist die Hauptstadt von Laos?", antwort: "Vientiane" },
    { frage: "Wie viele Tage hat der Monat Juni?", antwort: "30" },
    { frage: "Wer schrieb 'Alice im Wunderland'?", antwort: "Lewis Carroll" },
    { frage: "Was ist die Hauptstadt von Vietnam?", antwort: "Hanoi" },
    { frage: "Wie viele Tage hat der Monat Juli?", antwort: "31" },
    {
      frage: "Wer schrieb 'Die Schatzinsel'?",
      antwort: "Robert Louis Stevenson",
    },
    { frage: "Was ist die Hauptstadt von Taiwan?", antwort: "Taipei" },
    { frage: "Wie viele Tage hat der Monat August?", antwort: "31" },
    {
      frage: "Wer schrieb 'Der Glöckner von Notre-Dame'?",
      antwort: "Victor Hugo",
    },
    { frage: "Was ist die Hauptstadt von Nordkorea?", antwort: "Pjöngjang" },
    { frage: "Wie viele Tage hat der Monat September?", antwort: "30" },
    { frage: "Wer schrieb 'Les Misérables'?", antwort: "Victor Hugo" },
    { frage: "Was ist die Hauptstadt von Bangladesch?", antwort: "Dhaka" },
    { frage: "Wie viele Tage hat der Monat Oktober?", antwort: "31" },
    {
      frage: "Wer schrieb 'Der Hund der Baskervilles'?",
      antwort: "Arthur Conan Doyle",
    },
    { frage: "Was ist die Hauptstadt von Bhutan?", antwort: "Thimphu" },
    { frage: "Wie viele Tage hat der Monat November?", antwort: "30" },
    { frage: "Wer schrieb 'Robinson Crusoe'?", antwort: "Daniel Defoe" },
    { frage: "Was ist die Hauptstadt von Nepal?", antwort: "Kathmandu" },
    { frage: "Wie viele Tage hat der Monat Dezember?", antwort: "31" },
    {
      frage: "Wer schrieb '20.000 Meilen unter dem Meer'?",
      antwort: "Jules Verne",
    },
    { frage: "Was ist die Hauptstadt von Mongolei?", antwort: "Ulaanbaatar" },
    { frage: "Wie viele Stunden hat eine Woche?", antwort: "168" },
    { frage: "Wer schrieb 'Der Hobbit'?", antwort: "J.R.R. Tolkien" },
    { frage: "Was ist die Hauptstadt von Kasachstan?", antwort: "Nur-Sultan" },
    { frage: "Wie viele Tage hat ein Jahr?", antwort: "365" },
    { frage: "Wer schrieb 'Die Insel des Dr. Moreau'?", antwort: "H.G. Wells" },
    { frage: "Was ist die Hauptstadt von Usbekistan?", antwort: "Taschkent" },
    { frage: "Wie viele Stunden hat ein Monat?", antwort: "720" },
    {
      frage: "Wer schrieb 'Die Reise zum Mittelpunkt der Erde'?",
      antwort: "Jules Verne",
    },
    { frage: "Was ist die Hauptstadt von Turkmenistan?", antwort: "Aschgabat" },
    { frage: "Wie viele Tage hat ein Jahrhundert?", antwort: "36524" },
    { frage: "Wer schrieb 'Moby Dick'?", antwort: "Herman Melville" },
    { frage: "Was ist die Hauptstadt von Kirgisistan?", antwort: "Bischkek" },
    { frage: "Wie viele Minuten hat eine Stunde?", antwort: "60" },
    { frage: "Wer schrieb 'Der Krieg der Welten'?", antwort: "H.G. Wells" },
    {
      frage: "Was ist die Hauptstadt von Tadschikistan?",
      antwort: "Duschanbe",
    },
    { frage: "Wie viele Stunden hat ein Jahr?", antwort: "8760" },
    { frage: "Wer schrieb 'Robinson Crusoe'?", antwort: "Daniel Defoe" },
    { frage: "Was ist die Hauptstadt von Armenien?", antwort: "Jerewan" },
    { frage: "Wie viele Stunden hat eine Woche?", antwort: "168" },
    { frage: "Wer schrieb 'Alice im Wunderland'?", antwort: "Lewis Carroll" },
    { frage: "Was ist die Hauptstadt von Aserbaidschan?", antwort: "Baku" },
    {
      frage: "Wie viele Tage hat der Monat Februar in einem Schaltjahr?",
      antwort: "29",
    },
    {
      frage: "Wer schrieb '20.000 Meilen unter dem Meer'?",
      antwort: "Jules Verne",
    },
    { frage: "Was ist die Hauptstadt von Georgien?", antwort: "Tiflis" },
    { frage: "Wie viele Stunden hat ein Monat?", antwort: "720" },
    {
      frage: "Wer schrieb 'Der Graf von Monte Cristo'?",
      antwort: "Alexandre Dumas",
    },
    { frage: "Was ist die Hauptstadt von Türkei?", antwort: "Ankara" },
    { frage: "Wie viele Tage hat der Monat März?", antwort: "31" },
    { frage: "Wer schrieb 'Die drei Musketiere'?", antwort: "Alexandre Dumas" },
    { frage: "Was ist die Hauptstadt von Israel?", antwort: "Jerusalem" },
    { frage: "Wie viele Minuten hat eine Stunde?", antwort: "60" },
    {
      frage: "Wer schrieb 'Der Graf von Monte Christo'?",
      antwort: "Alexandre Dumas",
    },
    { frage: "Was ist die Hauptstadt von Syrien?", antwort: "Damaskus" },
    { frage: "Wie viele Stunden hat eine Woche?", antwort: "168" },
    {
      frage: "Wer schrieb 'Die Abenteuer des Huckleberry Finn'?",
      antwort: "Mark Twain",
    },
    { frage: "Was ist die Hauptstadt von Jordanien?", antwort: "Amman" },
    { frage: "Wie viele Minuten hat ein Tag?", antwort: "1440" },
    { frage: "Wer schrieb '1984'?", antwort: "George Orwell" },
    { frage: "Was ist die Hauptstadt von Libanon?", antwort: "Beirut" },
    { frage: "Wie viele Sekunden hat eine Minute?", antwort: "60" },
    {
      frage: "Wer schrieb 'Der kleine Prinz'?",
      antwort: "Antoine de Saint-Exupéry",
    },
    { frage: "Was ist die Hauptstadt von Saudi-Arabien?", antwort: "Riad" },
    { frage: "Wie viele Stunden hat ein Jahr?", antwort: "8760" },
    {
      frage: "Wer schrieb 'Der alte Mann und das Meer'?",
      antwort: "Ernest Hemingway",
    },
    { frage: "Was ist die Hauptstadt von Kuwait?", antwort: "Kuwait-Stadt" },
    {
      frage: "Wie viele Tage hat der Monat Februar in einem Schaltjahr?",
      antwort: "29",
    },
    { frage: "Wer schrieb 'Frankenstein'?", antwort: "Mary Shelley" },
    { frage: "Was ist die Hauptstadt von Bahrain?", antwort: "Manama" },
    { frage: "Wie viele Minuten hat eine Stunde?", antwort: "60" },
    { frage: "Wer schrieb 'Hamlet'?", antwort: "William Shakespeare" },
    { frage: "Was ist die Hauptstadt von Katar?", antwort: "Doha" },
    { frage: "Wie viele Sekunden hat eine Minute?", antwort: "60" },
    {
      frage: "Wer schrieb 'Der Glöckner von Notre-Dame'?",
      antwort: "Victor Hugo",
    },
    { frage: "Was ist die Hauptstadt von Oman?", antwort: "Maskat" },
    { frage: "Wie viele Sekunden hat eine Stunde?", antwort: "3600" },
    { frage: "Wer schrieb 'Der Fänger im Roggen'?", antwort: "J.D. Salinger" },
    {
      frage: "Was ist die Hauptstadt von Vereinigte Arabische Emirate?",
      antwort: "Abu Dhabi",
    },
    { frage: "Wie viele Minuten hat ein Tag?", antwort: "1440" },
    { frage: "Wer schrieb 'Madame Bovary'?", antwort: "Gustave Flaubert" },
    { frage: "Was ist die Hauptstadt von Iran?", antwort: "Teheran" },
    { frage: "Wie viele Sekunden hat ein Tag?", antwort: "86400" },
    { frage: "Wer schrieb 'Pride and Prejudice'?", antwort: "Jane Austen" },
    { frage: "Was ist die Hauptstadt von Irak?", antwort: "Bagdad" },
    { frage: "Wie viele Stunden hat ein Tag?", antwort: "24" },
    {
      frage: "Wer schrieb 'Der Graf von Monte Cristo'?",
      antwort: "Alexandre Dumas",
    },
    { frage: "Was ist die Hauptstadt von Afghanistan?", antwort: "Kabul" },
    { frage: "Wie viele Minuten hat ein Jahr?", antwort: "525600" },
    { frage: "Wer schrieb 'Moby Dick'?", antwort: "Herman Melville" },
    { frage: "Was ist die Hauptstadt von Pakistan?", antwort: "Islamabad" },
    { frage: "Wie viele Sekunden hat ein Jahr?", antwort: "31536000" },
    {
      frage: "Wer schrieb 'Der Glöckner von Notre-Dame'?",
      antwort: "Victor Hugo",
    },
    { frage: "Was ist die Hauptstadt von Indien?", antwort: "Neu-Delhi" },
    { frage: "Wie viele Sekunden hat eine Minute?", antwort: "60" },
    { frage: "Wer schrieb 'Gullivers Reisen'?", antwort: "Jonathan Swift" },
    { frage: "Was ist die Hauptstadt von Bangladesch?", antwort: "Dhaka" },
    { frage: "Wie viele Stunden hat eine Woche?", antwort: "168" },
    { frage: "Wer schrieb '1984'?", antwort: "George Orwell" },
    { frage: "Was ist die Hauptstadt von Myanmar?", antwort: "Naypyidaw" },
    { frage: "Wie viele Stunden hat ein Jahr?", antwort: "8760" },
    { frage: "Wer schrieb 'Der Hobbit'?", antwort: "J.R.R. Tolkien" },
    { frage: "Was ist die Hauptstadt von Nepal?", antwort: "Kathmandu" },
    { frage: "Wie viele Minuten hat ein Tag?", antwort: "1440" },
    {
      frage: "Wer schrieb 'Die Schatzinsel'?",
      antwort: "Robert Louis Stevenson",
    },
    { frage: "Was ist die Hauptstadt von Sri Lanka?", antwort: "Colombo" },
    { frage: "Wie viele Sekunden hat eine Stunde?", antwort: "3600" },
    { frage: "Wer schrieb '1984'?", antwort: "George Orwell" },
    { frage: "Was ist die Hauptstadt von Malaysia?", antwort: "Kuala Lumpur" },
    { frage: "Wie viele Minuten hat ein Tag?", antwort: "1440" },
    { frage: "Wer schrieb 'Pride and Prejudice'?", antwort: "Jane Austen" },
    { frage: "Was ist die Hauptstadt von Singapur?", antwort: "Singapur" },
    { frage: "Wie viele Sekunden hat ein Jahr?", antwort: "31536000" },
    { frage: "Wer schrieb 'Jane Eyre'?", antwort: "Charlotte Brontë" },
    { frage: "Was ist die Hauptstadt von Thailand?", antwort: "Bangkok" },
    { frage: "Wie viele Sekunden hat eine Minute?", antwort: "60" },
  ];

  let remainingQuestions = [...questions];
  const frageElement = document.getElementById("frage");
  const antwortElement = document.getElementById("antwort");
  const buttonElement = document.getElementById("nextButton");

  if (remainingQuestions.length === 0) {
    frageElement.textContent = "Keine weiteren Fragen!";
    antwortElement.textContent = "";
    buttonElement.disabled = true;
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const { frage, antwort } = remainingQuestions.splice(randomIndex, 1)[0];

  frageElement.textContent = frage;
  antwortElement.textContent = antwort;
}

let intervalId;

function startTimer() {
  const durationInMinutes = parseInt(document.getElementById("duration").value);

  const durationInSeconds = durationInMinutes * 60;
  let remainingSeconds = durationInSeconds;

  const timerElement = document.getElementById("timer");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(() => {
    remainingSeconds--;

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    timerElement.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (remainingSeconds === 0) {
      clearInterval(intervalId);
      alert("Timer completed!");

      startButton.disabled = false;
      stopButton.disabled = true;
    }
  }, 1000);
}

function stopTimer() {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  clearInterval(intervalId);

  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetGame() {
  location.reload();
}

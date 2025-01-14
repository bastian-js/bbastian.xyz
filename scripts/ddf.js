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
    { frage: "Welcher Planet ist der Sonne am nächsten?", antwort: "Merkur" },
    { frage: "Wie viele Spieler hat eine Fußballmannschaft?", antwort: "Elf" },
    { frage: "Wie viele Bundesländer hat Deutschland?", antwort: "Sechzehn" },
    { frage: "Was ist die größte Wüste der Welt?", antwort: "Antarktis" },
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
    {
      frage: "Welches Tier ist das größte lebende Säugetier?",
      antwort: "Blauwal",
    },
    { frage: "Wie viele Planeten hat unser Sonnensystem?", antwort: "Acht" },
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
    { frage: "Wie viele Kontinente hat die Welt?", antwort: "Sieben" },
    { frage: "Was ist die Hauptstadt von Brasilien?", antwort: "Brasília" },
    {
      frage: "Welches Element hat das chemische Symbol 'C'?",
      antwort: "Kohlenstoff",
    },
    { frage: "Wie viele Weltkriege gab es?", antwort: "Zwei" },
    { frage: "Was ist die Hauptstadt von Mexiko?", antwort: "Mexiko-Stadt" },
    { frage: "Wie viele Sterne hat die US-Flagge?", antwort: "Fünfzig" },
    { frage: "Welcher Kontinent ist der zweitgrößte?", antwort: "Afrika" },
    { frage: "Was ist die Hauptstadt von Südafrika?", antwort: "Pretoria" },
    { frage: "Wie viele Nullen hat eine Milliarde?", antwort: "Neun" },
    {
      frage: "Was ist die Hauptstadt von Argentinien?",
      antwort: "Buenos Aires",
    },
    {
      frage: "Wie viele Länder gibt es in der Europäischen Union?",
      antwort: "27",
    },
    { frage: "Was ist die Hauptstadt von China?", antwort: "Peking" },
    { frage: "Welches Land liegt nördlich von Mexiko?", antwort: "USA" },
    { frage: "Wie viele Planeten sind im Sonnensystem?", antwort: "Acht" },
    { frage: "Was ist die Hauptstadt von Griechenland?", antwort: "Athen" },
    { frage: "Wie viele Tage hat ein Schaltjahr?", antwort: "366" },
    { frage: "Was ist die Hauptstadt von Norwegen?", antwort: "Oslo" },
    {
      frage: "Welcher Planet ist der heißeste in unserem Sonnensystem?",
      antwort: "Venus",
    },
    { frage: "Was ist die Hauptstadt von Portugal?", antwort: "Lissabon" },
    { frage: "Wie viele Millimeter hat ein Meter?", antwort: "1000" },
    { frage: "Was ist die Hauptstadt von Finnland?", antwort: "Helsinki" },
    { frage: "Wie viele Zähne hat ein Erwachsener?", antwort: "32" },
    { frage: "Was ist die Hauptstadt von Österreich?", antwort: "Wien" },
    { frage: "Wie viele Meter hat ein Kilometer?", antwort: "1000" },
    { frage: "Was ist die Hauptstadt von Dänemark?", antwort: "Kopenhagen" },
    { frage: "Wie viele Seiten hat ein Würfel?", antwort: "Sechs" },
    { frage: "Was ist die Hauptstadt von Ungarn?", antwort: "Budapest" },
    { frage: "Wie viele Gramm hat ein Kilogramm?", antwort: "1000" },
    { frage: "Was ist die Hauptstadt von Polen?", antwort: "Warschau" },
    { frage: "Wie viele Augen hat eine Spinne?", antwort: "Acht" },
    { frage: "Was ist die Hauptstadt von Belgien?", antwort: "Brüssel" },
    { frage: "Wie viele Wochen hat ein Jahr?", antwort: "52" },
    { frage: "Was ist die Hauptstadt von Tschechien?", antwort: "Prag" },
    { frage: "Wie viele Milliliter hat ein Liter?", antwort: "1000" },
    { frage: "Was ist die Hauptstadt von Irland?", antwort: "Dublin" },
    { frage: "Wie viele Sekunden hat eine Stunde?", antwort: "3600" },
    { frage: "Was ist die Hauptstadt von Kroatien?", antwort: "Zagreb" },
    { frage: "Wie viele Jahre hat ein Jahrhundert?", antwort: "100" },
    { frage: "Was ist die Hauptstadt von Slowenien?", antwort: "Ljubljana" },
    { frage: "Wie viele Ecken hat ein Quadrat?", antwort: "Vier" },
    { frage: "Was ist die Hauptstadt von Litauen?", antwort: "Vilnius" },
    { frage: "Wie viele Tage hat der Monat Januar?", antwort: "31" },
    { frage: "Was ist die Hauptstadt von Lettland?", antwort: "Riga" },
    {
      frage: "Wie viele Tage hat der Monat Februar in einem normalen Jahr?",
      antwort: "28",
    },
    { frage: "Was ist die Hauptstadt von Estland?", antwort: "Tallinn" },
    {
      frage: "Wie viele Wochen hat der Monat Januar?",
      antwort: "Vier bis fünf",
    },
    { frage: "Was ist die Hauptstadt von Griechenland?", antwort: "Athen" },
    { frage: "Wie viele Tage hat der Monat März?", antwort: "31" },
    { frage: "Was ist die Hauptstadt von Zypern?", antwort: "Nikosia" },
    { frage: "Wie viele Tage hat der Monat April?", antwort: "30" },
    { frage: "Was ist die Hauptstadt von Luxemburg?", antwort: "Luxemburg" },
    { frage: "Wie viele Tage hat der Monat Mai?", antwort: "31" },
    { frage: "Was ist die Hauptstadt von Malta?", antwort: "Valletta" },
    { frage: "Wie viele Tage hat der Monat Juni?", antwort: "30" },
    { frage: "Was ist die Hauptstadt der Niederlande?", antwort: "Amsterdam" },
    { frage: "Wie viele Tage hat der Monat Juli?", antwort: "31" },
    { frage: "Was ist die Hauptstadt von Bulgarien?", antwort: "Sofia" },
    { frage: "Wie viele Tage hat der Monat August?", antwort: "31" },
    { frage: "Was ist die Hauptstadt von Rumänien?", antwort: "Bukarest" },
    { frage: "Wie viele Tage hat der Monat September?", antwort: "30" },
    { frage: "Was ist die Hauptstadt von Slowakei?", antwort: "Bratislava" },
    { frage: "Wie viele Tage hat der Monat Oktober?", antwort: "31" },
    { frage: "Was ist die Hauptstadt von Serbien?", antwort: "Belgrad" },
    { frage: "Wie viele Tage hat der Monat November?", antwort: "30" },
    {
      frage: "Was ist die Hauptstadt von Bosnien und Herzegowina?",
      antwort: "Sarajevo",
    },
    { frage: "Wie viele Tage hat der Monat Dezember?", antwort: "31" },
    { frage: "Was ist die Hauptstadt von Albanien?", antwort: "Tirana" },
    { frage: "Wie viele Tage hat ein Jahr ohne Schaltjahr?", antwort: "365" },
    { frage: "Was ist die Hauptstadt von Nordmazedonien?", antwort: "Skopje" },
    { frage: "Wie viele Bundesstaaten hat die USA?", antwort: "50" },
    { frage: "Was ist die Hauptstadt von Kosovo?", antwort: "Pristina" },
    { frage: "Wie viele Stunden hat ein Tag?", antwort: "24" },
    { frage: "Was ist die Hauptstadt von Montenegro?", antwort: "Podgorica" },
    { frage: "Wie viele Minuten hat eine Stunde?", antwort: "60" },
    { frage: "Was ist die Hauptstadt von Island?", antwort: "Reykjavik" },
    {
      frage: "Wie viele Tage hat der Monat Februar in einem Schaltjahr?",
      antwort: "29",
    },
    { frage: "Was ist die Hauptstadt von Türkei?", antwort: "Ankara" },
    { frage: "Wie viele Wochen hat ein Monat?", antwort: "Vier bis fünf" },
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

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Der Dümmste fliegt</title>

    <script src="./scripts/ddf.js"></script>
    <link rel="stylesheet" href="../styles/ddf-page.css" />
  </head>
  <body>
    <div class="spieler">
      <div class="buttons">
        <button onclick="spielerHinzufuegen()" id="addButton">
          Hinzufügen
        </button>

        <button id="resetButton" onclick="resetGame()">Reset game</button>
      </div>
      <div id="spielerListe"></div>
    </div>

    <div class="questions">
      <button id="nextButton" onclick="getQuestion()">Nächste Frage</button>

      <p id="frage"></p>
    </div>

    <div class="timer">
      <select id="duration">
        <option value="2">2 Minuten</option>
        <option value="3">3 Minuten</option>
        <option value="4">4 Minuten</option>
      </select>

      <div class="timerButtons">
        <button id="start" onclick="startTimer(2)">Starten</button>
        <button id="stop" onclick="stopTimer()" disabled>Stoppen</button>
      </div>

      <div id="timer">00:00</div>
    </div>

    <div class="questions">
      <p id="antwort"></p>
    </div>

    <div class="copyright">
      <p class="copyright-p">2024 &copy; bastian</p>
    </div>
  </body>
</html>

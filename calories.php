<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <!-- title-->
    <title>bastian | calorie calculator</title>
    <!-- title end-->

    <!-- stylesheet -->
    <link rel="stylesheet" href="../styles/calorie-style.css" />
    <link rel="stylesheet" href="../styles/style.css" />
    <!-- stylesheet end -->

    <!-- icon -->
    <link rel="icon" href="assets/images/pfp_neu_rund.png" />
    <!-- icon end -->

    <!-- discord embed -->
    <meta property="og:title" content="bastian" />
    <meta
      property="og:description"
      content="A website for projects & socials
    "
    />
    <meta property="og:image" content="/assets/pfp_neu_klein.png" />
    <meta name="theme-color" content="#8BD2EC" />
    <!-- discord embed end -->

    <!-- fontawesome for icons -->
    <script
      src="https://kit.fontawesome.com/8c89019b79.js"
      crossorigin="anonymous"
    ></script>
    <!-- fontawesome end -->

    <script src="./scripts/calories.js"></script>
  </head>
  <body>
    <a href="/">
      <button class="button-home">home</button>
    </a>

    <header class="header">
      <img class="profile_pic" src="assets/images/pfp_neu_rund.png" alt="" />
      <p class="header_paragraph">hey, i'm bastian :)</p>
    </header>

    <form id="form" class="container">
      <div class="gender-container">
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female" class="gender-label">Weiblich</label>

        <input type="radio" id="male" name="gender" value="male" />
        <label for="male" class="gender-label">Männlich</label>
      </div>

      <div class="inputs">
        <label for="input-kg" class="kg" id="kg-input"
          >Körpergewicht in Kilogramm</label
        >
        <input
          type="number"
          name="kg"
          id="input-kg"
          class="kg"
          placeholder="Geben Sie Ihr Gewicht ein"
        />

        <label for="input-heigth" class="heigth" id="height-input"
          >Körpergröße in cm</label
        >
        <input
          type="number"
          name="height"
          id="input-height"
          class="height"
          placeholder="Geben Sie Ihre Größe ein"
        />

        <label for="input-age" class="age" id="age-input"
          >Alter in Jahren</label
        >
        <input
          type="number"
          name="age"
          id="input-age"
          class="age"
          placeholder="Geben Sie Ihr Alter ein"
        />

        <label id="label"
          >Alltagsaktivität (ohne Sport)
          <select name="pal" id="pal">
            <option value="1.25">Wenig Aktiv</option>
            <option value="1.45">Etwas Aktiv</option>
            <option value="1.65">Aktiv</option>
            <option value="1.85">Sehr Aktiv</option>
          </select>
        </label>
      </div>

      <button type="submit" class="submit-button">Bestätigen</button>
    </form>

    <div class="feedback">
      <p id="feedback"></p>
    </div>

    <div class="copyright">
      <p class="copyright-p">2024 &copy; bastian</p>
    </div>
  </body>
</html>

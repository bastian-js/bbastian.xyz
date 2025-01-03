<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>bastian | projects</title>

    <link rel="stylesheet" href="../styles/projects-style.css" />
    <link rel="stylesheet" href="../styles/style.css" />

    <script
      src="https://kit.fontawesome.com/e0ab8e764a.js"
      crossorigin="anonymous"
    ></script>

    <link rel="icon" href="assets/images/pfp_neu_rund.png" />

    <!-- discord embed -->
    <meta property="og:title" content="bastian" />
    <meta
      property="og:description"
      content="A website for projects, socials & contact
    "
    />
    <meta property="og:image" content="/assets/pfp_neu_klein.png" />
    <meta name="theme-color" content="#8BD2EC" />
    <!-- discord embed end -->

    <!-- javascript -->
    <script src="./scripts/index.js"></script>
    <script src="./scripts/projects.js"></script>
    <!-- javascript end -->
  </head>
  <body>
    <a href="/">
      <button class="button-home">home</button>
    </a>

    <div class="button-container">
      <button
        class="open-popup-btn"
        data-title="this website"
        data-img="./assets/website.png"
        data-description="personal website"
        data-github="https://github.com/bastian-js/bbastian.xyz"
      >
        this website
      </button>
      <button
        class="open-popup-btn"
        data-title="anti-crash"
        data-img="./assets/anti-crash.png"
        data-description="basic anti-crash system for discord bots for discord.js v13 & v14"
        data-github="https://github.com/bastian-js/discord-anticrash-v13v14"
      >
        anti-crash
      </button>
      <button
        class="open-popup-btn"
        data-title="giveaway bot"
        data-img="./assets/giveaway_Bot.png"
        data-description="open source discord.js v14 giveaway bot with slash commands (out of service)"
        data-github="https://github.com/bastian-js/giveaway-bot"
      >
        giveaway bot
      </button>
      <button
        class="open-popup-btn"
        data-title="contact form"
        data-img="./assets/contact-form.png"
        data-description="basic contact form made in php and html, sending an email when someone wants to contact you"
        data-github="https://github.com/bastian-js/php-contact-form"
      >
        php contact form
      </button>
      <button
        class="open-popup-btn"
        data-title="der dümmste fliegt"
        data-img="./assets/ddf.png"
        data-description="you can create players and random questions will appear, the dumbest answer will get vote kicked out by the other players"
        data-github="https://bbastian.xyz/der-duemmste-fliegt"
      >
        der dümmste fliegt
      </button>
      <button
        class="open-popup-btn"
        id="calorie-calculator"
        data-title="calorie calculator"
        data-img="./assets/calorie-calc.png"
        data-description="a free and simple calculator to calculate your calories"
        data-github="https://bbastian.xyz/calories"
      >
        calorie calculator
      </button>
    </div>

    <div id="popup" class="popup">
      <div class="popup-content">
        <span id="close-popup-btn" class="close-btn">&times;</span>
        <h2 id="popup-title"></h2>
        <img id="popup-img" src="" alt="Project Photo" />
        <p id="popup-description"></p>
        <div class="github-link">
          <a id="popup-github-link" href="" target="_blank">
            <i class="fa-brands fa-github" id="github-link"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="copyright">
      <p class="copyright-p">2024 &copy; bastian</p>
    </div>
  </body>
</html>

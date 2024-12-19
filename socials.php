<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>bastian | socials</title>

    <!-- stylesheet -->
    <link rel="stylesheet" href="./styles/socials-style.css" />
    <link rel="stylesheet" href="./styles/style.css" />
    <!--stylesheet end-->

    <!-- fontawesome for icons -->
    <script
      src="https://kit.fontawesome.com/8c89019b79.js"
      crossorigin="anonymous"
    ></script>
    <!-- fontawesome end -->

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

    <!-- icon -->
    <link rel="icon" href="assets/pfp_neu_rund.png" />
    <!-- icon end -->

    <!-- custom script -->
    <script src="./scripts/index.js"></script>
    <!-- custom script end -->
  </head>
  <body>
    <a href="/">
        <button class="button-home">home
        </button>
      </div>
    </a>

    <header class="header">
      <img class="profile_pic" src="assets/pfp_neu_rund.png" alt="" />
      <p class="header_paragraph">hey, i'm bastian :)</p>
    </header>

    <div class="container-socials">
      <?php
      $config = json_decode(file_get_contents('config.json'), true);

      $host = $config['DB_SERVER'];
      $user = $config['DB_USERNAME'];
      $pass = $config['DB_PASSWORD'];
      $db = $config['DB_NAME'];

      // Create connection
      $conn = new mysqli($host, $user, $pass, $db);

      // Check connection
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }

      // Fetch all social entries
      $sql = "SELECT text, link, icon FROM Socials";
      $result = $conn->query($sql);

      // Check if there are any results
      if ($result->num_rows > 0) {
          while ($row = $result->fetch_assoc()) {
              echo '
              <a href="' . htmlspecialchars($row['link']) . '" target="_blank" class="social-button">
                <button class="button-links">
                  <i class="' . htmlspecialchars($row['icon']) . ' icon"></i> 
                  ' . htmlspecialchars($row['text']) . '
                </button>
              </a>';
          }
      } else {
          echo '<p>No social links found.</p>';
      }

      $conn->close();
      ?>
    </div>

    <div class="copyright">
      <p class="copyright-p">2024 &copy; bastian</p>
    </div>
  </body>
</html>

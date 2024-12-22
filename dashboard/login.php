<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>

    <link rel="icon" href="../assets/images/pfp_neu_rund.png" />

    <link rel="stylesheet" href="../../styles/style.css">
    <link rel="stylesheet" href="../../styles/login.css">
</head>
<body>
    <h1>Login</h1>
    <form method="post" action="../scripts/dashboard.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit">Login</button>
    </form>
    <?php session_start(); if (isset($_SESSION['error'])) { echo "<p style='color: red;'>" . htmlspecialchars($_SESSION['error']) . "</p>"; unset($_SESSION['error']); } ?>
</body>
</html>
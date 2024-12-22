<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: /dashboard/login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>

    <link rel="icon" href="../assets/images/pfp_neu_rund.png" />

    <link rel="stylesheet" href="../styles/dashboard.css">
</head>
<body>

    <?php include("./dashboard-navigation.php") ?>

    <div class="container">
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
        <p>This is your dashboard.</p>

        <a href="./dashboard-socials.php"><button class="button">Go to Socials Dashboard</button></a>
        
        <a href="logout.php" class="logout">Logout</a>
    </div>
</body>
</html>

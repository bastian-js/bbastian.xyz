<html>
<div id="mySidenav" class="sidenav">
    <?php 
    $currentFilename = basename($_SERVER["PHP_SELF"]);
        if($currentFilename == "dashboard-socials.php") { 
            echo "<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>";
        }
    ?>
    
        <h1>Dashboard</h1>
        <a href="./dashboard.php" <?php 
        if($currentFilename == "dashboard.php") {
            echo "class='active'";
        } ?>>Home</a>
        <a href="./dashboard-socials.php" <?php 
        if($currentFilename == "dashboard-socials.php") {
            echo "class='active'";
        } ?>>Socials</a>
    </div>
</html>
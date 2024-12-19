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

// Handle Add, Edit, and Delete Actions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    if ($action === 'add') {
        $text = $conn->real_escape_string($_POST['text']);
        $link = $conn->real_escape_string($_POST['link']);
        $icon = $conn->real_escape_string($_POST['icon']);

        $sql = "INSERT INTO Socials (text, link, icon) VALUES ('$text', '$link', '$icon')";
        $conn->query($sql);
    } elseif ($action === 'edit') {
        $id = intval($_POST['id']);
        $text = $conn->real_escape_string($_POST['text']);
        $link = $conn->real_escape_string($_POST['link']);
        $icon = $conn->real_escape_string($_POST['icon']);

        $sql = "UPDATE Socials SET text = '$text', link = '$link', icon = '$icon' WHERE id = $id";
        $conn->query($sql);
    } elseif ($action === 'delete') {
        $id = intval($_POST['id']);

        $sql = "DELETE FROM Socials WHERE id = $id";
        $conn->query($sql);
    }
}

// Fetch all entries
$socials = [];
$sql = "SELECT * FROM Socials";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $socials[] = $row;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>

    <link rel="stylesheet" href="./styles/style.css">

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .dashboard-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }
        button {
            padding: 10px 20px;
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #2563eb;
        }
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            z-index: 1000;
        }
        .popup.active {
            display: block;
        }
        .popup-header {
            font-size: 18px;
            margin-bottom: 10px;
        }
        .popup form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .popup form input, .popup form select {
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .popup form button {
            padding: 10px;
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .popup form button:hover {
            background-color: #2563eb;
        }
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
        .overlay.active {
            display: block;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #3b82f6;
            color: white;
        }
    </style>
</head>
<body>
    <div class="dashboard-buttons">
        <button onclick="openPopup('add')">Add</button>
        <button onclick="openPopup('edit')">Edit</button>
        <button onclick="openPopup('delete')">Delete</button>
    </div>

    <!-- Display Entries -->
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Text</th>
                <th>Link</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($socials as $social): ?>
                <tr>
                    <td><?= htmlspecialchars($social['id']) ?></td>
                    <td><?= htmlspecialchars($social['text']) ?></td>
                    <td><a href="<?= htmlspecialchars($social['link']) ?>" target="_blank"><?= htmlspecialchars($social['link']) ?></a></td>
                    <td><i class="<?= htmlspecialchars($social['icon']) ?>"></i> <?= htmlspecialchars($social['icon']) ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <div class="overlay" id="overlay"></div>

    <!-- Add/Edit/Delete Popup -->
    <div class="popup" id="popup">
        <div class="popup-header" id="popup-header"></div>
        <form id="popup-form" method="POST">
            <input type="hidden" name="id" id="entry-id">
            <div id="dropdown-container" style="display: none;">
                <select id="entry-select" name="id">
                    <option value="">Select a Social Link</option>
                    <?php foreach ($socials as $social): ?>
                        <option value="<?= htmlspecialchars($social['id']) ?>">
                            <?= htmlspecialchars($social['text']) ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>
            <input type="text" name="text" id="entry-text" placeholder="Social Media Name (e.g., Twitch)" style="display: none;">
            <input type="url" name="link" id="entry-link" placeholder="Link (e.g., https://twitch.tv)" style="display: none;">
            <input type="text" name="icon" id="entry-icon" placeholder="Icon Class (e.g., fa-brands fa-twitch)" style="display: none;">
            <input type="hidden" name="action" id="entry-action">
            <button type="submit" id="popup-button"></button>
        </form>
    </div>

    <script>
        const popup = document.getElementById("popup");
        const overlay = document.getElementById("overlay");
        const popupHeader = document.getElementById("popup-header");
        const popupButton = document.getElementById("popup-button");
        const form = document.getElementById("popup-form");
        const actionInput = document.getElementById("entry-action");
        const dropdownContainer = document.getElementById("dropdown-container");
        const entrySelect = document.getElementById("entry-select");

        function openPopup(action) {
            popup.classList.add("active");
            overlay.classList.add("active");

            // Reset the form and visibility of fields
            form.reset();
            dropdownContainer.style.display = action === "edit" || action === "delete" ? "block" : "none";
            document.getElementById("entry-text").style.display = action === "edit" || action === "add" ? "block" : "none";
            document.getElementById("entry-link").style.display = action === "edit" || action === "add" ? "block" : "none";
            document.getElementById("entry-icon").style.display = action === "edit" || action === "add" ? "block" : "none";

            if (action === "add") {
                popupHeader.textContent = "Add a Social Link";
                popupButton.textContent = "Add";
                actionInput.value = "add";
            } else if (action === "edit") {
                popupHeader.textContent = "Edit a Social Link";
                popupButton.textContent = "Save";
                actionInput.value = "edit";
            } else if (action === "delete") {
                popupHeader.textContent = "Delete a Social Link";
                popupButton.textContent = "Delete";
                actionInput.value = "delete";
            }
        }

        overlay.addEventListener("click", () => {
            popup.classList.remove("active");
            overlay.classList.remove("active");
        });
    </script>
</body>
</html>
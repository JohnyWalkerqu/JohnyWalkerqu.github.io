<?php

include "db_conn.php"

$new_firstname = $_POST["firstname"];
$new_lastname = $_POST["surname"];

echo "<p>New firstname: " . $new_firstname . "// New lastname: " . $new_lastname . "</p>";

$mysqli.close();

?>

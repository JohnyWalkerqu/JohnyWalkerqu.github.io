<?php
  $host_name = 'db5002300415.hosting-data.io';
  $database = 'dbs1852014';
  $user_name = 'dbu1147698';
  $password = 'jnlMJ!@S_!jladfn200198';

  $link = new mysqli($host_name, $user_name, $password, $database);

  if ($link->connect_error) {
    die('<p>Verbindung zum MySQL Server fehlgeschlagen: '. $link->connect_error .'</p>');
  } else {
    echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p>';
  }
?>

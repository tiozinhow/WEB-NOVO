<?php
$count = intval(file_get_contents("clicks.txt"));
$count++;
file_put_contents("clicks.txt", $count);
echo $count;
?>

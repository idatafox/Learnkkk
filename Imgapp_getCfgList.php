<?php
         header('Access-Control-Allow-Origin: *');
         header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
         header('Access-Control-Max-Age: 1000');
         $title = $_POST['topic']; 
         $pgCount = $_POST['pgCount']; 
         
         $fullFileName=$title . "_" . $pgCount;
         echo $fullFileName;
         
?>
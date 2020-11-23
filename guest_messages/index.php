<?php 

require_once(__DIR__."/../global/index.php");

$ch = curl_init(MESSAGES.'?'.$_SERVER['QUERY_STRING']);

curl_setopt_array($ch, [

    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_RETURNTRANSFER => 1,
    
]);

$resp = curl_exec($ch);
curl_close($ch);

echo $resp;




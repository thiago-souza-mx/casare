<?php

$ch = curl_init('https://www.casare.me/thaisandrafa');

curl_setopt_array($ch, [

    // Equivalente ao -X:
    CURLOPT_CUSTOMREQUEST => 'GET',

    // Equivalente ao -H:
    CURLOPT_HTTPHEADER => [
        'JsonOdds-API-Key: yourapikey'
    ],

    // Permite obter o resultado
    CURLOPT_RETURNTRANSFER => 1,
]);

$resp = curl_exec($ch);

$res = explode('<section id="videos">',$resp);
$res2 = explode('</section>',$res[1],2);
$no_video = $res[0].$res2[1];

$res = explode('<section id="gift-lists">',$no_video); 
$res2 = explode('</section>',$res[1],2);
$no_lista = $res[0].$res2[1];

$html = str_replace('/convites/thaisandrafa/check','https://www.casare.me/convites/thaisandrafa/check',$no_lista);

curl_close($ch);

print_r( $html);
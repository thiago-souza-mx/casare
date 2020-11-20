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

$name = false;
if(isset($_GET['n'])){
    $name = $_GET['n'];
}

$resp = curl_exec($ch);

$search = '<div class="row margin-top-10"><div class="col-xs-12 col-md-8 col-md-offset-2"><p class="text-danger hidden" id="rsvp-captcha-message">Não se esqueça de marcar a verificação abaixo!</p><div id="rsvp-recaptcha"></div></div></div>';
$search2 = '<div class="form-group col-xs-12 margin-bottom-0"><input class="form-control" id="email" name="email" placeholder="E-MAIL (exemplo@exemplo.com.br)" type="email"></div>';
$search3 = '<div class="form-group col-xs-12 margin-bottom-30"><input class="form-control tel" id="telefone" name="phone" placeholder="TELEFONE (somente números)" type="tel"></div>';
$res = explode($search,$resp);
$no_captcha = $res[0].$res[1];

$res = explode('<section id="gift-lists">',$no_captcha); 
$res2 = explode('</section>',$res[1],2);
$no_lista = $res[0].$res2[1];

$res = explode($search2,$no_lista);
$no_mail = $res[0].$res[1];

$res = explode($search3,$no_mail);
$no_phone =  $res[0].$res[1];

$html = str_replace('/convites/thaisandrafa/check','/check',$no_phone);
$html = str_replace('disabled="disabled"','',$html);
$html = str_replace('method="post"','method="get"',$html);

curl_close($ch);

print_r( $html);

?>

<script>
    function setName(name){
        document.getElementById('nome').value = name;
    }

    <?php if($name){
        echo "setName('{$name}');";
    } ?>
</script>

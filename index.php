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
$search1 = '<div class="row"><div class="col-md-12"><br><p class="text-danger hidden" id="messages-captcha-message">Não se esqueça de marcar a verificação abaixo!</p><div id="messages-recaptcha"></div></div></div>';

$search2 = '<div class="form-group col-xs-12 margin-bottom-0"><input class="form-control" id="email" name="email" placeholder="E-MAIL (exemplo@exemplo.com.br)" type="email"></div>';
$search3 = '<div class="form-group col-xs-12 margin-bottom-30"><input class="form-control tel" id="telefone" name="phone" placeholder="TELEFONE (somente números)" type="tel"></div>';

$res = explode($search,$resp);
$no_captcha = $res[0].$res[1];

$res = explode($search1,$no_captcha);
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

<style>

#guest-messages .guest-message-container{

}
#guest-messages .guest-message-container .guest-message-list{
        background: none!important;
    
}
#guest-messages .guest-message-container .guest-message-list .message-item{
    background: rgba(255,255,255,0.9);
    margin: 10px 20px;
    padding: 10px 25px;
}
#guest-messages .guest-message-container .guest-message-list .message-item > .row{
    border: 5px dashed #c4a46c6b;
    padding:10px 0;
}
#guest-messages .guest-message-container .guest-message-list h3 {
    color: #414143;
    font-family: great-vibes !important;
}
</style>

<script>
    function setName(name){
        document.getElementById('nome').value = name;
        document.getElementById('guest_message_name').value = name;
    }

    function setMessages( object ){
        if(!object)
            return ;
        let arrayMsg = "";
        let divider = `
            <div class="col-xs-12 col-md-4 col-md-offset-4 text-center" style="float:none;"><img alt="About section footer" class="about-footer img-responsive center-block" data-retina="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer@2x-d4480dfa294c40ac3b05367b031f3b08.png" src="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer-293437c969d731ccbc631b73ce5c4c80.png"></div>
        `;
        let n = 0;
        object.forEach(list=>{
            arrayMsg += `
                <div class="message-item">
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1 text-center">
                            <p class="lato-light-italic" data-anchor="guest-messages-section" data-behavior="view_more" data-button-class="text-center center-block text-lg pathway-font uppercase" data-max-height="120" style="height: auto; overflow: visible;">
                            ${listMsg.msg}
                            </p>
                            <h3>${list.name}</h3><span class="lato-light">${list.date}</span></div>
                    </div>
                </div>                
            `;
            n++;

            if(n < object.length)
                arrayMsg += divider
        })

        let html =`
        <div class="row">
            <div class="col-md-12">
                <div class="guest-message-container">
                    <div class="guest-message-list">

                        ${arrayMsg}

                    </div>
                </div>
        
            </div>
        </div>
        `;

        let container = document.createElement('div');
        container.setAttribute('class','row');
        container.innerHTML = html;
        
        document.getElementById('guest-messages').querySelector('.container').appendChild(container);
    };

    setMessages();


    <?php if($name){
        echo "setName('{$name}');";
    } ?>
</script>

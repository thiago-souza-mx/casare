<?php

$root = 'http://casamento.thaisethiago.tk/';
if(isset($_SERVER["AMBIENTE"]) && $_SERVER["AMBIENTE"] == "PODUCAO")
    $root = 'http://'.$_SERVER['HTTP_HOST'];

$app = 'thaisandrafa';
if(isset($_SERVER["AMBIENTE"]) && $_SERVER["AMBIENTE"] == "PODUCAO")
    $app = $_SERVER['APP_NAME'];

function Request($url){

    $ch = curl_init($url);
    curl_setopt_array($ch, [

        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_RETURNTRANSFER => 1,
    ]);

    $resp = curl_exec($ch);
    curl_close($ch);
    return $resp;
}

$name = false;
if(isset($_GET['n'])){
    $name = $_GET['n'];
}

$resp = Request('https://www.casare.me/'.$app);

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
        
        object = JSON.parse(object);
        let arrayMsg = "";
        let divider = `
            <div class="col-xs-12 col-md-4 col-md-offset-4 text-center" style="float:none;"><img alt="About section footer" class="about-footer img-responsive center-block" data-retina="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer@2x-d4480dfa294c40ac3b05367b031f3b08.png" src="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer-293437c969d731ccbc631b73ce5c4c80.png"></div>
        `;
        let n = 0;
        object.forEach(list=>{
            if(!!list.status){
                arrayMsg += `
                    <div class="message-item">
                        <div class="row">
                            <div class="col-xs-10 col-xs-offset-1 text-center">
                                <p class="lato-light-italic" data-anchor="guest-messages-section" data-behavior="view_more" data-button-class="text-center center-block text-lg pathway-font uppercase" data-max-height="120" style="height: auto; overflow: visible;">
                                ${list.msg}
                                </p>
                                <h3>${list.name}</h3><span class="lato-light">${list.date}</span></div>
                        </div>
                    </div>                
                `;
                n++;

                if(n < object.length)
                    arrayMsg += divider
            }
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
        if(!!n)
        document.getElementById('guest-messages').querySelector('.container').appendChild(container);
    };

    setMessages('<?php echo Request($root.'/guest_messages/messages.json'); ?>');

    <?php if($name){
        echo "setName('{$name}');";
    } ?>

    const Lista = {
        delay:200,
        button:{
            id:"lista_de_presentes",
            img:"/images/icone_presentes.png",
            w:"80px",
            h:"80px",
            rd:"30px 30px 15px 35px",
            bg:"#FFF",
            b:"20px",
            r:"20px",
            zi:"999999",
            sz:"80%",
            bgpos:"center",
            pos:"fixed",
            boxshw:"-3px 4px 8px -5px rgba(0,0,0,0.5)",
            cur:"pointer"
        },
        iframe:{
            id:"frame_lista",
            url:"/lista/?n=<?php echo $name; ?>",
            w:"400px",
            h:"550px",
            rd:"10px 10px 30px 10px",
            bg:"#FFF",
            pos:"fixed",
            b:"20px",
            r:"20px",
            zi:"999998",
            boxshw:"-2px 2px 15px -3px rgba(0,0,0,0.5)",            
        },
        init:()=>{
            if(window.outerWidth < 500){
                Lista.iframe.w = "100%"
                Lista.iframe.h ="100%"
                Lista.iframe.rd = "50px"
                Lista.iframe.b = "30px"
                Lista.iframe.r = "30px"
            }
            let btn = Lista.button
            let frm = Lista.iframe
            let button = document.createElement('div')
            button.id = btn.id
            button.setAttribute(
                'style',
                `background-image:url('${btn.img}');
                background-repeat:no-repeat;
                background-size:${btn.sz}; 
                background-color:${btn.bg};
                background-position:${btn.bgpos};
                width:${btn.w};
                height:${btn.h};
                border-radius:${btn.rd};
                position:${btn.pos};
                bottom:${btn.b};
                right:${btn.r};
                z-index:${btn.zi};
                box-shadow:${btn.boxshw};
                cursor:${btn.cur};
                transition:0.5s all;
                `
            ),
            button.setAttribute('onclick','Lista.open()')
            document.body.appendChild(button)

            let frame = document.createElement('iframe')
            frame.id = frm.id
            frame.setAttribute('frameborder',0)
            frame.setAttribute('class','hide')
            frame.height= frm.h 
            frame.scrolling="no"
            frame.setAttribute(
                'style',
                `
                background:${frm.bg};
                width:0;
                height:0;
                border-radius:${frm.rd};
                position:${frm.pos};
                bottom:${frm.b};
                right:${frm.r};
                z-index:${frm.zi};
                box-shadow:${frm.boxshw};
                display:none;
                transition:0.4s all;
                `
            ),
            document.body.appendChild(frame)
            Lista.setRota()
            Lista.setStyle()
            Lista.adjustButtons()

        },
        open:()=>{
            let btn = Lista.button
            let frm = Lista.iframe
            let iframe = document.getElementById(Lista.iframe.id)
            if(iframe.getAttribute('class').indexOf('hide')>-1){
                iframe.style.display = "block"
                iframe.classList.add('show')
                iframe.classList.remove('hide')
                
                setTimeout(()=>{
                    if(window.outerWidth < 500){
                        iframe.style.bottom = 0
                        iframe.style.right = 0
                        iframe.style.borderRadius = 0
                    }
                    iframe.style.width = frm.w
                    iframe.style.height = frm.h
                },100)
                Lista.toggleClose('show')
            }else{            
                iframe.style.width = 0
                iframe.style.height = 0 
                if(window.outerWidth < 500){
                    iframe.style.bottom = frm.b
                    iframe.style.right = frm.r
                    iframe.style.borderRadius = frm.rd
                }
                iframe.classList.remove('show')           
                setTimeout(()=>{
                    iframe.classList.add('hide')
                },500) 
                Lista.toggleClose('hide')
            }        
        },
        toggleClose:hash=>{
            let btn = Lista.button
            let button = document.getElementById(btn.id)
            let iframe = document.getElementById(Lista.iframe.id)
            if(hash == 'show'){
                button.style.borderRadius = "100%"
                button.style.boxShadow = "0 0 4px rgba(0,0,0,0.6)"
                button.style.transform = "rotate(-720deg)"
                button.style.width = "60px"
                button.style.height = "60px"
                button.style.backgroundImage = "url(/images/close.jpg)"
                iframe.src = Lista.iframe.url

            }else{
                button.style.borderRadius = btn.rd
                button.style.boxShadow = btn.boxshw
                button.style.transform = "rotate(0deg)"
                button.style.width = btn.w
                button.style.height = btn.h
                button.style.backgroundImage = `url(${btn.img})`
            }
            

        }, 
        setRota: ()=>{
            let elem = document.querySelector('#countdown'),

            html = `
                <section id="events">
                    <div class="events-background"></div>
                    <div class="container-fluid">
                        <h3 class="text-center section-title pathway"><span class="pad-h-5 pad-h-m-5 title marker font-size-50 font-size-m-50">{</span><span class="pad-h-50 title great-vibes font-size-40 pad-h-m-15 font-size-m-30">Localização</span><span class="pad-h-5 pad-h-m-5 title marker font-size-50 font-size-m-50">}</span></h3>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <div class="event-container">
                                    <div class="event-item">
                                        <div class="row margin-0 d-flex flex-row" >
                                            <div class="col-md-6 text-center pad-top-25 pad-bottom-10">
                                                <h4 class="great-vibes font-size-50 font-size-m-30 margin-v-5">Nossa Festa</h4>
                                                <div class="show-more-wrapper"><div data-height="fill" class="show-more" id="0037937888545931164" style="height: auto; overflow: visible;"><div class="lato-light font-size-17" data-behavior="view_more" data-button-class="text-center center-block lato-light" data-max-height="80" style="height: auto; overflow: visible;"><p>
                                                    </p><p>Comemoraremos nosso amor nesse espaço no qual achamos muito aconchegante e adequado para as pessoas que amamos!.
                                                    </p>
                                                    <p>Fica próximo ao  CEU Guarapiranga. 
                                                    </p>


                                                    <p>Mas se caso houver duvidas, podem nos chamar no whatsapp compartilharemos no localização em tempo real ;)</p><p></p></div></div></div>
                                                <p class="pathway font-size-20 font-size-m-18 uppercase">12/12 as 18:00</p>
                                                <hr class="margin-v-5 margin-h-100">
                                                <p class="lato-light font-size-17 address">Endereço<strong>&nbsp;&nbsp;⋅&nbsp;&nbsp;</strong>Est. da Baronesa ,&nbsp;13a <br>pq do lago &nbsp;-&nbsp;São Paulo &nbsp;-&nbsp;SP &nbsp;</p>
                                                <div class="rota-btns text-center pad-top-25 pad-bottom-10">
                                                    <a href="https://maps.app.goo.gl/aL3Z4NFJLG6o9xVG9" target="_blank" class="btn btn-danger">Abra no MAPs</a>
                                                    <a href="https://waze.com/ul?a=share_drive&locale=pt_BR&sd=4CliIkKx2B-DP&env=row&utm_source=waze_app&utm_campaign=share_drive" target="_blank" class="btn btn-info">Abra no Waze</a>
                                                </div>

                                            </div>

                                            <div class="col-md-6 pad-0">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3599280044477!2d-46.77113208588941!3d-23.698837484614867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5211568a6e1b%3A0x21c9e7abd2d3d831!2sEliane%20Festas!5e0!3m2!1spt-BR!2sbr!4v1606076788606!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

            elem.insertAdjacentHTML('beforebegin', html);
        },
        adjustButtons:()=>{

            let btns = document.querySelector('input[data-target="#rsvp-captcha-message"]').parentNode.parentNode
            btns.classList.add('d-flex','flex-row')
            btns = btns.childNodes
            btns.forEach(item=>{
                item.classList.add('mx-10')
            })

        },
        setStyle:()=>{
            let style=`
            <style>
                .d-flex{
                    display: flex;
                }
                .flex-row{
                    flex-direction: row;
                }
                .mx-10{
                    margin:10px 0;
                }
                #rsvp .confirm:hover, 
                #rsvp .maybe:hover, 
                #rsvp .decline:hover{
                    color: #ffc985!important;
                }
                @media (max-width:500px){
                    .flex-row{
                        flex-direction: column;
                        align-items: center;
                    } 
                    .rota-btns{
                        padding-bottom:15px;
                    }
                }
            </style>
            `
            document.head.insertAdjacentHTML('beforeend', style)
        }
    };

    Lista.init()

</script>

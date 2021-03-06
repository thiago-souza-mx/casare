<?php
session_start();
require_once(__DIR__."/global/index.php");

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
$status = false;
if(isset($_GET['n'])){
    $name = $_GET['n'];
    $json = Request(CONV_JSON.'?'.uniqid());
    $json = json_decode($json, true);    
    
    if(isset($json[$name])){
        $json[$name]['name'] = $name;
        $_SESSION['convidado'] = $json[$name];

        $cookie_name = "convidado";
        $cookie_value = json_encode( $json[$name] );
        setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

        if(!isset($json[$name]['status']) && !isset($_GET['rsvp'])){       
            header("Location:?rsvp=true#rsvp");
        }else{
            if(isset($json[$name]['status'])){
                if($json[$name]['status'] == "confirmou" ){
                    $status = true;
                    header("Location:/");
                }
            }
        }
    }
}
if(isset($_COOKIE['convidado'])){
    $convidado = json_decode( $_COOKIE['convidado'], true );
    $name = $convidado['name'];
    if($convidado['status'])
        $status = $convidado['status'];
   // print_r($convidado);
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

if($status == "confirmou"){
    $style = "
    <style>
        #nome, .btn-status{
            display:none
        } 
        .btn-status:nth-child(1){
            display:block;   
            margin: auto;
        }
    </style>";
    $html = str_replace('</head>', $style.'</head>',$html);
    $html = str_replace('olá, convidado,','olá, '.$name.',',$html);
    $html = str_replace('sua presença é muito importante para nós','sua presença já foi confimada.<br> Caso queira cancelar é só clicar em não vou abaixo.',$html);
}


echo $html;

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
        divframe:{
            id:"divframe",
            w:"400px",
            h:"calc( 100% - 40px )",
            rd:"10px 10px 30px 10px",
            pos:"fixed",
            b:"20px",
            r:"20px",
            zi:"999998",
            boxshw:"-2px 2px 15px -3px rgba(0,0,0,0.5)",
        },
        iframe:{
            id:"frame_lista",
            bg:"#FFF",
            url:"/lista/?n=<?php echo $name; ?>",
            w:"100%",
            h:"100%", 
            rd:"0 0 30px 10px",        
        },
        init:()=>{

            setInterval(()=>{
                Lista.timer();
            },1000*10)
            if(window.outerWidth < 500){
                Lista.divframe.w = "100%"
                Lista.divframe.h ="100%"
                Lista.divframe.rd = "50px"
                Lista.divframe.b = "30px"
                Lista.divframe.r = "30px"
            }
            let btn = Lista.button
            let frm = Lista.iframe
            let divfrm = Lista.divframe
            let button = document.createElement('div')
            button.id = btn.id
            button.setAttribute(
                'style',`
                background-image:url('${btn.img}');
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
            )
            button.setAttribute('onclick','Lista.open()')
            document.body.appendChild(button)

            let frame = document.createElement('iframe')
            frame.id = frm.id
            frame.setAttribute('frameborder',0)            
            frame.height= frm.h 
            //frame.scrolling="no"
            frame.setAttribute(
                'style',`
                width:${frm.w};
                height:${frm.h};
                border-radius:${frm.rd};
                background:${frm.bg};
            `)
            
            let divframe = document.createElement('div')
            divframe.id = divfrm.id
            divframe.setAttribute('class','hide')
            divframe.setAttribute(
                'style',`                
                width:0;
                height:0;
                border-radius:${divfrm.rd};
                position:${divfrm.pos};
                bottom:${divfrm.b};
                overflow: hidden;
                right:${divfrm.r};
                z-index:${divfrm.zi};
                box-shadow:${divfrm.boxshw};
                display:none;
                transition:0.4s all;
            `) 
            divframe.innerHTML = html = `
            <div class="app_toolbar" style="
                background: #FFF;
                display: flex;
                align-items: center;
                padding: 5px 20px;
            ">
                <div class="app_title" style="
                    flex: 1;
                    text-align: center;
                ">
                    Lista de Presentes
                </div>
                <ul class="app_buttons" style="
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    padding: 0;
                    margin: 0;
                    list-style:none;
                ">
                    <li onclick="Lista.maximize(this)" style="
                        cursor:pointer;
                    ">🗖</li>
                </ul>
            </div>
            `

            divframe.appendChild(frame)
            document.body.appendChild(divframe)

            let aviso = document.createElement('div')
            aviso.id = "aviso"
            aviso.setAttribute('class','over')
            aviso.setAttribute('style',`
                position: fixed;
                bottom: 35px;
                right: 91px;
                z-index: 99997;
                width: 140px;
                height: 50px;
                text-align: left;
                background: #eb3f66;
                color: #FFF;
                padding: 5px 15px;
                border-radius: 15px 0 0 15px;
                overflow: hidden;
                transition:0.4s all;
            `)
            aviso.innerHTML = `
                <span>Veja nossa Lista de presentes</span>
            `
            document.body.appendChild(aviso)

            Lista.setRota()
            Lista.setStyle()
            Lista.adjustButtons()

            /*let section = document.getElementById('by_our_side')
            document.getElementById('by_our_side').remove()
            document.getElementById('events').insertAdjacentHTML('beforeend', "<div id='insert'></div>");
            document.getElementById('insert').append(section)   */        

        },
        open:()=>{
            let btn = Lista.button
            let frm = Lista.iframe
            let divfrm = Lista.divframe
            let diviframe = document.getElementById(divfrm.id)
            if(diviframe.getAttribute('class').indexOf('hide')>-1){
                diviframe.style.display = "block"
                diviframe.classList.add('show')
                diviframe.classList.remove('hide')
                
                setTimeout(()=>{
                    if(window.outerWidth < 500){
                        diviframe.style.bottom = 0
                        diviframe.style.right = 0
                        diviframe.style.borderRadius = 0
                    }
                    diviframe.style.width = divfrm.w
                    diviframe.style.height = divfrm.h
                },100)
                Lista.toggleClose('show')
            }else{            
                diviframe.style.width = 0
                diviframe.style.height = 0 
                if(window.outerWidth < 500){
                    diviframe.style.bottom = divfrm.b
                    diviframe.style.right = divfrm.r
                    diviframe.style.borderRadius = divfrm.rd
                }
                diviframe.classList.remove('show')           
                setTimeout(()=>{
                    diviframe.classList.add('hide')
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
                                                    <a href="https://waze.com/ul/h6gy9ptzbk" target="_blank" class="btn btn-info">Abra no Waze</a>
                                                </div>

                                            </div>

                                            <div class="col-md-6 pad-0">
                                                <iframe style="min-height: 300px; width: 100%;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3599280044477!2d-46.77113208588941!3d-23.698837484614867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5211568a6e1b%3A0x21c9e7abd2d3d831!2sEliane%20Festas!5e0!3m2!1spt-BR!2sbr!4v1606076788606!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
                item.classList.add('mx-10','btn-status')
            })

        },
        maximize: e =>{
            let divfrm = Lista.divframe
            let diviframe = document.getElementById(divfrm.id)
            if(diviframe.getAttribute('class').indexOf('full')>-1){
                diviframe.classList.remove('full')
                diviframe.style.width = divfrm.w
                e.innerText = "🗖"
            }else{
                diviframe.classList.add('full')
                diviframe.style.width = "calc( 100% - 40px )"
                e.innerText = "🗕"
            }
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
                .over{
                    width:0!important;
                    padding:0!important;
                }
                @media (max-width:800px){
                    .flex-row{
                        flex-direction: column;
                        align-items: center;
                    } 
                    .escutcheon-container{
                        display:none!important;
                    }
                    .rota-btns{
                        padding-bottom:15px;
                    }
                    #about .couple-name .container-fluid > div{
                        white-space: pre-wrap;
                    }
                }
            </style>
            `
            document.head.insertAdjacentHTML('beforeend', style)
        },
        timer:()=>{
            let aviso =  document.getElementById('aviso');
            if(aviso.getAttribute('class').indexOf('over')>-1){
                aviso.classList.remove('over');
            }else{
                aviso.classList.add('over');
            }
           

        }
    };

    Lista.init()
    function removeSlick(){
        setTimeout(()=>{
            document.querySelector('#by_our_side .slick-initialized').classList.remove('slick-slider');
            document.querySelectorAll('#by_our_side .slick-slider').forEach(item=> item.classList.remove('slick-slider'))
        },1000 );
    }
    removeSlick()
    document.querySelectorAll('.character-item').forEach(item =>{
        item.addEventListener('click',()=>{
            removeSlick()
        })
    })

    function setName(name){
        
        document.getElementById('nome').value = name;
        document.getElementById('guest_message_name').value = name;
    }

    function setMessages( object ){
        if(!object)
            return ;

        console.log(object);
        
       // object = JSON.parse(object);
        let arrayMsg = "";
        let divider = `
            <div class="col-xs-12 col-md-4 col-md-offset-4 text-center" style="float:none;"><img alt="About section footer" class="about-footer img-responsive center-block" data-retina="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer@2x-d4480dfa294c40ac3b05367b031f3b08.png" src="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer-293437c969d731ccbc631b73ce5c4c80.png"></div>
        `;
        let n = 0;
        object.forEach(list=>{
            //list = object[list];
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

    setMessages(<?php echo Request($root.'/guest_messages/messages.json'); ?>);

    <?php if($name){
        echo "setName('{$name}');";
    } ?>

    

</script>

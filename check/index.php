<?php
session_start();

require_once(__DIR__."/../global/index.php");

$ch = curl_init(CONV_JSON.'?'.uniqid());

curl_setopt_array($ch, [

    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_RETURNTRANSFER => 1,
    
]);

$resp = curl_exec($ch);
curl_close($ch);

$json = json_decode($resp, true);

//print_r($json);

if(isset($_GET['action'])){
    if($_GET['action'] == "convidados"){
        $json[$_SESSION['name']]['companions_attributes'] = $_GET['guest']['companions_attributes'];
    }elseif($_GET['action'] == "sozinho"){
        if($json[$_SESSION['name']]['companions_attributes'])
            unset( $json[$_SESSION['name']]['companions_attributes']);
    }

    $ch = curl_init(CONVITES.'?'.uniqid());

    curl_setopt_array($ch, [

        // Equivalente ao -X:
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_POSTFIELDS => ["body"=>json_encode($json)]
    ]);

    $resp = curl_exec($ch);
    curl_close($ch);

    //print_r($_GET);

    header("Location:/ok");
}else{
    $nome = strtolower($_GET['name']);
    $check = false;
    $confirm = false;
    $link = '/';
    foreach($json as $k => $v){
        if(trim( strtolower($k)) == trim($nome))
            $check = $k;
    }
    if($check){
        if(isset($_GET['confirm'])){
            $confirm = $json[$check]['status'] = "confirmou";
            $link = $json[$check]['sim'];

        }
        elseif(isset($_GET['maybe'])){
            $json[$check]['status'] = $_GET['maybe'];
            $redirect =$json[$check]['nao'];
        }
        elseif(isset($_GET['decline'])){
            $json[$check]['status'] = $_GET['decline'];
            $redirect =$json[$check]['nao'];
        }
    }

    $ch = curl_init(CONVITES.'?'.uniqid());

    curl_setopt_array($ch, [

        // Equivalente ao -X:
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_POSTFIELDS => ["body"=>json_encode($json)]
    ]);

    $resp = curl_exec($ch);
    curl_close($ch);

    $_SESSION['name'] = $check;
    $_SESSION['status'] = $json[$check]['status']; 

    if($confirm){
        
            
        $ch = curl_init($link);

        curl_setopt_array($ch, [
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_RETURNTRANSFER => 1,
        ]);

        $resp = curl_exec($ch);
        curl_close($ch);
            $resp = str_replace('<title>Casare</title>','<title>Thais & Thiago</title>',$resp);
            $resp = str_replace('href="/convites/','href="/check?action=sozinho&',$resp);
            $resp = str_replace('method="post"','method="get"',$resp);
            $resp = str_replace('</form>','<input type="hidden" name="action" value="convidados"></form>',$resp);
        print_r($resp);
     
        ?>
        
        <script>
            let form = document.getElementById('guestForm').querySelector('form');
            form.action = '/check?action=convidados';

            document.querySelectorAll('form input[value=child]').forEach(item=>{
                let child = item.parentNode;
                child.querySelector('label').innerText = 'Idade da criança';
                let placeholder =child.querySelector('input[placeholder="exemplo@exemplo.com.br"]')
                if(placeholder){
                    placeholder.setAttribute('placeholder','Idade de 0 a 12')
                    placeholder.setAttribute('type','number')
                    placeholder.setAttribute('min','0')
                    placeholder.setAttribute('max','12')
                }
            })
        </script>

        <?php

    }else
        header("Location:".$redirect);

}

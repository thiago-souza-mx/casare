<?php
session_start();
$root = 'http://'.$_SERVER['HTTP_HOST'];
$ch = curl_init($root.'/rest/rest.json?'.uniqid());

curl_setopt_array($ch, [

    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_RETURNTRANSFER => 1,
    
]);

$resp = curl_exec($ch);
curl_close($ch);

$json = json_decode($resp, true);

if(isset($_GET['action'])){
    if($_GET['action'] == "convidados"){
        $json[$_SESSION['name']]['companions_attributes'] = $_POST['guest']['companions_attributes'];
    }elseif($_GET['action'] == "sozinho"){
        if($json[$_SESSION['name']]['companions_attributes'])
            unset( $json[$_SESSION['name']]['companions_attributes']);
    }

    $ch = curl_init($root.'/rest/?'.uniqid());

    curl_setopt_array($ch, [

        // Equivalente ao -X:
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_POSTFIELDS => ["body"=>json_encode($json)]
    ]);

    $resp = curl_exec($ch);
    curl_close($ch);

    header("Location:/ok");
}else{
    $nome = strtolower($_POST['name']);
    $check = false;
    $confirm = false;
    $link = '/';
    foreach($json as $k => $v){
        if(trim( strtolower($k)) == trim($nome))
            $check = $k;
    }
    if($check){
        if(isset($_POST['confirm'])){
            $confirm = $json[$check]['status'] = "confirmou";
            $link = $json[$check]['sim'];

        }
        elseif(isset($_POST['maybe'])){
            $json[$check]['status'] = $_POST['maybe'];
            $redirect =$json[$check]['nao'];
        }
        elseif(isset($_POST['decline'])){
            $json[$check]['status'] = $_POST['decline'];
            $redirect =$json[$check]['nao'];
        }
    }

    $ch = curl_init($root.'/rest/?'.uniqid());

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

    if($confirm != false){
        
            
        $ch = curl_init($link);

        curl_setopt_array($ch, [
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_RETURNTRANSFER => 1,
        ]);

        $resp = curl_exec($ch);
        curl_close($ch);
            $resp = str_replace('<title>Casare</title>','<title>Thais & Thiago</title>',$resp);
            $resp = str_replace('href="/convites/','href="/check?action=sozinho&',$resp);
        print_r($resp);
     
        ?>
        
        <script>
            let form = document.getElementById('guestForm').querySelector('form');
            form.action = '/check?action=convidados';
        </script>

        <?php

    }else
        header("Location:".$redirect);

}

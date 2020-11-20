<?php
header("Access-Control-Allow-Headers: *"); 
header("Access-Control-Allow-Origin: *"); 

$success = false;
if(isset($_GET)){
    
    if($_GET['action'] == "aproval"){

        $json =  file_get_contents( "messages.json" );

        $json[$_GET['id']]['aproval'] = $_GET['status']; 
        file_put_contents( "messages.json" , json_encode($json ) );

    }else{
        $submit = $_GET['guest_message'];
        $name = $submit['name'];
        $mail = $submit['mail'];
        $msg = $submit['message'];

        if(!empty($name) && !empty($mail) && !empty($msg)){

            setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
            date_default_timezone_set('America/Sao_Paulo');
            $date = strftime('%d de %B de %Y', strtotime('today'));

            $data = array(
                "msg" => $msg,
                "mail" => $mail,
                "name" => $name,
                "date" => $date,
                "time" => date("h:i:s"),
                "aproval" => 0
            );
            
            $json =  file_get_contents( "messages.json" );

            if(empty($json)){
                $json = [];
            }else{
                $json = json_decode( $json, true );
            }

            $json[] = $data; 
            file_put_contents( "messages.json" , json_encode($json ) );
            
            //print_r($data);
            $success = true;
        }
    }
}
if($success){   
    $msg = array(
        "status"=>"200",
        "message"=>[
            "message_success"=>"mensagem enviada"
        ]        
    );
    echo json_encode($msg);
}else{
    http_response_code(404);
}

?>



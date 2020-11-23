<?php 

header("Access-Control-Allow-Headers: *"); 
header("Access-Control-Allow-Origin: *"); 

$root = 'http://casamento.thaisethiago.tk/';
if(isset($_SERVER["AMBIENTE"]) && $_SERVER["AMBIENTE"] == "PODUCAO")
    $root = 'http://'.$_SERVER['HTTP_HOST'];

if(isset($_POST['body']) && !empty($_POST['body'])){
	$data = $_POST['body'];
}else{
	$data = file_get_contents("php://input");
}

file_put_contents($root."/lista/lista.json", $data );

print_r( file_get_contents( $root."/lista/lista.json" ) ); 

//print_r($data);
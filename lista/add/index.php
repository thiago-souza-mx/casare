<?php 

header("Access-Control-Allow-Headers: *"); 
header("Access-Control-Allow-Origin: *"); 

if(isset($_POST['body']) && !empty($_POST['body'])){
	$data = $_POST['body'];
}else{
	$data = file_get_contents("php://input");
}

file_put_contents("../lista.json", $data );

print_r( file_get_contents( "../lista.json" ) ); 

print_r($data);
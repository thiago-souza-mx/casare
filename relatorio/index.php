<?php
session_start();

$root = 'http://casamento.thaisethiago.tk';
if(isset($_SERVER["AMBIENTE"]) && $_SERVER["AMBIENTE"] == "PODUCAO")
    $root = 'http://'.$_SERVER['HTTP_HOST'];
if(isset($_GET['server']))
    print_r($_SERVER);
$soma = [
    "adult" => 0,
    "child" => 0,
    "aproved" => 0,
    "new" => 0
];
$id= 0;

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

$json = Request($root.'/rest/rest.json?'.uniqid());
$json = json_decode($json, true);

$messages = Request($root.'/guest_messages/messages.json?'.uniqid());
$messages = json_decode($messages, true);

?>
<head>
  <meta http-equiv="refresh" content="30">
  <title>Relatório de convidados</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/eb50c7c190.js" crossorigin="anonymous"></script>
<style>
.total {
    color: white;
    position: fixed;
    bottom: 0;
    background: steelblue;
    width: 100%;
    padding: 10px;
}
.total h2{
    font-family: Roboto;
    font-weight: 100;
    font-size: 18px;
}
.total h2 b{
    font-weight: 600;
}
.menu-lateral{
    position: fixed;
    right: -100px;
    top: 150px;
    transform: rotate(-90deg);
}
.menu-lateral ul{
    display:flex;
    list-style:none;
    padding:0;
}
.menu-lateral ul li {
    border-radius: 20px 20px 0 0;
    cursor: pointer;
    transition: 0.4s all;
    display: flex;
    box-shadow: 0 0 5px black;
}

.menu-lateral ul li:hover {
    margin-top: -10px;
}

.menu-lateral ul li a{
    padding: 13px;
    color:#FFF;
    text-decoration:none;
}
section{
    display: none;
    padding-right:20px;
}
</style>
<script>

function toggleHash(){
        setTimeout(() => {
            let hash = window.location.hash;
            console.log(hash)
            if(hash == "#mensagens"){
                document.getElementById('mensagens').style.display = "block";
                document.getElementById('convites').style.display = "none";
            }else{
                document.getElementById('mensagens').style.display = "none";
                document.getElementById('convites').style.display = "block";
            }
            
        }, 200);
        
    }

    toggleHash();
</script>
</head>

<section id="convites">

<div class="container-fluid" style="padding-bottom:50px">
	<div class="row">
		<div class="col-md-12">
			<table class="table">
				<thead>
					<tr>
						<th>
							Nome
						</th>
						<th>
							Status
						</th>
                        <th>
                            Acompanhantes
                        </th>
                        <th>URL</th>
                        <th>
                        </th>
					</tr>
				</thead>
				<tbody>
                    <?php foreach($json as $k => $v): 
                        $add = false;
                                                    
                        $count = [
                            "adult" => 0,
                            "child" => 0
                        ];
                        $class = '';
                        $html = '';
							if(isset($v['status']) ){
                                if($v['status'] == "confirmou"){
                                    $class = "table-success";
                                    if(strrpos(strtolower($k), " e ") !== false )
                                        $count['adult'] += 2;
                                    else
                                        $count['adult'] += 1;
                                    if(isset($v['companions_attributes'])){
                                        $add = $v['companions_attributes'];
                                    }
                                }elseif($v['status'] == "não vou")
                                    $class = "table-danger";
                                else
                                    $class = "table-warning";
                            }                        
                                                    
                            if($add){

                                foreach($add as $item):  
                                    if(!empty($item['name'])){
                                        $count[$item['kind']] = $count[$item['kind']]+1;
        
                                        $html .="
                                    
                                        <ul style='display:inline-block; list-style:none;'>
                                            <b>".( $item['kind'] == 'adult' ? 'Adulto' : 'Criança')."</b>
                                            <li>
                                                <b>Nome:</b>
                                                {$item['name']} 
                                            </li>
                                            <li>
                                                <b>".( $item['kind'] == 'adult' ? 'Email' : 'Idade')."</b>
                                                {$item['email']} 
                                            </li>
        
                                        </ul>";                                        
        
                                    }                            
                                endforeach; 
                            } 

                            $total = $count['adult']+$count['child'];
                            $total = $total >0 ? $total == 0 ? $total." pessoa" : $total.' pessoas' : '' ;
                            $adult = $count['adult'] >0 ? $count['adult'] == 1 ? $count['adult']." adulto" : $count['adult']." adultos" : '';
                            $child = $count['child'] >0 ? $count['child'] == 1 ? $count['child']." criança" : $count['child']." crianças" : '';
                  
                        ?> 
					<tr class="<?php echo $class; ?>">
						<td>
							<?php echo ucwords($k) ;?>
						</td>
						<td>
							<?php echo isset($v['status']) ? ucwords($v['status']) : "Aguardando Confirmação"; ?>
						</td>
                        <td>
                            <b><?php echo empty($adult.$child) ? 'N/A' : $adult.' '.$child; ?> </b>
                        </td>
                        <td style="display:flex; flex-direction:row; justify-content:center;">
                            <input type="text" value="http://casamento.thaisethiago.tk/?n=<?php echo urlencode($k); ?>#rsvp">
                            <a class='' target="_blank" href="https://api.whatsapp.com/send?phone=&text=<?php echo urlencode("http://casamento.thaisethiago.tk/?n=".str_replace(" ","+",trim($k))."#rsvp"); ?>">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 39 39" width="39" height="39" style="enable-background:new 0 0 39 39;" xml:space="preserve">
                                    <style type="text/css">
                                        .st0{fill:#00E676;}
                                        .icon_logo_white{fill:#FFFFFF;}
                                    </style>

                                    <path class="st0" d="M10.7,32.8l0.6,0.3c2.5,1.5,5.3,2.2,8.1,2.2l0,0c8.8,0,16-7.2,16-16c0-4.2-1.7-8.3-4.7-11.3         c-3-3-7-4.7-11.3-4.7c-8.8,0-16,7.2-15.9,16.1c0,3,0.9,5.9,2.4,8.4l0.4,0.6l-1.6,5.9L10.7,32.8z"/>
                                    <path class="icon_logo_white" d="M32.4,6.4C29,2.9,24.3,1,19.5,1C9.3,1,1.1,9.3,1.2,19.4c0,3.2,0.9,6.3,2.4,9.1L1,38l9.7-2.5         c2.7,1.5,5.7,2.2,8.7,2.2l0,0c10.1,0,18.3-8.3,18.3-18.4C37.7,14.4,35.8,9.8,32.4,6.4z M19.5,34.6L19.5,34.6c-2.7,0-5.4-0.7-7.7-2.1         l-0.6-0.3l-5.8,1.5L6.9,28l-0.4-0.6c-4.4-7.1-2.3-16.5,4.9-20.9s16.5-2.3,20.9,4.9s2.3,16.5-4.9,20.9C25.1,33.8,22.3,34.6,19.5,34.6         z M28.3,23.5L27.2,23c0,0-1.6-0.7-2.6-1.2c-0.1,0-0.2-0.1-0.3-0.1c-0.3,0-0.5,0.1-0.7,0.2l0,0c0,0-0.1,0.1-1.5,1.7         c-0.1,0.2-0.3,0.3-0.5,0.3h-0.1c-0.1,0-0.3-0.1-0.4-0.2l-0.5-0.2l0,0c-1.1-0.5-2.1-1.1-2.9-1.9c-0.2-0.2-0.5-0.4-0.7-0.6         c-0.7-0.7-1.4-1.5-1.9-2.4l-0.1-0.2c-0.1-0.1-0.1-0.2-0.2-0.4c0-0.2,0-0.4,0.1-0.5c0,0,0.4-0.5,0.7-0.8c0.2-0.2,0.3-0.5,0.5-0.7         c0.2-0.3,0.3-0.7,0.2-1c-0.1-0.5-1.3-3.2-1.6-3.8c-0.2-0.3-0.4-0.4-0.7-0.5h-0.3c-0.2,0-0.5,0-0.8,0c-0.2,0-0.4,0.1-0.6,0.1         l-0.1,0.1c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.2-0.3,0.4-0.5,0.6c-0.7,0.9-1.1,2-1.1,3.1l0,0c0,0.8,0.2,1.6,0.5,2.3l0.1,0.3         c0.9,1.9,2.1,3.6,3.7,5.1l0.4,0.4c0.3,0.3,0.6,0.5,0.8,0.8c2.1,1.8,4.5,3.1,7.2,3.8c0.3,0.1,0.7,0.1,1,0.2l0,0c0.3,0,0.7,0,1,0         c0.5,0,1.1-0.2,1.5-0.4c0.3-0.2,0.5-0.2,0.7-0.4l0.2-0.2c0.2-0.2,0.4-0.3,0.6-0.5c0.2-0.2,0.4-0.4,0.5-0.6c0.2-0.4,0.3-0.9,0.4-1.4         c0-0.2,0-0.5,0-0.7C28.6,23.7,28.5,23.6,28.3,23.5z"/>
                                    
                                </svg>
                            </a>
                            
                        </td>
                        <td>
                            <?php echo $add != false ? 
                                "<button type='button' class='btn btn-info' style='float: right;' onclick=\"expand('target_{$id}',this)\">
                                    Exibir Acompanhantes
                                </button>"
                                :'';
                            ?>
                        </td>
					</tr>
                    <tr>
                        <td colspan="5" <?php echo $add != false ? "id='target_{$id}'" : ''  ; ?> style="display:none;     background: #dff2ff;" >
                            <div> 

                                <b>Acompanhantes: Total de <?php echo $total." sendo ".$adult.' '.$child; ?> </b>
                                <div> 
                                    <?php echo $html; ?>
                                    
                                </div>
                            </div>
                        </td>
                    </tr>
                    <?php 
                        $id++;
                        $soma['adult'] += $count['adult']; 
                        $soma['child'] += $count['child']; 
                    ?>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</div>
</div>

<div class="total">
    <h2><b>CONFIRMADOS:</b> <b><?php echo $soma['adult']; ?></b> adultos e <b><?php echo $soma['child']; ?></b> crianças 
    <span style=" margin-left:20px;"><b>TOTAL: <?php echo $soma['child']+$soma['adult']; ?></b></span>
    <span style=" margin-left:20px;"><b>CONVITES: <?php echo count($json); ?></b> convidados</span>
    </h2>
</div>

</section>

<section id="mensagens">

<div class="container-fluid" style="padding-bottom:50px">
	<div class="row">
		<div class="col-md-12">
			<table class="table">
				<thead>
					<tr>
						<th>
							Nome
						</th>
						<th>
                            Mensagem
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            E-mail
                        </th>
                        <th>
                            
                        </th>
					</tr>
				</thead>
				<tbody>
                    <?php 
                    if(is_array($messages))
                    foreach($messages as $id => $message): ?>
                    <tr class="<?php echo $message['status'] > 0 ? "table-success" : ''; ?>"> 
                        <td><?php echo $message['name']; ?></td>
                        <td><?php echo $message['msg']; ?></td>
                        <td><?php echo $message['status']; ?></td>                    
                        <td><a href="mailto:<?php echo $message['mail']; ?>"><i class="fas fa-envelope" style="font-size:32px"></i></a></td>                    
                        <td>
                            
                            <button type='button' class='btn btn-danger' style='float: right;' onclick="request('<?php echo $root.'/guest_messages/?action=remove&id='.$id; ?>')">
                                <i class="fas fa-trash-alt"></i>
                            </button>

                            <?php if( $message['status'] == 0 ){ ?>
                                <button type='button' class='btn btn-success' style='float: right;' onclick="request('<?php echo $root.'/guest_messages/?action=aproval&id='.$id.'&status=1'; ?>')">
                                    <i class="fas fa-check"></i>
                                </button>                                
                            <?php } ?>

                        </td>                    
                    </tr>   
                       
                    <?php 

                        if($message['status'] == 1)                
                            $soma['aproved'] += 1; 
                        else    
                            $soma['new'] += 1;
                    endforeach; ?>              
				</tbody>
			</table>
		</div>
	</div>
</div>

<div class="total">
    <h2><b>MENSAGENS:</b> <b><?php echo $soma['aproved']; ?></b> aprovadas e <b><?php echo $soma['new']; ?></b> novas 
    <span style=" margin-left:20px;"><b>TOTAL: <?php echo count($messages); ?></b></span>
    </h2>
</div>

</section>

<div class="menu-lateral">
    <ul>
        <li class="bg-warning" onclick=" toggleHash()"><a href="#convites">CONVITES</a></li>
        <li class="bg-info" onclick=" toggleHash()"><a href="#mensagens">MENSAGENS</a></li>
    </ul>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script>
    function expand(e, elem){
        $('#'+e).slideToggle('400','linear');
        if( elem.innerText.indexOf('Exibir')>-1){
            elem.innerText ='Ocultar Acompanhantes'
            elem.classList.remove('btn-info');
            elem.classList.add('btn-secondary');
        }else{
            elem.innerText ='Exibir Acompanhantes'
            elem.classList.add('btn-info');
            elem.classList.remove('btn-secondary');
        }

    };

    function request(url){
        fetch(url).then(res=>{            
            res.json().then(res=>{
                if(res.status == "200")
                    location.reload();
                else
                    console.log(res);
            });
        })
    }


</script>
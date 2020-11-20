<?php
session_start();

//print_r($_SESSION);

$soma = [
    "adult" => 0,
    "child" => 0
];
$id= 0;
$ch = curl_init('https://www.eadsegurancadotrabalho.com.br/api/rest/rest.json?'.uniqid());

curl_setopt_array($ch, [

    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_RETURNTRANSFER => 1,
    
]);

$resp = curl_exec($ch);
curl_close($ch);

$json = json_decode($resp, true);

?>
<head>
  <meta http-equiv="refresh" content="30">
  <title>Relatório de convidados</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
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
</style>
</head>


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
                                                <b>Email:</b>
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
                        <td colspan="3" <?php echo $add != false ? "id='target_{$id}'" : ''  ; ?> style="display:none;     background: #dff2ff;" >
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
    <span style=" margin-left:20px;"><b>CONVITE: <?php echo count($json); ?></b> convidados</span>
    </h2>
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

</script>
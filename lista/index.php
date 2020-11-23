<?php 
$name = false;
if(isset($_GET['n'])){
    $name =  $_GET['n'];
}
require_once(__DIR__."/../global/index.php");

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

$lista = Request(LISTA_JSON.'?'.uniqid());
$lista = json_decode($lista, true);
?>

<html lang="pt-br"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <style>
        @font-face{
            font-family:pathway;
            src:url("https://assets3.casare.me/assets/PathwayGothicOne-Regular-55c793ab083ba2ef76608262c8bc2ca4.ttf")
        }
        @font-face{
            font-family:great-vibes;
            src:url("https://assets3.casare.me/assets/GreatVibes-Regular-1211c114bb12184d2efb8b1f3ae8433e.ttf")
        }
        .great_vibes{
            font-family:great-vibes;
        }
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      .img-produto{
          width:100%;
          height:250px;
          background-size:cover;
          background-repeat:no-repeat;
          background-position:center;
          border-bottom:1px solid #d9dcdf;
      }

      .disabled {
          opacity:0.6;
      }
      .disabled .img-produto{
          filter: grayscale(1);
      }
    </style>
    <!-- Custom styles for this template -->

  </head>
  <body cz-shortcut-listen="true">
   
<main role="main" >

  <section class=" text-center pt-5" style="background-color:#e7e0d8;">
    <div class="container">
      <h1 class="great_vibes">Nossa Lista</h1>
      <p class="lead text-muted">
      Deixamos aqui alguns ítens de desejo para quem quiser nos homenagear.
      </p>
      <p>
        <a href="conta.php" class="btn btn-danger my-2">Depositar em conta</a>
        <a href="pix.php" class="btn btn-success my-2">Fazer um PIX</a>
      </p>
    </div>
    <img  class="mt-5" data-retina="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer@2x-d4480dfa294c40ac3b05367b031f3b08.png" src="https://assets3.casare.me/assets/wedding/classic/champagne_blue/about-section-footer-293437c969d731ccbc631b73ce5c4c80.png">
  </section>

  <div class="album py-5 " style="background-color:#e7e0d8;">
    <div class="container">

      <div class="row">
 

        <!-- Card -->
        <?php foreach($lista as $id => $item): ?>
        <div class="col-md-4">
            <div id="card_<?php echo $id; ?>" class="card mb-4 shadow-sm rounded-lg <?php echo $item['status']>0 ? "disabled" : "" ; ?>">
                <div class="img-produto rounded-top" style="background-image:url('<?php echo $item['image']; ?>');" >
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <?php echo $item['item']; ?>
                    </p>
                    <div class="dropdown-divider"></div>

                    <div class="d-flex justify-content-center align-items-center">  
                        <?php if($item['status'] == 0){ ?>    
                            <button class="btn btn-primary my-2" onclick="select(<?php echo $id; ?>, '<?php echo $item['item']; ?>')" >Selecionar</button>    
                        <?php }else{
                            echo "Já escolhido!";
                        } ?> 
                    </div>            
                </div>
            </div>        
        </div>
        <?php endforeach; ?>
        <!-- Card -->

      </div>
    </div>
  </div>

</main>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel">Nome Item</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <p class="text-center">Para confirmar o presente, informe seus dados abaixo.</p>
            <form role="form">
                <input type="hidden" class="form-control" id="id_item" />
				<div class="form-group">					 
					<label for="exampleInputEmail1">
						Nome
					</label>
					<input type="text" class="form-control" placeholder="Seu Nome" id="nome" value="<?php echo $name ?? ""; ?>"/>
				</div>
				<div class="form-group">					 
					<label for="exampleInputPassword1">
						Telefone
					</label>
					<input type="text" class="form-control" placeholder="Seu Celular" id="telefone" />
				</div>

			</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Sair</button>
        <button type="button" id="salvar" class="btn btn-success" onclick="doar()" data-dismiss="modal">Confirmar Presente</button>
      </div>
    </div>
  </div>
</div>

<a href="#" style="display:none" id="add" class='btn btn-warning' data-toggle="modal" data-target="#exampleModal"></a>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script>

    function select(id, nome){

        document.getElementById('ModalLabel').innerText = nome;
        document.getElementById('id_item').value = id;
        document.getElementById('add').click();

    }
    function doar(){
        let id = document.getElementById('id_item').value;

        obj ={
            doador:{
                nome: document.getElementById('nome').value,
                telefone: document.getElementById('telefone').value
            }
        }

        fetch('<?php echo LISTA; ?>?action=doar&id='+id,{
            method:"POST",
            body: JSON.stringify(obj)
        }).then(res =>{
            res.json().then(resp =>{
                console.log(resp)
                if(resp.message.message_success == "sucesso")
                    adiciona(id)
            })
        })
    }

    function adiciona(id){
        alert("card_"+id)
    }
</script>
</body>
</html>
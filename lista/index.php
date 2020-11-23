<?php 

if(isset($_GET['n'])){
    //echo $_GET['n'];
}
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

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm rounded-lg">
            <div class="img-produto rounded-top" style="background-image:url('https://http2.mlstatic.com/kit-mop-mor-limpeza-pratica-com-2-esfrego-2-balde-4-refil-D_NQ_NP_958294-MLB25966262738_092017-F.jpg');" ></div>
            <div class="card-body">
                <p class="card-text">
                    MOP da MOR
                </p>
                <div class="dropdown-divider"></div>

              <div class="d-flex justify-content-between align-items-center">              
              <div class="custom-control custom-checkbox" style="flex: 1;">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1" style="width: 100%; cursor:pointer;">
                        Selecionar este!
                    </label>
                </div>
                <!--small class="text-muted">9 mins</small-->
              </div>
            </div>
          </div>
        </div>

        <!-- Card -->

      </div>
    </div>
  </div>

</main>


<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</body>
</html>
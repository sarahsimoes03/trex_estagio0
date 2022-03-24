// Primeiro sempre as variaveis.
var trex ,trex_running;
var solo, soloimg;



function preload(){  //carregamento de imagens
 // variavel para carregar a imagem de animação do Trex correndo




}//chave de fechamento do function preload

function setup(){// criar os sprites e configurações do jogo
  createCanvas(600,200); //criar a tela do jogo

    //criar sprite trex
    trex=createSprite(50,160,20,50); 
    

    //criar solo



}//chave de fechamento do function setup

function draw(){ // o que vai executar varias vezes dentro do codigo.
  background("white"); //pintar a tela, sempre a primeira coisa do function draw.
  





  drawSprites(); // desenhar sprites, sempre é a ultima coisa dentro do function draw.
}// chave de fechamento do function draw.

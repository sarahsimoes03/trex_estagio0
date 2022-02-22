// Primeiro sempre as variaveis.
var trex ,trex_running;
var solo, soloimg;



function preload(){  //carregamento de imagens
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png"); // variavel para carregar a imagem de animação do Trex correndo




}//chave de fechamento do function preload

function setup(){// criar os sprites e configurações do jogo
  createCanvas(600,200); //criar a tela do jogo

    //criar sprite trex
    trex=createSprite(50,160,20,50); 
    trex.addAnimation("running",trex_running); // adicionar animação no trex
    trex.scale=0.5; // alterar tamanho da animação
    trex.x=30; // alterar a posição x do trex.

    //criar solo
    solo=createSprite(200,180,400,20);





}//chave de fechamento do function setup

function draw(){ // o que vai executar varias vezes dentro do codigo.
  background("white"); //pintar a tela, sempre a primeira coisa do function draw.
  
// instrução para trex pular.
if(keyDown("space")){
  trex.velocityY=-10;
}
//gravidade do trex
trex.velocityY=trex.velocityY+0.5;




trex.collide(solo);
  drawSprites(); // desenhar sprites, sempre é a ultima coisa dentro do function draw.
}// chave de fechamento do function draw.

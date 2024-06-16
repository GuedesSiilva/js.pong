let xBola=300;
let yBola=200;
let diametro=15;
let raio=diametro/2 
let velocidadeBola=5
let alturaBola=5
let xRaquete=5
let yRaquete=300
let raqueteComprimento=10
let raqueteAltura = 90
let xraqueteRival=585
let yraqueteRival=200
let velocidadeYRival;
let meusPontos=0;
let pontosRival=0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,128,0);
  rect(300,0,10,600)
  bola();
  movimentaBola();
  colisaoBola();
  raquete();
  movimentaRaquete();
  colisaoRaquete();
  raqueteRival();
  movimentaRival();
  colisaoRaqueteRival();
  Placar();
  
}

function bola() {
  circle(xBola,yBola,diametro);
}
function movimentaBola(){
  xBola += velocidadeBola
  yBola += alturaBola
}
function colisaoBola(){
  if (xBola+raio > width ||
      xBola-raio < 0){
    velocidadeBola *= -1
  }
  if (yBola+raio > height ||
     yBola-raio < 0 ){
    alturaBola *= -1
  }
}
function raquete(){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura)
}
function raqueteRival(){
  rect(xraqueteRival,yraqueteRival,raqueteComprimento,raqueteAltura)
}
function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete+= -10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete+= 10
  }
}
function colisaoRaquete(){
  if (xBola - raio < xRaquete + raqueteComprimento
     && yBola -raio <yRaquete + raqueteAltura
     && yBola +raio > yRaquete){
    velocidadeBola *= -1
  }
}
function movimentaRival(){
  velocidadeYRival = yBola - yraqueteRival - raqueteComprimento / 2 -30 
  yraqueteRival += velocidadeYRival
}
function colisaoRaqueteRival(){
  if (xBola + raio > xraqueteRival + raqueteComprimento
     && yBola +raio >yraqueteRival - raqueteAltura
     && yBola -raio > yraqueteRival ){
    velocidadeBola *= -1
  }
}
function Placar(){
  stroke(300)
  textAlign(CENTER)
  textSize(20)
  fill(color(47,79,79))
  rect(125,10,50,25)
  fill(300)
  text(meusPontos,150,30)
  fill(color(47,79,79))
  rect(425,10,50,25)
  fill(300)
  text(pontosRival,450,30)
  if (xBola > 590){
    meusPontos += 1;
    ponto.play()
  }
  if (xBola < 10){
    pontosRival += 1;
    ponto.play()
  }
}
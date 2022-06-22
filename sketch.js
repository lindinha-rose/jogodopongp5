let xbolinha=300;
let ybolinha=200;
let diametro=30;
let raio = diametro / 2;

let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 mostraBolinha();
 movimentaBolinha();
 vereficacolisaoBorda()

}
  function mostraBolinha(){
   circle(xbolinha, ybolinha, diametro)
  }

funtcion movimentoBolinha()

 ybolinha += velocidadeYbolinha;

  
if (xbolinha + raio > width||
  xbolinha - raio < 0){
velocidadeXbolinha *= -1;
  
 }

if (ybolinha + raio > height||
  ybolinha - raio < 0){
   velocidadeYbolinha  *= -1;
}



   function mostraRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
   }









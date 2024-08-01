//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raiobolinha = tamanhoBolinha/2;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//aqui estou configurando a raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraraquete = 10;
let alturaraquete = 90;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(178,34,34); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    moveBolinha();
    //chamando a borda
    Borda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();
}

//função bolinha 
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}

//função cria raquete
function criaRaquete(xRaquete, Yraquete, larguraRaquete, alturaraquete){
    fill("blue");
    Rect(xRaquete, Yraquete, larguraRaquete, alturaraquete); 
}
//função responsável por movimentar a raquete
function movimentaRaquete(){
    if(keyIsdown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}
//função responsável por quando a bolinha bate na raquete, retornar em direção contrária.
function colideRaquete(){

    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha+ raioBolinha > yRaquete){
        xvelocidadebolinha *= -1;
    }
}
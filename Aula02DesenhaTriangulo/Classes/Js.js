class Ponto {
    // atributos
    x;
    y;
  // construtores
  constructor(x,y) {

    this.x = x;
    this.y = y;

  } 
  get X() {
      return this.x;
  }
  set X(newX) {
      this.x = newX;
  }

get Y() {
    return this.y;
}
set Y(newY) {
    this.y = newY;
}

// metodos (açoes)
toString(){
    return "(" + this.x + "," + this.y + ")";
}
}// fim da class ponto


class Linha{
    pontoA;
    pontoB;

    constructor(pontoA,pontoB) {
        this.pontoA = pontoA;
        this.pontoB = pontoB;

    }
    get pontoA(){
        return this.pontoA;
    }
    get pontoB(){
        return this.pontoB;
    }

    toString(){
        return this.pontoA.toString()+ " - " + this.pontoB.toString();
    }


}// fim da classe linha

// mandando conteudo para no html 
var pontos=[];
var linhas=[];
var triangulos=[];
var retangulos=[];

function guardarPonto() {
    var x = document.getElementById('txTX').value;
    var y = document.getElementById('txTY').value;
    //instanciação da classe  ponto
    var ponto =  new Ponto(x,y); // recebe nosso objeto ponto
    // Adcionando o ponto a estrutura
    pontos.push(ponto);

    var s1 = document.getElementById('selectPontos');
    var s2 = document.getElementById('selectPontoA');
    var s3 = document.getElementById('selectPontoB');
    var t1 = document.getElementById('selectPontoTriA');// pontos do triangulo
    var t2 = document.getElementById('selectPontoTriB');// pontos do triangulo
    var t3 = document.getElementById('selectPontoTriC');// pontos do triangulo
     var q1 = document.getElementById('selectPontoInicialQuadrados');//ponto do retangulo
     var r1 =  document.getElementById('selectPontoRet');

    carregaSelect(s1,pontos);
    carregaSelect(s2,pontos);
    carregaSelect(s3,pontos);
    carregaSelect(t1,pontos);
    carregaSelect(t2,pontos);
    carregaSelect(t3,pontos);
    carregaSelect(r1,pontos);
    carregaSelect(q1, pontos);


}

function carregaSelect(caixa, lista){
    caixa.innerHTML = "";
    for(var i = 0; i < lista.length; i++) {
        var tag = document.createElement('option');
        tag.setAttribute('VALUE', i);
        tag.innerHTML = lista[i].toString();
        caixa.appendChild(tag);
    }
}

function guardarLinha(){
    var indexPA = document.getElementById('selectPontoA').value;
    var indexPB = document.getElementById('selectPontoB').value;

    var pontoA = pontos[indexPA];
    var pontoB = pontos[indexPB];

    var linha = new Linha(pontoA, pontoB);
    linhas.push(linha);

    var Selecte = document.getElementById('selectLinhas');
    carregaSelect(Selecte, linhas);


}

function desenhaLinha(){
    var indexL = document.getElementById('selectLinhas').value;
    var linha = linhas[indexL];

    var pen = document.getElementById('myCanvas').getContext("2d");
    pen.beginPath();
    pen.moveTo(linha.pontoA.X, linha.pontoA.Y);
    pen.lineTo(linha.pontoB.X, linha.pontoB.Y);
    pen.strokeStyle = '#2277bb';
    pen.stroke();


}
/** ************************************************************FUNÇÕES DO TRIANGULO */
class Triangulo{
    pontoA;
    pontoB;
    pontoC;

    constructor(pontoA,pontoB,pontoC) {
        this.pontoA = pontoA;
        this.pontoB = pontoB;
        this.pontoC = pontoC;
    }
    get pontoA(){
        return this.pontoA;
    }
    get pontoB(){
        return this.pontoB;
    }
    get pontoC(){
        return this.pontoC;
    }

    toString(){
        return this.pontoA.toString()+ " - " + this.pontoB.toString()+ " - " + this.pontoC.toString();
    }


}// fim da classeTRIANGULO
function guardarTriangulo(){
    var indexPA = document.getElementById('selectPontoTriA').value;
    var indexPB = document.getElementById('selectPontoTriB').value;
    var indexPC = document.getElementById('selectPontoTriC').value;

    var pontoA = pontos[indexPA];
    var pontoB = pontos[indexPB];
    var pontoC= pontos[indexPC];

    var t= new Triangulo(pontoA, pontoB, pontoC);
    triangulos.push(t);

    var Selecte = document.getElementById('selectLinhasTriangulo');
    carregaSelect(Selecte, triangulos);


}// FIM DO GUARDA TRIANGULO

function desenhaTriangulo(){
    var indexL = document.getElementById('selectLinhasTriangulo').value;
    var tri = triangulos[indexL];

    var pen = document.getElementById('myCanvas').getContext("2d");
    pen.beginPath();
    pen.moveTo(tri.pontoA.X, tri.pontoA.Y);
    pen.lineTo(tri.pontoB.X, tri.pontoB.Y);
    pen.lineTo(tri.pontoC.X, tri.pontoC.Y);
    pen.lineTo(tri.pontoA.X, tri.pontoA.Y);
    pen.strokeStyle = '#2277bb';
    pen.stroke();


}

/***************** FUNÇÕES RETANGULO***************************/

class Retangulo {
    //Atributo de instancia
    pontoA;
    w;
    h;
    //Atributo de classe
    pontoB;
    pontoC;
    pontoD;

    //Construtor
    constructor(pontoA,w,h) {
        this.pontoA = pontoA;
        this.w=w;
        this.h=h;
        this.pontoB = new Ponto(parseInt(this.pontoA.X) + parseInt(w) , parseInt(this.pontoA.Y));
        this.pontoC = new Ponto(parseInt(this.pontoA.X )+ parseInt(w) , parseInt(this.pontoA.Y) + parseInt(h));
        this.pontoD = new Ponto(parseInt(this.pontoA.X), parseInt(this.pontoA.Y) + parseInt(h));
    }
    get pontoA(){
        return this.pontoA;
    }
    get pontoB(){
        return this.pontoB;
    }
    get pontoC(){
        return this.pontoC;
    }
    get pontoD(){
        return this.pontoD;
    }

    toString(){
        return this.pontoA.toString()+ " - " + this.pontoB.toString()+ " - " + this.pontoC.toString()+ " - " + this.pontoD.toString();
    }
}



function guardarRetangulo(){
    
    var W = parseInt(document.getElementById('rWidth').value);
    var H = parseInt(document.getElementById('rHeight').value);
    var P = parseInt(document.getElementById('selectPontoRet').value);


    var pontoA = pontos[P];    

    var ret = new Retangulo(pontoA, W, H);
    retangulos.push(ret);

   var Selecte = document.getElementById('selectRetangulo');
    carregaSelect(Selecte, retangulos);


}

function desenhaRetangulo(){
   var indexL = document.getElementById('selectRetangulo').value;
    var retangulo = retangulos[indexL];

    var pen = document.getElementById('myCanvas').getContext("2d");
    pen.beginPath();
    pen.moveTo(retangulo.pontoA.X, retangulo.pontoA.Y);
    pen.lineTo(retangulo.pontoB.X, retangulo.pontoB.Y);
    pen.lineTo(retangulo.pontoC.X, retangulo.pontoC.Y);
    pen.lineTo(retangulo.pontoD.X, retangulo.pontoD.Y);
    pen.lineTo(retangulo.pontoA.X, retangulo.pontoA.Y);  

    pen.strokeStyle = '#2277bb';
    pen.stroke();


}
/* **********************************************          HERANÇA*/
class Quadrado extends Retangulo{

    constructor(pontoA, lado){
        super(pontoA,lado,lado)/* o super é sempre a 1º coisa dentro do construtor, 
        faz mensão ao  construtor PAI RETANGULO  , temos que ter o mesmo numero de parametros, ou atribuilos*/
    }

}

function guardarQuadrado(){
    
    var indexPA = parseInt(document.getElementById('selectPontoInicialQuadrados').value);
    var lado = parseInt(document.getElementById('txtLado').value);



    var pontoA = pontos[indexPA];    
    var quadrado = new Quadrado(pontoA,lado);
    retangulos.push(quadrado);
    var s1 = document.getElementById('selectRetangulo');
    var s2 = document.getElementById('selectQuadrados');
    carregaSelect(s1, retangulos);
    carregaSelectQuadrados(s2, retangulos);  


}
function desenhaQuadrado(){
    var indexL = document.getElementById('selectRetangulo').value;
     var retangulo = retangulos[indexL];
 
     var pen = document.getElementById('myCanvas').getContext("2d");
     pen.beginPath();
     pen.moveTo(retangulo.pontoA.X, retangulo.pontoA.Y);
     pen.lineTo(retangulo.pontoB.X, retangulo.pontoB.Y);
     pen.lineTo(retangulo.pontoC.X, retangulo.pontoC.Y);
     pen.lineTo(retangulo.pontoD.X, retangulo.pontoD.Y);
     pen.lineTo(retangulo.pontoA.X, retangulo.pontoA.Y);  
 
     pen.strokeStyle = '#2277bb';
     pen.stroke();
 
 
 }

 function carregaSelectQuadrados(caixa, lista){
    caixa.innerHTML = "";
    for(var i = 0; i < lista.length; i++) {
        if(lista[i] instanceof Quadrado){
        var tag = document.createElement('option');
        tag.setAttribute('VALUE', (i));
        tag.innerHTML = lista[i];
        caixa.appendChild(tag);
        }
       
    }
}
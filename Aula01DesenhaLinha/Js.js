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

    carregaSelect(s1,pontos);
    carregaSelect(s2,pontos);
    carregaSelect(s3,pontos);


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


var escaloes = [1350,1500,1700,1900,2100,2400,2700,3000,3300,3700,4000]; // variaveis globais
var impostosRenda = [15,16,17.6,20,22.4,24,27.5,28.7,31.5,33,33.5];
var cadProfessor = [];

class Professor {
    nProfessor;  //atributos	      
    nome;			   
    morada;	      
    dataNasc;		      
    nif;			            
    ss;				     
    escalao;		      
    tempoService;
   /*                     nosso construtor*/
    constructor (nProfessor, nome,morada,dataNasc, nif,ss,escalao,tempoService) {
        
        
        this.nProfessor = nProfessor;
        this.nome= nome;
        this.morada = morada;
        this.dataNasc = dataNasc;
        this.nif = nif;
        this.ss = ss;
        this.escalao = escalao;
        this.tempoService = tempoService;
    } 

    get nProfessor(){
        return this.nProfessor
    }
    get nome(){
        return this.nome
    }
    get morada(){
        return this.morada
    }
    get dataNasc(){
        return this.dataNasc
    }
    get nif(){
        return this.nif
    }
    get ss(){
        return this.ss
    }
    get escalao(){
        return this.escalao
    }
    get tempoService(){
        return this.tempoService
    }
 /*                  sets */
    set nProfessor (newnProfessor){
       this.nProfessor = newnProfessor;
    }
    set nome(newNome){
         this.nome = newNome;
    }
    set morada(newMorada){
        this.morada = newMorada;
    }
    set dataNasc(newDataNasc){
        this.dataNasc = newDataNasc;
    }
    set nif(newNif){
         this.nif = newNif;
    }
    set ss(newSs){
        this.ss = newSs;
    }
    set escalao(newEscalao){
        this.escalao = newEscalao;
    }
    set tempoService(newTempoService){
        this.tempoService= newTempoService;
    }

  
    /** metodo salario  */
    calculoSalario(mes){
 
        var salario = escaloes[this.escalao];     
        var impRendaSalario =  ((impostosRenda[this.escalao] * salario ) /100); 
        var impADSE = ((3 * salario) /100);
        var impSeguranca = ((11 * salario) /100);
        var beneficio = 21 * 4.77;
        var ferias =  salario -( impostosRenda +impADSE + impSeguranca ) ;
        var totalSalario =  beneficio + (salario  - ( impRendaSalario + impADSE + impSeguranca )) ;
        if(mes == 7 || mes == 11 ) {
            return totalSalario + ferias;
        }
        else if(mes == 8){
            return totalSalario - beneficio;
        }
        else{
            return totalSalario;
        } 
    } 



}// fim da class professor comum


class ProfessorContratado extends Professor{
    profissionalizado; //atributos
    
  
    constructor(nProfessor, nome,morada,dataNasc, nif,ss,profissionalizado,tempoService){ //construtores

            super(nProfessor, nome,morada,dataNasc, nif,ss,profissionalizado,tempoService); //super é invocação do construtor do PAI 
            this.profissionalizado = profissionalizado;
            
    }

    get profissionalizado() { /*set e gets*/
        return this.profissionalizado
    }

    set profissionalizado(newProfissionalizado){
        this.profissionalizado = newProfissionalizado;
    }

    calculoSalario(mes){ //metodo calcula salario
        var salario = super.calculoSalario(mes) + ((3 * escaloes[this.escalao] )/ 100);
             return salario;
         
    }  
    

}// fim da class ProfessoresContratados

function guardarProfessor(){
    var numeroP = document.getElementById('nProf').value;
    var nomeP = document.getElementById('nNome').value;
    var moradaP = document.getElementById('nMorada').value;
    var dataNacP = document.getElementById('nDataNasc').value;
    var nifP = document.getElementById('nNIF').value;
    var ssP = document.getElementById('nSS').value;
    var escalaoP = document.getElementById('nEscalao').value;
    var tempoP = document.getElementById('nTempo').value;
    var contratoP = document.getElementById('nContrato').value;
    var profissionalizado = document.getElementById('nProfissionalizado').value;
    

    if(contratoP == '0'){
        var pro = new ProfessorContratado(numeroP, nomeP, moradaP,dataNacP, nifP,ssP, profissionalizado, tempoP);
        cadProfessor.push(pro);
      }
    else if(contratoP == '1' ){
        var pro = new Professor(numeroP, nomeP, moradaP,dataNacP, nifP,ssP, escalaoP, tempoP);
        cadProfessor.push(pro);
    }
    // else if(escalaoP == !('')){
    //     var pro = new Professor(numeroP, nomeP, moradaP,dataNacP, nifP,ssP, escalaoP, tempoP);
    //     cadProfessor.push(pro);

    // }
    carregaSelect(pro); // adcionando nosso carregarSelect no professor
}
function carregaSelect(professor){
   var caixa = document.getElementById("bootProf");
   var TR = document.createElement("tr");
   var TD1= document.createElement("td");
   var TD2= document.createElement("td");
   var TD3= document.createElement("td");
   var TD4= document.createElement("td");
   TD.innerHTML = professor.nProfessor;
   TD2.innerHTML = professor.nome;
   TD3.innerHTML = professor.escalao;
   TD4.innerHTML = professor.calculoSalario(1);
   TR.appendChild(TD1);
   TR.appendChild(TD2);
   TR.appendChild(TD3);
   TR.appendChild(TD4);
   caixa.appendChild(TR);





}

 
	



//atividade 1

let Inputcomp = document.querySelector("#Inputcomp");
let Inputlar = document.querySelector("#Inputlar");
let Btresultado = document.querySelector("#Btresultado");
let H3area = document.querySelector("#H3area");

function verificarArea(){
    let comp = Number(Inputcomp.value);
    let lar = Number(Inputlar.value);

    H3area.innerHTML = "A &aacuterea &eacute; " + comp * lar + "m&sup2";
}

Btresultado.onclick = function(){
    verificarArea();
}

//atividade 2 

let inputCavalo = document.querySelector('#inputCavalo');
let btComprar = document.querySelector('#btComprar');
let h3Resultado = document.querySelector('#h3Resultado');

function verificarFerradura(){
    let cavalo = Number(inputCavalo.value);

    h3Resultado.innerHTML = 'Para Esse Quantidade de Cavalo Voc&ecirc; Precisara de ' + cavalo * 4 + ' Ferraduras';
}

btComprar.onclick = function(){
    verificarFerradura();
}

//atividade 3

let inputBroa = document.querySelector("#inputBroa");
let inputPao = document.querySelector("#inputPao");
let btQnt = document.querySelector("#btQnt");
let h3Resultado3 = document.querySelector("#h3Resultado3");

function verificarDados(){
    let Broa = Number(inputBroa.value);
    let Pao = Number(inputPao.value);
    let total = Pao * 0.12 + Broa * 1.50;
    let cotacao10Prc = total + (total * (10/100));

    h3Resultado3.innerHTML = "Este foi o valor total das vendas " + (Broa * 1.50 + Pao * 0.12).toFixed(2) + 
    " R$" + "<br>" + "Este &eacute; o valor que deve ser guardado " + (cotacao10Prc - total).toFixed(2) + " R$";   
}
btQnt.onclick = function(){
    verificarDados();
}

//atvidade 4

let inputNome = document.querySelector('#inputNome');
let inputIdade = document.querySelector('#inputIdade');
let btVerificar = document.querySelector('#btVerificar');
let h3CalcularDiasAtv4 = document.querySelector('#h3CalcularDiasAtv4');

function verificarDias4(){
    let nome = String(inputNome.value);
    let idade = Number(inputIdade.value);

    h3CalcularDiasAtv4.innerHTML = nome + ' , ' + 'Voc&ecirc; ja Viveu ' + idade * 395 + ' Dias';
}

btVerificar.onclick = function(){
    verificarDias4();
}

//atividade 5

let inputPeso = document.querySelector("#inputPeso");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado6 = document.querySelector("#h3Resultado6");

function verificarTotal(){
    let peso = Number(inputPeso.value);

    h3Resultado6.innerHTML = "Este &eacute; o valor do prato " + peso * 12 + " R$"
}

btCalcular.onclick = function(){
    verificarTotal();
}

//atividade 6

let inputGasolina = document.querySelector('#inputGasolina');
let btValor = document.querySelector('#btValor');
let h3Atv6 = document.querySelector('#h3Atv6');

function verificarVlr(){
    let gasolina = Number(inputGasolina.value);

    h3Atv6.innerHTML = 'Voc&ecirc; colocou ' + (gasolina / 5.46).toFixed(2) + ' Litros de Gasolina';
}

btValor.onclick = function(){
    verificarVlr();
}

//atividade 7

let inputDia = document.querySelector("#inputDia");
let inputMes = document.querySelector("#inputMes");
let btCalcular7 = document.querySelector("#btCalcular7");
let h3Resultado7 = document.querySelector("#h3Resultado7");

function verificarDias(){
    let dia = parseInt(document.getElementById("inputDia").value);
    let mes = parseInt(document.getElementById("inputMes").value);

    h3Resultado7.innerHTML = (mes - 1) * 30 + dia + ' Dias';
}

btCalcular7.onclick = function(){
    verificarDias();
}

//atividade 8

let inputPequeno = document.querySelector('#inputPequeno');
let inputMedio = document.querySelector('#inputMedio');
let inputGrande = document.querySelector('#inputGrande');
let btCamisas = document.querySelector('#btCamisas');
let h3Resultado8 = document.querySelector('#h3Resultado8');

function verificarCamisas(){
    let pequeno = Number(inputPequeno.value);
    let medio = Number(inputMedio.value);
    let grande = Number(inputGrande.value);

    h3Resultado8.innerHTML = 'Valor a Pagar R$ ' + (pequeno * 10 + medio * 12 + grande * 15);
}

btCamisas.onclick = function(){
    verificarCamisas();

}

//atividade 9

let btDistancia = document.querySelector('#btDistancia');
let h3ResultadoAtv9 = document.querySelector("#h3ResultadoAtv9");
function calcularDistancia(){
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2- y2, 2));

    h3ResultadoAtv9.innerHTML = 'A Distancia entre os Pontos &eacute;: ' + distancia.toFixed(2);
}

btDistancia.onclick = function(){
    calcularDistancia();
}

//atividade 10

function calcularAtv10() {
    var inputNmrDias = document.getElementById('inputNmrDias').value;
    var anos = Math.floor(inputNmrDias / 365);
    var meses = Math.floor((inputNmrDias % 365) / 30);
    var dias = (inputNmrDias % 365) % 30;

    var resultado = "&Aacute f&aacutebrica est&aacute sem acidentes a "
        + anos + " anos, " + meses + " meses, " + dias + " dias.";
    document.getElementById('h3ResultadoAtv10').innerHTML = resultado;
}

//atividade 11

let inputsalario = document.querySelector("#inputsalario");
let btcalcular11 = document.querySelector("#btcalcular11");
let h3resultado11 = document.querySelector("#h3resultado11");

function verificarsalario(){
    let salario = Number(inputsalario.value);

    let cotacao15Prc = salario + (salario * (15/100));
    let cotacao8Prc = salario + (salario * (8/100));

    h3resultado11.innerHTML = "Este &eacute o salario inicial " + salario + "R$" + "<br>" +  "O aumento do salario foi " + 
    (salario + cotacao15Prc) + "R$" + "<br>" + "Este &eacute o salario com desconto " + (salario + cotacao8Prc) + "R$";

}

btcalcular11.onclick = function(){
    verificarsalario();
}

//atividade 12

function calcular() {
    var inputNmrAtv12 = document.getElementById('inputNmrAtv12').value;
    var centena = Math.floor(inputNmrAtv12 / 100);
    var dezena = Math.floor((inputNmrAtv12 % 100) / 10);
    var unidade = inputNmrAtv12 % 10;

    var resultado = "CENTENA = " + centena + "<br>" + "DEZENA = " + dezena + "<br>" + "UNIDADE = " + unidade + ".";
    document.getElementById('h3ResultadoAtv12').innerHTML = resultado;
}

//atividade 13

let inputraio = document.querySelector("#inputraio");
let btcalcular13 = document.querySelector("#btcalcular13");
let h3resultado13 = document.querySelector("#h3resultado13");

function verificararea(){
    let raio = Number(inputraio.value);
    


    h3resultado13.innerHTML = "A area da pizza &eacute " + raio * raio * 3.14 + "cm&sup2;";
}
btcalcular13.onclick = function(){
    verificararea();
}

//atividade 14

function calcularDivisao() {
    var total = parseFloat(document.getElementById("total").value);
    
  var valorPorPessoa = Math.floor(total / 3);
    var resto = total % 3;
    
  var carlos = valorPorPessoa;
    
  var andre = valorPorPessoa;
    var felipe = valorPorPessoa + resto;
    

  document.getElementById("result").innerHTML = "Carlos vai pagar: R$" + carlos.toFixed(2) + "<br>" + 
  "Andr&eacute vai pagar: R$" + andre.toFixed(2) + "<br>" + 
  "Felipe vai pagar: R$" + felipe.toFixed(2);
  }
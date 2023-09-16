const arraydoadores = []





function menu() {
    var opcao = Number(
      prompt(`
===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====12
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair
Escolha uma opção:`)
    );
  
    switch (opcao) {
      case 1:
        cadastrarDoador();
        break;
      case 2:
        listarDoadores(arraydoadores);
        break;
      case 3:
        buscarTipoSangue();
        break;
      case 4:
        buscarPorData();
        break;
      case 5:
        // Sair
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        menu();
    }
  }






function cadastrarDoador () {

    const nomeDoador = prompt("Qual é seu nome").toUpperCase()
    const idadeDoador = Number (prompt("Qual é sua idade"))
    const pesoDoador = Number(prompt("Qual é seu peso"))
    const tipoDoador = prompt("Qual é seu tipo de sangue").toUpperCase()
    const ultimaDoacao = prompt("Qual foi sua ultima data de doação. dd/mm/aaaa")



    const doador = {
        nome : nomeDoador,
        idade : idadeDoador,
        peso : pesoDoador,
        tiposangue : tipoDoador,
        dataultima: ultimaDoacao
    }
arraydoadores.push(doador)

menu()
}





function listarDoadores (){
let lista = `
---------------------
LISTAGEM DE DOADORES
---------------------
NOME          | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-------------------------------------------------------------------
`

for (let i=0; i <arraydoadores.length; i++){

    const nome1 = arraydoadores[i]
  
    const {nome,idade,peso,tiposangue,dataultima} = nome1

   lista +=`${nome.padEnd(14)}|${idade.toString().padEnd(7)}|${peso.toString().padEnd(6)}|${tiposangue.padEnd(16)}|${dataultima.padEnd(11)}\n`
   
}

prompt(lista)
menu()
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AQUI EU FIZ DO JEITO, QUE SE UM USUARIO DIGITA UM TIPO DE SANGUE VAI PROCURAR TANTO O POSITIVO QUANTO O NEGATIVO, JÁ QUE NÃO SABIA QUE TINHA QUE SER PELO MESMO TIPO QUE O USUARIO DIGITOU






const tiposangueAComparar = []

const tipoUsuariosemtipo =[]


function buscarTipoSangue (){
const tipoUsuario = prompt("Digite o tipo sanguíneo desejado").toUpperCase()


if (tipoUsuario.includes("+")){
 const tipoUsuariosem = tipoUsuario.replaceAll('+','')
 tipoUsuariosemtipo.push(tipoUsuariosem)
} else if(tipoUsuario.includes("-")){
  const tipoUsuariosem = tipoUsuario.replaceAll('-','')
tipoUsuariosemtipo.push(tipoUsuariosem)
}


let lista = `
---------------------
RESULTADO DA BUSCA:
---------------------
NOME                | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-------------------------------------------------------------------
`

for (let i=0; i <arraydoadores.length; i++){
  const tipoObjeto = arraydoadores[i]
  const {nome,idade,peso,tiposangue,dataultima} = tipoObjeto

if (tiposangue.includes("+")){
const sanguesemTipo = tiposangue.replaceAll("+","")
  tiposangueAComparar.push(sanguesemTipo)
} else if (tiposangue.includes("-")){
  const sanguesemTipo = tiposangue.replaceAll("-","")
  tiposangueAComparar.push(sanguesemTipo)
}
}


for (let i=0; i <arraydoadores.length; i++){
  const tipoObjeto = arraydoadores[i]
  const {nome,idade,peso,tiposangue,dataultima} = tipoObjeto

if (tipoUsuariosemtipo[0]=== tiposangueAComparar[i]){
lista +=`${nome.padEnd(20)}| ${idade.toString().padEnd(6)}| ${peso.toString().padEnd(5)}| ${tiposangue.padEnd(15)}| ${dataultima.padEnd(13)}
`
}
}



prompt(lista)

for (let i=0; i <tiposangueAComparar.length;){
  tiposangueAComparar.pop()
}
for (let i=0; i <tipoUsuariosemtipo.length;){
  tipoUsuariosemtipo.pop()
}

menu()
}








function buscarPorData (){
  const dataUsuario = prompt("Digite a data desejada")
  
  
  
  let lista = `
  ---------------------
  RESULTADO DA BUSCA:
  ---------------------
  NOME                | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  -------------------------------------------------------------------
  `
  
  for (let i=0; i <arraydoadores.length; i++){
    const tipoObjeto = arraydoadores[i]
    const {nome,idade,peso,tiposangue,dataultima} = tipoObjeto
  
  
  
    if(dataUsuario === dataultima){
  
   lista +=`${nome.padEnd(20)}| ${idade.toString().padEnd(6)}| ${peso.toString().padEnd(5)}| ${tiposangue.padEnd(15)}| ${dataultima.padEnd(13)}
   `
    }
  
  }
  prompt(lista)
  
  menu()

}





menu()
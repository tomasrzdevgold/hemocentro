

const arraydoadores = []

function menu() {
    var opcao = Number(
      prompt(`
      ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
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

    //const {nome,idade,peso,tiposangue,dataultima} = arraydoadores
    
  // console.log
    let lista = `
    ---------------------
    LISTAGEM DE DOADORES
    ---------------------
    NOME                | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOAÇÃO
    -------------------------------------------------------------------
      
    `


for (let i=0; i <arraydoadores.length; i++){

    const nome1 = arraydoadores[i]
    //console.log(nome1)
    const {nome,idade,peso,tiposangue,dataultima} = nome1

    lista+=`${nome.padEnd(20)}| ${idade.toString().padEnd(6)}| ${peso.toString().padEnd(5)}| ${tiposangue.padEnd(15)}| ${dataultima.padEnd(13)}`

    console.log(lista)

}




    //for (let lista of arraydoadores){
        
    //}







menu()
}










menu()
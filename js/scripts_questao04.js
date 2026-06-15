 //PEGANDO ELEMENTOS DO DOM
 const formDados = document.querySelector('#formulario')
 const divResultado = document.querySelector('#div-dados')

 //CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
 formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let nome = parseFloat(objFormDados.get('Nome'))
    let nota1 = parseFloat(objFormDados.get('Nota 1'))
    let nota2 = parseFloat(objFormDados.get('Nota 2'))
    let nota3 = parseFloat(objFormDados.get('Nota 3'))


    let media = '(nota1 + nota2 + nota 3) / 3'

    if (idade >= 6){
      situacaoAprovacao = `Aprovado`
  }else{ 
      situacaoAprovacao = `Reprovado`
  }

   


   divResultado.innerHTML = `A quantidade de combustível necessário:${quantidade.toFixed(2).replace('.',',')}`
   
  
   formDados.reset()
   
 })

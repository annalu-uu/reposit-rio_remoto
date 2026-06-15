 //PEGANDO ELEMENTOS DO DOM
 const formDados = document.querySelector('#formulario')
 const divResultado = document.querySelector('#div-dados')

 //CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
 formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let distância = parseFloat(objFormDados.get('distância'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preço = parseFloat(objFormDados.get('preço'))

    let quantidade = distância / consumo
   


   divResultado.innerHTML = `A quantidade de combustível necessário:${quantidade.toFixed(2).replace('.',',')}`
   
   
   divResultado.innerHTML = `A quantidade de combustível necessário: ${quantidade.toFixed(2).replace('.',',')}L, 
   Preço Deslocamento: ${parseFloat(quantidade * preço).toFixed(2).replace('.',',')}R$`
   
 })

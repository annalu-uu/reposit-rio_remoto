 //PEGANDO ELEMENTOS DO DOM
 const formDados = document.querySelector('#formulario')
 const divResultado = document.querySelector('#div-dados')

 //CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
 formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

  
    let lado1 = parseFloat(objFormDados.get('lado1'))
    let lado2 = parseFloat(objFormDados.get('lado2'))
    let lado3 = parseFloat(objFormDados.get('lado3'))


    let tipodetriangulo = ''

    if (lado1==lado2 && lado2==lado3){
     tipodetriângulo = " um Equilátero, ele possui 3 lados iguais"
  }else if (lado1==lado2 || lado1==lado3 || lado2==lado3){
      tipodetriângulo = "um Isóscele, ele possui 2 lados iguais."
       }else{
      tipodetriângulo = "um Escaleno, ele possui 3 lados diferentes"
  }

   


   divResultado.innerHTML = `Seu triângulo é ${tipodetriângulo}`
   
  
   formDados.reset()
   
 })

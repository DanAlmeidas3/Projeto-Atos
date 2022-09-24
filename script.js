function listarCliente() {
    apiListarCliente().then(total => {
    document.querySelectorAll('main table#tabela tbody tr').forEach(linha => linha.remove )
     total.dados.map((item)=>{
        var lista = document.querySelector('table#lista tbody')
        lista.innerHTML = '<tr><td>/td></tr>'

     })
    })

    
}
function abrirFormCadastrar(){
    document.querySelector('#form').style.display = 'table'
    document.querySelector('button#btnModificar').style.display= 'none'

}
function limpaFormulario(){
    document.querySelector('#form').style.display = 'none'
    document.querySelector('input#nome').value = ''
    document.querySelector('input#email').value = ''
    document.querySelector('input#genero').value = ''
  
    document.querySelector('button#btnCadastrar').style.display = 'inherit'
    document.querySelector('button#btnModificar').style.display = 'inherit'
}
 function botaoCadastrar(){
    const formulario = new FormData()
    formulario.append("nome",document.querySelector('input#nome').value)
    formulario.append("email",document.querySelector('input#nome').value)
    formulario.append("genero",document.querySelector('input#nome').value)
    if(confirm('Deseja realmente incluir este cliente?')){
        CadastrarCliente(formulario).then(res =>{
            alert(res)
            limpaFormulario()
            listarCliente()

        })
        // codigo
    } else{
        alert('Você cancelou a execução.')
        limpaFormulario()
        }
    
    // codigo no
 }
 function abrirFormModificar(){
    document.querySelector('#form').style.display = 'table'
    document.querySelector('button#Editar').style.display= 'none'
    listarCliente(id).then(res => {
        
        document.querySelector('input#nome').value = 'res.nome'
        document.querySelector('input#email').value = 'res.email'
        document.querySelector('input#genero').value = 'res.genero'  
    })
}
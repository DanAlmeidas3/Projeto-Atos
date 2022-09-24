function listarCliente(id) {
    let res = apiCadastrarCliente()
    return res
}
    
    
function CadastrarCliente (formulario) {
    let res = apiCadastrarCliente(formulario).then(data=>data.dados)
    return res
}
function modificarCliente(id,formulario){
let res = apiCadastrarCliente(id,formulario).then(data=>data.dados)
return res
}
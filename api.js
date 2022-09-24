fetch("https://gorest.co.in/public/v2/users"),{
method:"GET",
headers: {var: nome = document.getElementById('NOME').value,
var : email = document.getElementById('EMAIL').value,
var :id = document.getElementById('ID').value,}}

//
async function apiCadastrarCliente (){
    
const response = await fetch( "https://gorest.co.in/public/v2/users", {
method:"POST",
headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer 6a08d1873d542e5c54a8678d23fe0ec238d92d3d76c30c3fe791e55ea58c71bf',
            'Content-Type': 'application/json'
          }
          ,
          body: formulario  
          `{
              "name": "Nome usuário",
              "gender": "male",
              "email": "meuemail@gmail.com"
              "status": "active"
            }`
    })
    const data = await response.json()
    return data;
    
}
async function apiEditarCliente (){
    
    const response = await fetch( " https://gorest.co.in/public/v2/users/{{idUsuario}}", {
    method:"PUT",
    headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 6a08d1873d542e5c54a8678d23fe0ec238d92d3d76c30c3fe791e55ea58c71bf',
                'Content-Type': 'application/json'
              }
              ,
              body: formulario  
              `{
                  "name": "Nome usuário",
                  "gender": "male",
                  "email": "meuemail@gmail.com"
                  "status": "active"
                }`
        })
        const data = await response.json()
        return data;
    }      

    async function apiExcluirCliente (id){
    
        const response = await fetch( " https://gorest.co.in/public/v2/users/{{idUsuario}}", {
        method:"DELETE",
        headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer 6a08d1873d542e5c54a8678d23fe0ec238d92d3d76c30c3fe791e55ea58c71bf',
                    'Content-Type': 'application/json'
                  }
                  ,
      
            })
            const data = await response.json()
            return data;
        }     
    "teste"
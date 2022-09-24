function addToTable(url) {
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://gorest.co.in/public/v2/users");
var name = document.getElementById('NOME').value;
var email = document.getElementById('EMAIL').value;
var id = document.getElementById('ID').value;}

const response = AWAIT = fetch("https://gorest.co.in/public/v2/users", {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Authorization': 'Bearer 6a08d1873d542e5c54a8678d23fe0ec238d92d3d76c30c3fe791e55ea58c71bf',
  'Content-Type': 'application/json'
}
,
body:  `{
    "name": "Nome usuário",
    "gender": "male",
    "email": "meuemail@gmail.com"
    "status": "active"
  }`,
});


const axios=require("axios")
const API_key="39b7295e-3ef2-4c1a-8a44-8bce4d9206de"

async function getuser(){
const req=await axios.get("https://api.github.com/users/amanchauhan99")
let response=await req.data
console.log(response);
}
getuser()
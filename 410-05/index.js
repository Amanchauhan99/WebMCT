const h = document.getElementById("h")
const hhh = document.getElementById("hhh")
async function next(params) {
    const response = await fetch("https://api.quotable.io/random")
    console.log(response);
    const data = await response.json()
    console.log(data);
    h.innerText = data.content
    hhh.innerText = "~" + data.author

}
next()
async function btctoinr(){
    let response=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
    let data=await response.json()
     gettopcoins(data.bitcoin.inr)
     console.log(data); //bit coin
}

btctoinr()

async function gettopcoins(btcininr){
    let response=await fetch("https://api.coingecko.com/api/v3/search/trending")
    let data =await response.json();
    console.log(data);//coin
}
async function users(){
    let req=await fetch("https://api.github.com/users")
    let res=await req.json()
    createcard(res)
    // searchUser()
   
console.log(res);
}
users()
async function userss(login){
    let req=await fetch(`https://api.github.com/users/${login}`)
    let res=await req.json()
    return res
}
// async function searchUser() {
//     let search=document.getElementById('form-control')
//    console.log(search.value);
//    const res=await fetch(`https://api.github.com/search/users?q=${search.value}`);
//    const data=await res.json();
//    console.log(data.items[0].login);
//    console.log(data);
//    console.log(data.items[1].avatar_ur);
//    console.log(data.login);
//    console.log(data.html_url);

//    let card=document.getElementById('card')
//    card.innerHTML=""
   
//    data.items.map((e)=>{
//     card.innerHTML+=`<div class="card">
//     <div class="avtar"><img src="${e.avatar_url}" alt="avtar"></div>
//     <div class="name">
//         <div class="username">${e.login}</div>
//         <a href="${e.html_url}">view more</a>
 
//     </div>
//  </div>`
   
//    })
// }

// console.log(searchUser());
// function searchUser1(){
        
//         // html=""
// }
// function setUserList(userData) {
//     userData.forEach((user, idx) => createUserList(user, idx));
//   }
//   setUserList(usersData);

    function searchUser(){
        
        let button=document.querySelector(".btn")
        let search=document.querySelector(".form-control")
        let append1=document.querySelector(".append1")
        let searchvalue=search.value
                console.log(searchvalue);

                window.location.href=`./userDetail.html?id=${searchvalue}`
        
    }
    // searchUser()
  function createcard(dataobj){
    let allprodiv=document.getElementById("all-users");
    
    dataobj.forEach(({login,avatar_url,id}) => {
        
        userss(login).then(data=>{
    let html=`<a href="./userDetail.html?id=${login} "><div class="main">
    <div class="img-div"><img src="${avatar_url}" alt=""></div>
    <div class="detail">
        <div class="name">${login}</div>
        <div class="follower">
            <div class="same"><div class="same1">followers</div> <div  class="same1">${data.followers}</div></div>
            <div class="same"> <div class="same1">following</div> <div  class="same1">${data.following}</div></div>
            <div class="same"></div>
        </div>
    </div>
</div></a>`
allprodiv.innerHTML+=html
})
})
  }
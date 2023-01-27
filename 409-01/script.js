let count = 0;

function hello() {
    let Fname = document.getElementById('fname').value;
    let Fname1 = document.getElementById('fname')
    const parag0 = document.getElementById('parag0');
    if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(Fname))) {
        Fname1.style.outline = "2px solid red";

        parag0.innerText = "Full Name Should Have Two Words(Contains A Space ' ')"
    } else {
        Fname1.style.outline = "2px solid green";

        parag0.innerText = ""
        count++;
    }




}




function hello1() {
    let email = document.getElementById("email").value;
    let email1 = document.getElementById("email");
    const parag1 = document.getElementById('parag1');

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {;
        parag1.innerText = "Enter a valid email (ex: abc@gmail.com)"
        email1.style.outline = "2px solid red";

    } else {
        email1.style.outline = "2px solid green";

        parag1.innerText = ""
        count++;
    }
}



function hello2() {
    let mobile = document.getElementById('Mnumber').value;
    let mobile1 = document.getElementById('Mnumber')
    const parag2 = document.getElementById('parag2');
    if (!(mobile.length == 10)) {
        parag2.innerText = "Mobile number format should be 111-222-3333 and of 10 digit"
        mobile1.style.outline = "2px solid red";

    } else {
        mobile1.style.outline = "2px solid green";

        parag2.innerText = ""
        count++;
    }

}

function hello3() {
    let password = document.getElementById('password').value;
    let password11 = document.getElementById('password');
    const parag3 = document.getElementById('parag3');
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password))) {;
        parag3.innerText = "Password should be alphnumeric can contain one special character (@,-,_,#)"
        password11.style.outline = "2px solid red";

    } else {
        password11.style.outline = "2px solid green";

        parag3.innerText = ""
        count++;
    }

}

function hello4() {
    let bio = document.getElementById('bio').value;
    let bio1 = document.getElementById('bio');
    const parag4 = document.getElementById('parag4');
    if (bio.length < 5) {

        parag4.innerText = "bio must contain 8 - 15 character"
        bio1.style.outline = "2px solid red";

    } else {

        parag4.innerText = ""
        bio1.style.outline = "2px solid green";
        count++;
    }


}
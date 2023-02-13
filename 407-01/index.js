function searchtags() {
    const maincontainerlower = document.getElementById("maincontainerlower")
    maincontainerlower.innerHTML = ""
    const inputemojeename = document.getElementById("inputemojeename").value
    const tags = []
    emojiList.map((ele) => {
            // console.log(ele.tags);
            if (ele.tags.includes(inputemojeename)) {
                // console.log(ele);
                tags.push(ele)
                maincontainerlower.innerHTML +=
                    `<div class="tablerow">
                <div class="emojiIcon">${ele.emoji}</div>
                <div class="emojiTags">${ele.aliases}</div>
                <div class="emojiname">${ele.description}</div>
            </div>`
            }
        })
        // console.log(tags);
}

function startsearchtags() {
    const maincontainerlower = document.getElementById("maincontainerlower")
    maincontainerlower.innerHTML = ""
    console.log("ababab");
    const inputemojeename = document.getElementById("inputemojeename").value
    const tags = []
    emojiList.map((ele) => {
            // console.log(ele.tags);
            ele.tags.map((element) => {
                if (element.startsWith(inputemojeename)) {
                    // console.log(ele);
                    tags.push(ele)
                    maincontainerlower.innerHTML +=
                        `<div class="tablerow">
                    <div class="emojiIcon">${ele.emoji}</div>
                    <div class="emojiTags">${ele.aliases}</div>
                    <div class="emojiname">${ele.description}</div>
                </div>`
                }
                if (inputemojeename == "") {
                    maincontainerlower.innerHTML = ""
                }
            })
        })
        // console.log(tags);
}
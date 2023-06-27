//IN GOD, WE TRUST//
let $ = document;
let inputElem = $.querySelector("input")
let paragraph = $.querySelector("p");
let searchBtn = $.querySelector("button")

// console.log(paragraph.innerText.match(/ing/g));

let search = () => {
    let inputValue = inputElem.value
    // let nameRegex = `/${inputValue}/g`;
    let nameRegex = new RegExp(`${inputValue}`, "g");

    paragraph.innerHTML = paragraph.textContent.replace(nameRegex, (word) => `<mark>${word}</mark>`)
}


searchBtn.addEventListener("click", search);

inputElem.addEventListener("keyup", (e) => {
    console.log(e);
})
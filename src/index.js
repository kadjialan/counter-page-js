import "./styles/styles.css"
import { add, sub, getCurrentValue } from "../src/data.js"

const plus = document.querySelector('.addition')
const minus = document.querySelector('.minus')
const textholder = document.querySelector('.num')

let value = 0
function displayvalue(text = getCurrentValue()) {
    textholder.innerHTML = text
}

plus.addEventListener('click', () => {
    add()
    displayvalue()
})

minus.addEventListener('click', () => {
    sub()
    displayvalue()
})
const p = document.getElementsByTagName('p')[0]
const calc = document.getElementsByTagName('h1')[0]

calc.onclick = function () {
    document.getElementsByClassName('calculadora')[0].classList.toggle('calc-open')
}
    


let n1 = 0
let op = null
function insert(n) {
    if (p.innerHTML == 0) {
        p.innerHTML = ''
    }
    num = p.innerHTML
    p.innerHTML = num + n
}
function clean() {
    p.innerHTML = 0
    n1 = 0
}
function soma() {
    n1 = p.innerHTML
    p.innerHTML = '0'
    op = '+'
}
function sub() {
    n1 = p.innerHTML
    p.innerHTML = '0'
    op = '-'
}
function div() {
    n1 = p.innerHTML
    p.innerHTML = '0'
    op = '/'
}
function mult() {
    n1 = p.innerHTML
    p.innerHTML = '0'
    op = '*'
}
function delet() {
    p.innerHTML = p.innerHTML.substring(0, p.innerHTML.length -1)
}
function result() {
    if (op == '+'){
        console.log(n1);
        console.log(p.innerHTML);
        p.innerHTML = parseFloat(n1) + parseFloat(p.innerHTML)
    }
    if (op == '-'){
        console.log(n1);
        p.innerHTML = parseFloat(n1) - parseFloat(p.innerHTML)
    }
    if (op == '*'){
        console.log(n1);
        p.innerHTML = parseFloat(n1) * parseFloat(p.innerHTML)
    }
    if (op == '/'){
        console.log(n1);
        p.innerHTML = parseFloat(n1) / parseFloat(p.innerHTML)
    }
}
const add = (n) => {
    const el = document.getElementsByTagName('h1')[0]
    el.innerText = Number(el.innerText) +n
    console.log(n)
}
document.getElementById('add').onclick = function(){add(1)}

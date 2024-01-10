const someArr = [1, 2, 4, 5, 5, 5, 3, 4, 5, 76]
let i = 0
while (i < someArr.length) {
    console.log(someArr[i])
    i++
}
for (let i = someArr.length-1; i >= 0; i--){
    console.log(someArr[i])
}

for (let i in someArr){
    console.log(someArr[i])
}

for (let i of someArr){
    console.log(i)
}

const someObj = {
    name: 'Ivan',
    age: 19
}

for (let i of Object.values(someObj)){
    console.log(i)
}
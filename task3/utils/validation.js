const validName = (text) => {
    reg = /^[А-Я][а-я]+$/g
    return reg.test(text)
}
const validNumber = (num) => {
    reg = /^\d{1,3}$/g
    return reg.test(num)
}

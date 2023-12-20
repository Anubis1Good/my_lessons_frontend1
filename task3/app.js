// const form = document.forms[0]
// console.log(form['name'])

const getForm = () => {
    return document.forms[0]
}
const validName = (text) => {
    reg = /^[А-я]+$/g
    return reg.test(text)
}
const validNumber = (num) => {
    reg = /^\d{1,3}$/g
    return reg.test(num)
}

const setModalVisibility = (isVisible) =>{
    if (fullName()){

        const display = isVisible ? 'flex' : 'none'
        document.querySelector('.modal__out').style.display = display
    }
    }
    

const submit = (event) =>  {
    event.preventDefault()
    console.log('submit')
    setModalVisibility(true)
}
const form = getForm()
form['submit'].onclick = submit
document.querySelector('.modal__close').onclick = () => setModalVisibility(false)
document.querySelector('.modal__out').onclick = () => setModalVisibility(false)
document.querySelector('.modal_in').onclick = (event) => event.stopPropagation()


const fullName = () => {
    const form = getForm()
    const _val = form['name'].value
    return Boolean(_val)

}
// setInterval(()=>console.log(fullName()),1000)

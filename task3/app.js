const participants = []

const getForm = () => {
    return document.forms[0]
}

const updateListParticipants = () => {
    const list = document.querySelector('.list-participants')
    let content = '<caption>Список участников:</caption>'
    for (let p of participants) {
        content += `<li>${p.toString()}</li>`
    }
    content += `<caption>Всего участников: ${Participant.counter}</caption>`
    list.innerHTML = content
}

const setModalVisibility = (isVisible) => {
    const display = isVisible ? 'flex' : 'none'
    document.querySelector('.modal__out').style.display = display
}
const createParticipant = () => {
    const form = getForm()
    const name = form['name'].value
    const surname = form['surname'].value
    const age = form['age'].value
    const height = form['height'].value
    const weight = form['weight'].value

    return new Participant(name, surname, age, height, weight)
}
const submit = (event) => {
    event.preventDefault()
    if (fullName()) {
        participants.push(createParticipant())
        updateListParticipants()
        getForm()['reset'].click()
        setModalVisibility(true)
    }
}
const form = getForm()
form['submit'].onclick = submit
document.querySelector('.modal__close').onclick = () =>
    setModalVisibility(false)
document.querySelector('.modal__out').onclick = () => setModalVisibility(false)
document.querySelector('.modal_in').onclick = (event) => event.stopPropagation()

const fullName = () => {
    const form = getForm()
    
    for (let i of form){
        // if (i.type == 'text' && !i.value){
        //     return false
        // }
        if (i.name == 'name' || i.name == 'surname'){
            if (!validName(i.value)){
                return false
            }
        }
        if (i.name == 'age'){
            if (validNumber(i.value)){
                if (parseInt(i.value) < 7){
                    return false
                }
            } else {
                return false
            }
        }
        if (i.name == 'height'){
            if (validNumber(i.value)){
                const height = parseInt(i.value)
                if (height < 100 && height > 220){
                    return false
                }
            } else {
                return false
            }
        }
        if (i.name == 'weight'){
            if (validNumber(i.value)){
                const weight = parseInt(i.value)
                if (weight < 30 && weight > 150){
                    return false
                }
            } else {
                return false
            }
        }
    }
    return true
}


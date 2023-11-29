function getFormElements(){
    const name = document.getElementById('name')
    const description = document.getElementById('description')
    
    return [name, description]
}

function addNote(){
    const [name, description] = getFormElements()

    const card = document.createElement('div')
    card.className = 'notes-block-card'
    
    const cardName = document.createElement('h2')
    cardName.textContent = name.value
    
    const cardDescription = document.createElement('p')
    cardDescription.textContent = description.value
    const cardCloseBtn = document.createElement('button')
    cardCloseBtn.innerText = 'x'
    cardCloseBtn.className = 'card__btn_close'
    cardCloseBtn.onclick = removeCard

    card.appendChild(cardName)
    card.appendChild(cardDescription)
    card.appendChild(cardCloseBtn)
    // console.log(card)

    const notesBlock = document.querySelector('.notes-block')
    notesBlock.appendChild(card)
    clearForm()
     
}
function clearForm(){
    const [name, description] = getFormElements()
    name.value = ''
    description.value = ''
}
function gotoDescription (event) {
    const [name, description] = getFormElements()

    if (event.code == 'Enter'){
        description.focus()

    }
}
function removeCard(e){
    this.parentNode.remove()
    // console.log(e,this.parentElement)
}
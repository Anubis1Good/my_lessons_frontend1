class Participant {
    static counter = 0
    constructor(name, surname, age, height, weight) {
        this.name = name
        this.surname = surname
        this.age = age
        this.height = height
        this.weight = weight
        Participant.counter++
        this.number = Participant.counter
    }
    toString(){
        return `Участник номер ${this.number} ${this.name} ${this.surname}`
    }
}

// const a = new Participant('Иван', 'Иванов', 19, 185, 71)
// const b = new Participant('Петр', 'Петров', 20, 180, 66)
// const c = new Participant('Ольга', 'Рюрикович', 24, 168, 52)
// console.log(a.toString())
// console.log(b.toString())
// console.log(c.toString())
// console.log(Participant.counter)
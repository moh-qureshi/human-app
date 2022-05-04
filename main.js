let months = ["February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let weeks = [2, 3, 4]
let month = document.getElementById("month")
let week = document.getElementById("week")
let year = document.getElementById("year")
let age = document.getElementById("age")
let health = document.getElementById("health")
let fun = document.getElementById("fun")
let fitness = document.getElementById("fitness")
let career = document.getElementById("career")
let money = document.getElementById("money")
const lowHealthMessage = document.getElementById("health-low")
const lowFunMessage = document.getElementById("fun-low")
const lowFitnessMessage = document.getElementById("fitness-low")
lowHealthMessage.style.visibility = "hidden"
lowFunMessage.style.visibility = "hidden"
lowFitnessMessage.style.visibility = "hidden"
let years = 0
let cash = 0

class Person{
constructor(name){
    this._name = name;
    this._age = 18
    this._health = 100;
    this._fun = 100;
    this._fitness = 100;
    this._career = 0;
}
get name(){
    return this._name;
}
get age(){
    return this._age;
}
get _health(){
    return this._health;
}
get _fun(){
    return this._fun;
}
get _fitness(){
    return this._fitness;
}
get _career(){
    return this._career;
}
set _health(health){
    this.health = 100
}
set _fun(fun){
    this.fun = 100
}
set _fitness(fitness){
    this.fitness = 100
}
set _career(career){
    this.career = 50
}
set _health(health){
    this.health = 100
}
eat(){
    this._health--;
}
entertainment(){
    this._fun--;
}
workOut(){
    this._fitness--;
}
work(){
    this._career--;
}}
const mohammed = new Person("Mohammed")


setInterval(function() {
    month.innerText = months.shift()
    mohammed.health -= 10
    mohammed.career -=15
    cash += 500
    health.innerText = `Health: ${mohammed.health}`
    career.innerText = `Career: ${mohammed.career}`
    money.innerText = `£${cash}`
    if(month.innerText === "December"){
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    } else if(mohammed.health <= 30){
        lowHealthMessage.style.visibility = "visible"
    }
}, 6000)



setInterval(function(){
    week.innerText = weeks.shift()
    mohammed.fitness -=2
    mohammed.fun -=5
    fitness.innerText = `Fitness: ${mohammed.fitness}`
    fun.innerText = `Fun: ${mohammed.fun}`
    if(week.innerText === "4"){
        weeks.push(1, 2, 3, 4)
    } 
}, 1500)

setInterval(function(){
    years++
    mohammed._age++
    age.innerText = `Age: ${mohammed.age}`   
    year.innerText = "Year " + years 
}, 72000)

function workOut(){
    mohammed.fitness += 5
    cash -= 100
    money.innerText = `£${cash}`
    fitness.innerText = `Fitness: ${mohammed.fitness}`
}

function healthIncrease(){
    mohammed.health += 10
    health.innerText = `Health: ${mohammed.health}`
    cash -= 100
    money.innerText = `£${cash}`
}

function funIncrease(){
    mohammed.fun += 5
    fun.innerText = `Fun: ${mohammed.fun}`
    cash -= 100
    money.innerText = `£${cash}`
}

function careerIncrease(){
    mohammed.career += 5
    career.innerText = `Career: ${mohammed.career}`
}

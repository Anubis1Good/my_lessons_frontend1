const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

const lights = [red,yellow,green,yellow]
let i = 0
for (let light of lights){
    light.style.opacity = '0'
    
}
lights[i].style.opacity = '1'
i++
setInterval(()=>{
    for (let light of lights){
        light.style.opacity = '0'
        
    }
    for (let step = 0; step < 1.2; step += 0.2){
        setTimeout(()=>{
            lights[i].style.opacity = String(step)
            
        },500)
    }
    
    if (++i == lights.length){
        i = 0
    }

},5000)

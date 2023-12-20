let light = 'yellow'

// setInterval()
const colors = ['green', 'yellow', 'red','yellow']
let i = 0
function lighter(){
    light = colors[i]
    if(i == colors.length - 1){
        i = 0
    }else{
        ++i
    }
    if (light == 'green'){
        console.log('Go!')
    }
    else if(light == 'yellow') {
        console.log('Prepare!')
    } 
    else{
        console.log('Stop!')
    }
    
}
setInterval(lighter,1000)
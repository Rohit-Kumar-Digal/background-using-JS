const body = document.getElementsByTagName("body")[0]

function change(color){
    body.style.backgroundColor = color;
}

function random(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const colorRandom = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = colorRandom;
}
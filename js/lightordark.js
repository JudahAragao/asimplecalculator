var lightordark = document.querySelector('#lightordark')
var light = false

lightordark.addEventListener('click',function (){
    let bg = document.querySelector('#bg')
    let i = document.querySelector('i')
    let main = document.querySelector('#main')
    let input = document.querySelector('#area-operation')
    let button = document.querySelectorAll('#button')

    if (light == false) {
        bg.style.backgroundColor = "#ddd"

        i.style.color = "#131419"
        i.style.transform = "rotate(180deg)"

        main.style.backgroundColor = "#ddd"
        main.style.boxShadow = "-5px -5px 15px #f0f0f0, 5px 5px 15px #a1a1a1"

        input.style.background = "#ddd"
        input.style.color = "#131419"
        input.style.boxShadow = "inset -2px -2px 6px #f0f0f0,inset 2px 2px 6px #a1a1a1"

        for (let index = 0; index < button.length; index++) {
            button[index].style.backgroundColor = "#ddd"
            button[index].style.color = "#131419"
            button[index].style.boxShadow = "-2px -2px 6px #f0f0f0, 2px 2px 6px #a1a1a1"
            button[index].addEventListener('mouseup',() => button[index].style.boxShadow = "-2px -2px 6px #f0f0f0, 2px 2px 6px #a1a1a1")
            button[index].addEventListener('mousedown',() => button[index].style.boxShadow = "inset -2px -2px 6px #f0f0f0, inset 2px 2px 6px #a1a1a1")
        }

        light = true
    }else if (light == true){
        bg.style.backgroundColor = "#131419"

        i.style.color = "#fff"
        i.style.transform = "rotate(-180deg)"

        main.style.backgroundColor = "#131419"
        main.style.boxShadow = "-5px -5px 15px rgba(201, 201, 201, 0.05),5px 5px 15px rgba(0,0,0,0.5)"

        input.style.background = "#131419"
        input.style.color = "#ddd"
        input.style.boxShadow = "inset -2px -2px 6px rgba(201, 201, 201, 0.1),inset 2px 2px 6px rgba(0,0,0,0.8)"

        for (let index = 0; index < button.length; index++) {
            button[index].style.backgroundColor = "#131419"
            button[index].style.color = "#ddd"
            button[index].style.boxShadow = "-2px -2px 6px rgba(201, 201, 201, 0.1), 2px 2px 6px rgba(0,0,0,0.8)"
            button[index].addEventListener('mouseup',() => button[index].style.boxShadow = "-2px -2px 6px rgba(201, 201, 201, 0.1), 2px 2px 6px rgba(0,0,0,0.8)")
            button[index].addEventListener('mousedown',() => button[index].style.boxShadow = "inset -2px -2px 6px rgba(201, 201, 201, 0.1), inset 2px 2px 6px rgba(0,0,0,0.8)")
        }

        light = false
    }
})
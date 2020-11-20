'use strict';

const servicesImgs = document.querySelector('.services__images')
const servicesDivImgs = servicesImgs.querySelectorAll('img')
const servicesText = document.querySelector('.services__text')
const servicesDivText = servicesText.querySelectorAll('div')
const instructionText = document.createElement('p')
const text = document.createTextNode('PASA SOBRE LAS IMÁGENES')
instructionText.setAttribute('class', 'instruction-text')

let width = screen.width
let clicked = false
let elemClicked
let parentElemClicked
let nextSibl


for (let i = 0; i < servicesDivImgs.length; i++) {
    if (width > 790) {
        servicesDivImgs[i].addEventListener('mouseover', () => {
            servicesDivText[i].style.visibility = "visible"
            instructionText.remove()
        })

        servicesDivImgs[i].addEventListener('mouseout', () => {
            servicesDivText[i].style.visibility = "hidden"
            instructionText.appendChild(text)
            servicesText.appendChild(instructionText)
        })
    } else {
        servicesDivImgs[i].addEventListener('mousedown', (e) => {
            if (clicked) {
                instructionText.remove()           
                elemClicked.style.display = "block"  
                nextSibl.style.display = "none"
            }
            nextSibl = e.target.nextElementSibling
            parentElemClicked = e.target.parentElement
            e.target.style.display = "none"
            nextSibl.style.display = "block"
            parentElemClicked.appendChild(instructionText)
            elemClicked = e.target
            clicked = true
        })


    }

}


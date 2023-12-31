import React from "react"
import RecommPanel from "./RecommPanel"
import { createRoot } from 'react-dom/client';

const compass = createCompass()
const compass_button = createButton()

const input_div = document.querySelector('._2x2Mmc')
const button_parent = document.querySelector('._1sFryS')
const body_root = document.querySelector('#container')
// only for home page. TODO: create an else for null condition
input_div.append(compass)
button_parent.append(compass_button)

const formdiv = document.querySelector('.Pke_EE')
formdiv.addEventListener('keydown', executePrompt)

function createCompass() {
    let compass = document.createElement('div')
    let card_field = document.createElement('div')
    let welcome_field = document.createElement('div')

    compass.style.cssText = 'padding:10px;font-size:1.8rem;color:grey;'
    card_field.style.cssText = 'display:flex;justify-content:space-around;padding:10px;'

    welcome_field.style.cssText = 'width:inherit;text-align:center;padding:5px;box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);border-radius:10px;'
    welcome_field.innerHTML = "Hit ctrl + space instead of enter for clever search"

    const card1 = createCard("red")
    const card2 = createCard("green")
    const card3 = createCard("blue")
    card_field.appendChild(card1)
    card_field.appendChild(card2)
    card_field.appendChild(card3)

    compass.appendChild(welcome_field)
    compass.appendChild(card_field)

    return compass
}

function createCard(color) {
    let card = document.createElement('div')
    let interaction = document.createElement('div')

    card.style.cssText = 'display:flex;width:20%;height:100px;align-items:center;justify-content:space-around;text-align:center;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);border-radius:10px;'
    interaction.style.cssText = 'width:30px;height:30px;border-radius:100%;'
    interaction.style.backgroundColor = color
    card.appendChild(interaction)

    return card
}

function createButton() {
    let compass_button = document.createElement('button')

    compass_button.innerHTML = "clever"
    compass_button.style.cssText = 'border:1px black solid'
    compass_button.addEventListener('click', () => {
        // pop open the side panel
        let panel_root = document.createElement('div')
        panel_root.id = 'panel-root'
        // panel_root.style.display = 'none'
        body_root.prepend(panel_root)
        const root = createRoot(panel_root)
        root.render(<RecommPanel text={"button pressed"} />)
    })

    return compass_button
}

function executePrompt(e) {
    if (e.keyCode === 32 && e.ctrlKey) {
        // pop open the side panel. for now, just the div is updated
        compass.firstChild.innerHTML = formdiv.value
        let panel_root = document.createElement('div')
        panel_root.id = 'panel-root'
        // panel_root.style.display = 'none'
        body_root.prepend(panel_root)
        const root = createRoot(panel_root)
        root.render(<RecommPanel text={formdiv.value} />)
        // send request to that idiot gpt
    }
    // cases to bring the div back to its original form tbd
    else {
        console.log("what did you expect");
    }
}
import {places} from '../data/places.mjs'
console.log(places);


const showHere = document.querySelector("#places")


function displayItems(places) {
  places.forEach(x => {
    //build the card element
    const card = document.createElement('div')

    //build the photo element
    const photo = document.createElement('img')
    photo.src = `images/${x.photo_link}`
    photo.alt = x.name
    photo.setAttribute('loading', 'lazy');
    card.appendChild(photo)

    //build the title element
    const title = document.createElement('h2')
    title.innerText = x.name
    card.appendChild(title)

    //build the address element
    const address = document.createElement('address')
    address.innerText = x.address
    card.appendChild(address)

    //build the description element
    const description = document.createElement('p')
    description.innerHTML = `${x.description} <br><br>COST:  ${x.cost}`
    card.appendChild(description)

    //build the button
    const learnMore = document.createElement('button')
    learnMore.innerText = "Learn More"
    learnMore.classList="learnMore"
    card.appendChild(learnMore)


    showHere.appendChild(card)
  }) 
} 


displayItems(places)


// visit count
const visitFeedback = document.querySelector('#last_time');
let visitTime = localStorage.getItem("firstvisit")

if (visitTime == null) {
  visitFeedback.textContent = "Welcome! Do you have any questions?"
  localStorage.setItem("firstvisit", Date.now());
} else {
    
    let difference = (Date.now()-visitTime)/86400000 //milis per day
    
    if (difference<1) {
        visitFeedback.innerHTML = `Ohh, you Back soon!`
    } else {
        visitFeedback.innerHTML = `You last visited ${Math.floor(difference)} days ago`
    }
  
}
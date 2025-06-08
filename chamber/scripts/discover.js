import { places } from '../data/places.mjs'
console.log(places);



//---------- GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS 
const showHere = document.querySelector("#places")


// ---------------- LOOP THROUGH THE ARRAY OF JSON ITEMS 
function displayItems(places) {
  places.forEach(x => {
    //build the card element
    const card = document.createElement('div')
    //build the photo element
    const photo = document.createElement('img')
    photo.src = `images/${x.photo_link}`
    photo.alt = x.name
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
    const knowMore = document.createElement('button')
    knowMore.innerText = "know More"
    card.appendChild(knowMore)


    showHere.appendChild(card)
  }) 
} 

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(places)


// POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED
function showStuff(x) {
  mytitle.innerHTML = x.name
  myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
  mydialog.showModal();
} // end of function
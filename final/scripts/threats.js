const threatsList= document.querySelector('#threats-list');

const url = './data/threats.json';

//**********threats short verion for home page********* */
async function getThreats() {
    try {        
        const response = await fetch(url); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        displayThreats(data.threats); // note that you reference the members array of the JSON data object, not just the object
        
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
 
}

const displayThreats = (array) => {

    const page = "Cyber Threats Prevention - Threats"; // Name of active page
    
    
    if (document.title === page) {

        showAllThreat(array)
  

    } else {
       const length = 5; //How many threats is shown in home page
       for (let step = 0; step < length; step++) {showThreat(array[step])}
       console.log(length);
    }
        
}


function showThreat(threat) {
    const threatBlock = document.createElement('section')
    threatBlock.className='card2'
    
    const index= document.createElement('h3')
    index.innerHTML = `Top ${threat.index}   - <b>${threat.name}</b>`
    threatBlock.appendChild(index)

    const btn= document.createElement('button')
    btn.innerHTML = "Learn More"
    btn.onclick = `learnMore("${threat.description}")`
    btn.setAttribute('onClick', `learnMore("${threat.name}: ${threat.description}")`);
    threatBlock.appendChild(btn)
    
    threatsList.appendChild(threatBlock)
}


const allThreatsList= document.querySelector('#all-threats-list');

//**********threats long verion for threat page********* */
function showAllThreat(threat){
    
    // membersContainer.innerHTML = ''; // Clear existing content
    threat.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement("h3");
        let description = document.createElement('p');
        let situation = document.createElement('p');
     
        let image = document.createElement('img');

        card.setAttribute('class', 'card3');

        // Build the h3 content out to show the member's name
        name.textContent = `${member.index} - ${member.name}`;
        description.textContent = `DESCRIPTION: ${member.description}`;
        situation.textContent = `EXAMPLE: ${member.situation}`;

        // Build the image by setting all the relevant attributes
              
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', `${member.image}`); 
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', 'auto');

        // Append the section(card) with the created elements
        card.appendChild(name); 
        card.appendChild(description);
        card.appendChild(image);
        card.appendChild(situation);
        allThreatsList.appendChild(card);

    });
}
//     const threatBlock = document.createElement('section')
//     threatBlock.className='card3'
    
//     const index= document.createElement('h3')
//     index.innerHTML = `Top ${threat.index}   - <b>${threat.name}</b>`
//     threatBlock.appendChild(index)

//     const btn= document.createElement('button')
//     btn.innerHTML = "Learn More"
//     btn.onclick = `learnMore("${threat.description}")`
//     btn.setAttribute('onClick', `learnMore("${threat.name}: ${threat.description}")`);
//     threatBlock.appendChild(btn)
    
//     threatsList.appendChild(threatBlock)
// }
//********** button learn more action threats page********* */
function learnMore(text) {alert(text);}

   
   getThreats();
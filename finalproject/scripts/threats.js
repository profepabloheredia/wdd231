const threatsList= document.querySelector('#threats-list');

const url = './data/threats.json';


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
    for (let step = 0; step < 5; step++) {
    showThreat(array[step])
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

function learnMore(text) {alert(text);}

getThreats();
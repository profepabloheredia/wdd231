const threatsList= document.querySelector('#threats-list');

const threatPath = './data/threats.json';

async function getThreats() {
    const response = await fetch(threatPath);
    const data = await response.json();

    displayThreats(data.threats)
    console.log(data.threats);
}



const displayThreats = (array) => {
    for (let step = 0; step < 5; step++) {
    showData(array[step])
    }
}

function showData(threat) {
    const threatBlock = document.createElement('section')
    threatBlock.className='card2'
    
    const index= document.createElement('h3')
    index.innerHTML = `Top ${threat.index}   - <b>${threat.name}</b>`
    threatBlock.appendChild(index)

    const description = document.createElement('p')
    description.className="cardLevel"
    description.innerHTML = threat.description
    threatBlock.appendChild(description)
    
    threatsList.appendChild(threatBlock)
}
getThreats();
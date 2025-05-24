// Randomply diplay spotligths for Gold/Silver Members



const spotlight = document.querySelector('#spotlights');

const path = './data/members.json';

async function getMembers() {
    const response = await fetch(path);
    const data = await response.json();
    const bestMembers = data.members.filter(member => member.level > 1);
    displayMembers(bestMembers)
}


function levelToClass(level) {
    if (level === 2) {
      return "-Silver-";
    } else if (level === 3) {
      return "-Gold-";
    } else {
        return "Member Level to low";
    }
}

getMembers();

const displayMembers = (myArray) => {
    for (let step = 0; step < 3; step++) {
    const random = Math.floor(Math.random() * myArray.length);

    let picked = myArray[random];
    myArray.splice(random, 1);

    showData(picked)
    }
}

function showData(member) {
    const block = document.createElement('div')

    const name= document.createElement('h2')
    name.innerHTML = member.name
    block.appendChild(name)

    const logo = document.createElement('img')
    logo.src = `images/${member.image}`
    logo.alt = member.name
    logo.loading = 'lazy'
    logo.width = 100  
      
    block.appendChild(logo)

    const phone = document.createElement('p')
    phone.innerHTML = member.phone
    block.appendChild(phone)

    const address = document.createElement('p')
    address.innerHTML = member.address
    block.appendChild(address)

    const link = document.createElement('a')
    link.href = member.url
    link.textContent="Web Page"
    link.target = "_blank"
    block.appendChild(link)

    const level = document.createElement('p')
    level.innerHTML = `Member Level: ${levelToClass(member.level)}`
    block.appendChild(level)
    
    spotlight.appendChild(block)
}
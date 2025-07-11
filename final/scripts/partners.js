
const partners = document.querySelector('#partners');

const path = './data/partners.json';

async function getMembers() {
    const response = await fetch(path);
    const data = await response.json();
    // const bestMembers = data.partners.filter(member => member.level > 1);
    displayMembers(data.partners)
}


function levelToClass(level) {
    if (level === 2) {
      return "Medium";
    } else if (level === 3) {
      return "High";
    } else {
        return "Low";
    }
}

getMembers();

const displayMembers = (myArray) => {
    for (let step = 0; step < 4; step++) {
    const random = Math.floor(Math.random() * myArray.length);

    let picked = myArray[random];
    myArray.splice(random, 1);

    showData(picked)
    }
}

function showData(member) {
    const block = document.createElement('section')
    block.className='card'
    
    const logo = document.createElement('img')
    logo.src = `images/${member.image}`
    logo.alt = member.name
    logo.loading = 'lazy'
    logo.width = 100  
    block.appendChild(logo)

    const name= document.createElement('h2')
    name.innerHTML = member.name
    block.appendChild(name)
    
    //***** Do not show following - too long card */

    // const description = document.createElement('p')
    // description.className="cardDescription"
    // description.innerHTML = member.description
    // block.appendChild(description)

    // const type = document.createElement('h5')
    // type.innerHTML = member.type
    // block.appendChild(type)

    const link = document.createElement('a')
    link.href = member.url
    link.textContent="Web Page"
    link.target = "_blank"
    block.appendChild(link)

    const level = document.createElement('p')
    level.className="cardLevel"
    level.innerHTML = `Site Complexity: <b>"${levelToClass(member.level)}</b>"`
    block.appendChild(level)
    
    partners.appendChild(block)
}


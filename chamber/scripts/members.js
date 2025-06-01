
const dataUrl = 'data/members.json';
const cards = document.querySelector('#cards');

const getMemberData = async () => {
    try {
        const response = await fetch(dataUrl); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        //console.table(data); // Output the fetched data
        displayMembers(data.members); // note that you reference the members array of the JSON data object, not just the object
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
const displayMembers = (members) => {
    // membersContainer.innerHTML = ''; // Clear existing content
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement("h2");
        let address = document.createElement('p');
        let email = document.createElement('p');
        let phone = document.createElement("p");
        let memberUrl = document.createElement("p");
        let image = document.createElement('img');

        card.setAttribute('class', 'card');

        // Build the h2 content out to show the member's name
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        email.textContent = `EMAIL: ${member.email}`;
     
        phone.textContent = `PHONE: ${member.phone}`;
        memberUrl.textContent = `URL: ${member.url}`;

        // Build the image by setting all the relevant attributes
              
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', `${member.image}`); 
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', 'auto');

        // Append the section(card) with the created elements
        card.appendChild(name); 
        card.appendChild(address);
        card.appendChild(image);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(memberUrl);
        cards.appendChild(card);

    });
}
getMemberData();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener('click', () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener('click', () => {
    display.classList.add("list");
    display.classList.remove("grid");
});



const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json"); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        //console.table(data); // Output the fetched data
        displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement("p");
        let placeOfBirth = document.createElement("p");
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // Build the image portrait by setting all the relevant attributes
        birthDate.textContent = `Date of birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of birth: ${prophet.birthplace}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.fullName}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); 
        card.appendChild(birthDate);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        cards.appendChild(card);



    });
}
getProphetData();


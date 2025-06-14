import events from '../data/events.mjs';

const event=events.cybersecurityEvents;


const eventsListContainer = document.getElementById('eventsList');
const today = new Date();
today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for compariso
// Filter out past events and sort upcoming events
const upcomingEvents = event
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
// Display a maximum of 5 upcoming events or all if less than 5
const eventsToDisplay = upcomingEvents.slice(0, 3); // Display top 5 closest event
if (eventsToDisplay.length > 0) {
    eventsToDisplay.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card')
        const eventDate = new Date(event.date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = eventDate.toLocaleDateString('en-US', options); // Format date for displa
        eventCard.innerHTML = `
            <h3 class="card-info">${event.name}</h3>
            <p id="card-date" class="card-info">Date:<b> ${formattedDate}</b></p>
            <p class="card-info">${event.description}</p>
            <a id="schedule-up" class="card-info" href="${event.link}"> Schedule Up</a>
        `;
        eventsListContainer.appendChild(eventCard);
    });
} else {
        eventsListContainer.innerHTML = '<p>No upcoming cybersecurity events at the moment. Check back soon!</p>';
        }

        
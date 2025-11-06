import { pokeData } from '../data/pokemon.js';

// Get DOM elements
const displayMenuItems = document.querySelector('#gamesHere');
const myDialog = document.querySelector('#mydialog');
const closeBtn = document.querySelector('#closeBtn');

// Modal elements
const myTitle = document.querySelector('#myTitle');
const myRegion = document.querySelector('#myRegion');
const myStarters = document.querySelector('#myStarters');
const myLegendaries = document.querySelector('#myLegendaries');
const myPlatform = document.querySelector('#myPlatform');
const myYear = document.querySelector('#myYear');
const myDescription = document.querySelector('#myDescription');
const myImage = document.querySelector('#myImage');

// Display all game items
function displayItems(data) {
    data.forEach(game => {
        // Create container div
        const gameCard = document.createElement('div');
        gameCard.className = "border-4 border-yellow-400 rounded-xl text-center bg-gradient-to-b from-red-500 to-blue-500 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden";
        
        // Create image
        const gameImage = document.createElement('img');
        gameImage.src = game.image_path;
        gameImage.alt = game.title;
        gameImage.className = "w-full h-48 object-cover";
        
        // Create title
        const gameTitle = document.createElement('h2');
        gameTitle.className = "text-xl font-bold mx-2 my-3 text-white drop-shadow-lg";
        gameTitle.textContent = game.title;
        
        // Create Learn More button
        const learnMoreBtn = document.createElement('button');
        learnMoreBtn.textContent = 'Learn More';
        learnMoreBtn.className = "mb-4 mt-2 px-6 py-2 bg-yellow-400 text-red-600 font-bold rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg";
        learnMoreBtn.addEventListener('click', () => showGameDetails(game));
        
        // Append elements to card
        gameCard.appendChild(gameImage);
        gameCard.appendChild(gameTitle);
        gameCard.appendChild(learnMoreBtn);
        
        // Append card to container
        displayMenuItems.appendChild(gameCard);
    });
}

// Show game details in modal
function showGameDetails(game) {
    myTitle.textContent = game.title;
    myRegion.innerHTML = `<strong class="text-red-600">Region:</strong> ${game.region}`;
    myStarters.innerHTML = `<strong class="text-blue-600">Starter Pokémon:</strong> ${game.starter_pokemon.join(', ')}`;
    myLegendaries.innerHTML = `<strong class="text-yellow-600">Main Legendaries:</strong> ${game.main_legendaries.join(', ')}`;
    myPlatform.innerHTML = `<strong class="text-green-600">Platform:</strong> ${game.platform}`;
    myYear.innerHTML = `<strong class="text-purple-600">Year Released:</strong> ${game.year_released}`;
    myDescription.innerHTML = `<strong class="text-gray-900">Description:</strong> ${game.description}`;
    myImage.src = game.image_path;
    myImage.alt = game.title;
    
    // Show the modal
    myDialog.showModal();
}

// Close button event listener
closeBtn.addEventListener('click', () => {
    myDialog.close();
});

// Close modal when clicking outside of it
myDialog.addEventListener('click', (e) => {
    const dialogDimensions = myDialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        myDialog.close();
    }
});

// Initialize the page
displayItems(pokeData);
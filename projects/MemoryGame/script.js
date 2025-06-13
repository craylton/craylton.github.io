function generateDotPatternImage(size = 100, dotCount = 10) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Background color
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);

    // Draw random dots
    for (let i = 0; i < dotCount; i++) {
        ctx.beginPath();
        const x = Math.random() * size;
        const y = Math.random() * size;
        const radius = Math.random() * 20 + 5;
        ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 50%)`; // random color
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Return data URL to use as image
    return canvas.toDataURL();
}

let cards = [];
let cardsFlippedThisTurn = [];
let turnCount = 0;

function checkWin() {
    if (cards.every(card => card.dataset.matched === 'true')) {
        const winMsg = document.getElementById('win-message');
        winMsg.textContent = `You won in ${turnCount} turns!`;
        winMsg.style.display = 'block';
    }
}

function handleCardClick(event) {
    const card = event.currentTarget;

    // if 2 cards are already flipped, unflip them
    if (cardsFlippedThisTurn.length >= 2) {
        cards.forEach(c => {
            if (c.dataset.flipped === 'true' && c.dataset.matched === 'false') {
                c.style.backgroundImage = '';
                c.dataset.flipped = 'false';
            }
        });
        cardsFlippedThisTurn = []; // Reset for next turn
        return;
    }

    // If card is already matched, do nothing
    if (card.dataset.matched === 'true') {
        return;
    }
    // If card is already flipped, do nothing
    if (card.dataset.flipped === 'true') {
        return;
    }

    card.style.backgroundImage = `url(${card.dataset.image})`;
    card.dataset.flipped = 'true';
    cardsFlippedThisTurn.push(card);

    if (cardsFlippedThisTurn.length === 2) {
        turnCount++;

        if (cardsFlippedThisTurn[0].dataset.id !== cardsFlippedThisTurn[1].dataset.id) {
            return;
        }

        // If cards match, mark them as matched
        const flippedCards = cards.filter(c => c.dataset.flipped === 'true');
        flippedCards.forEach(c => {
            c.dataset.matched = 'true';
        });
        cardsFlippedThisTurn = []; // Reset for next turn
        checkWin();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');

    const numPairs = 6;
    const images = [];

    for (let i = 0; i < numPairs; i++) {
        const img = { image: generateDotPatternImage(), imageId: i };
        images.push(img, img); // Two of each image
    }

    // Shuffle images
    images.sort(() => Math.random() - 0.5);

    images.forEach((img, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = img.image;
        card.dataset.id = img.imageId;
        card.dataset.flipped = 'false';
        card.dataset.matched = 'false';
        card.addEventListener('click', handleCardClick);
        cards.push(card);

        gameBoard.appendChild(card);
    });
});

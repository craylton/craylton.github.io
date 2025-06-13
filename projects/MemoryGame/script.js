// Card class to encapsulate card state
class Card {
    constructor(image, imageId) {
        this.image = image;
        this.imageId = imageId;
        this.flipped = false;
        this.matched = false;
        this.element = this.createElement();
    }

    createElement() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', () => this.handleClick());
        return card;
    }

    handleClick() {
        if (this.onClick) {
            this.onClick(this);
        }
    }

    render() {
        if (this.flipped || this.matched) {
            this.element.style.backgroundImage = `url(${this.image})`;
        } else {
            this.element.style.backgroundImage = '';
        }
        this.element.classList.toggle('flipped', this.flipped);
        this.element.classList.toggle('matched', this.matched);
    }
}

// MemoryGame class to manage game state
class MemoryGame {
    constructor(boardElement, winMessageElement, numPairs = 6) {
        this.boardElement = boardElement;
        this.winMessageElement = winMessageElement;
        this.numPairs = numPairs;
        this.cards = [];
        this.cardsFlippedThisTurn = [];
        this.turnCount = 0;
    }

    generateDotPatternImage(size = 100, dotCount = 10) {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, size, size);
        for (let i = 0; i < dotCount; i++) {
            ctx.beginPath();
            const x = Math.random() * size;
            const y = Math.random() * size;
            const radius = Math.random() * 20 + 5;
            ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 50%)`;
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
        return canvas.toDataURL();
    }

    setupGame() {
        this.clearBoard();
        this.cards = [];
        this.cardsFlippedThisTurn = [];
        this.turnCount = 0;
        this.hideWinMessage();
        // Generate images
        const images = [];
        for (let i = 0; i < this.numPairs; i++) {
            const img = { image: this.generateDotPatternImage(), imageId: i };
            images.push(img, img);
        }
        images.sort(() => Math.random() - 0.5);
        // Create cards
        images.forEach(img => {
            const card = new Card(img.image, img.imageId);
            card.onClick = (c) => this.handleCardClick(c);
            this.cards.push(card);
            this.boardElement.appendChild(card.element);
            card.render();
        });
    }

    clearBoard() {
        while (this.boardElement.firstChild) {
            this.boardElement.removeChild(this.boardElement.firstChild);
        }
    }

    handleCardClick(card) {
        if (card.flipped || card.matched) return;
        if (this.cardsFlippedThisTurn.length === 2) {
            this.unflipUnmatched();
            return;
        }
        card.flipped = true;
        card.render();
        this.cardsFlippedThisTurn.push(card);
        if (this.cardsFlippedThisTurn.length === 2) {
            this.turnCount++;
            const [c1, c2] = this.cardsFlippedThisTurn;
            if (c1.imageId === c2.imageId) {
                c1.matched = c2.matched = true;
                c1.render();
                c2.render();
                this.cardsFlippedThisTurn = [];
                this.checkWin();
            }
        }
    }

    unflipUnmatched() {
        const [c1, c2] = this.cardsFlippedThisTurn;
        if (c1 && c2 && !c1.matched && !c2.matched) {
            c1.flipped = false;
            c2.flipped = false;
            c1.render();
            c2.render();
        }
        this.cardsFlippedThisTurn = [];
    }

    checkWin() {
        if (this.cards.every(card => card.matched)) {
            this.showWinMessage();
        }
    }

    showWinMessage() {
        this.winMessageElement.innerHTML = `You won in ${this.turnCount} turns!<br><button id="restart-btn" class="restart-btn">Restart</button>`;
        this.winMessageElement.style.display = 'block';
        document.getElementById('restart-btn').onclick = () => this.setupGame();
    }

    hideWinMessage() {
        this.winMessageElement.style.display = 'none';
        this.winMessageElement.innerHTML = '';
    }
}

// DOMContentLoaded setup
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const winMsg = document.getElementById('win-message');
    const game = new MemoryGame(board, winMsg);
    game.setupGame();
});

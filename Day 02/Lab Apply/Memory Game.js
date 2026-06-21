"use strict";
class GamePlaySound {
    path = "assets/audio/Air.m4a";
    play() {
        const audio = new Audio(this.path);
        audio.loop = true;
        audio.play();
    }
}
class ProgressBar {
    progress;
    step;
    constructor(_step) {
        this.progress = 0;
        this.step = _step;
    }
    increase() {
        this.progress += this.step;
        const progressBar = document.getElementById("progressBar");
        if (progressBar) {
            progressBar.style.width = `${this.progress}%`;
            progressBar.textContent = `${Math.round(this.progress)}%`;
        }
    }
}
class Card {
    id;
    cardOrder = -1;
    isSelected;
    imagePath;
    constructor(id, imagePath) {
        this.id = id;
        this.isSelected = false;
        this.imagePath = imagePath;
        this.cardOrder = id;
    }
    select() {
        this.isSelected = true;
        const img = document.getElementById(`c${this.cardOrder + 1}`);
        if (img)
            img.src = this.imagePath;
    }
    deselect(defaultImagePath) {
        this.isSelected = false;
        const img = document.getElementById(`c${this.cardOrder + 1}`);
        if (img)
            img.src = defaultImagePath;
    }
}
class MatchCardsSoundEffect {
    soundPath = "assets/audio/good.mp3";
    play() {
        new Audio(this.soundPath).play();
    }
}
class MismatchCardsSoundEffect {
    soundPath = "assets/audio/fail.mp3";
    play() {
        new Audio(this.soundPath).play();
    }
}
class GameOverSoundEffect {
    soundPath = "assets/audio/game-over.mp3";
    play() {
        new Audio(this.soundPath).play();
    }
}
class FlipCardSoundEffect {
    soundPath = `assets/audio/flip.mp3`;
    play() {
        new Audio(this.soundPath).play();
    }
}
class CardDeck {
    progressBar;
    cards;
    defaultImagePath;
    currentSelectedCard = null;
    constructor(cards, defaultImagePath) {
        this.cards = cards;
        this.defaultImagePath = defaultImagePath;
        this.progressBar = new ProgressBar(100.0 / (cards.length / 2));
    }
    clickCard(cardId) {
        const card = this.cards.find(c => c.id === cardId);
        if (!card)
            throw new Error(`Card with index ${cardId} not found.`);
        if (this.currentSelectedCard && this.currentSelectedCard.id === cardId) {
            card.deselect(this.defaultImagePath);
            Game.PlaySoundEffect(new FlipCardSoundEffect());
            this.currentSelectedCard = null;
        }
        else if (card.isSelected)
            return;
        else {
            card.select();
            Game.PlaySoundEffect(new FlipCardSoundEffect());
            if (this.currentSelectedCard) {
                if (Game.isMatch(this.currentSelectedCard, card)) {
                    Game.PlaySoundEffect(new MatchCardsSoundEffect());
                    this.progressBar.increase();
                    if (this.progressBar.progress >= 100)
                        Game.PlaySoundEffect(new GameOverSoundEffect());
                    this.currentSelectedCard = null;
                }
                else {
                    Game.PlaySoundEffect(new MismatchCardsSoundEffect());
                    setTimeout(() => {
                        card.deselect(this.defaultImagePath);
                        this.currentSelectedCard?.deselect(this.defaultImagePath);
                        this.currentSelectedCard = null;
                    }, 500);
                }
            }
            else
                this.currentSelectedCard = card;
        }
    }
}
class Game {
    cardDeck;
    constructor(cardDeck) {
        new GamePlaySound().play();
        this.cardDeck = cardDeck;
    }
    clickCard(cardId) {
        this.cardDeck.clickCard(cardId);
    }
    static isMatch(card1, card2) {
        if (card1.imagePath === card2.imagePath)
            return true;
        return false;
    }
    static PlaySoundEffect(soundEffect) {
        soundEffect.play();
    }
}
var cards = new Array();
const cardsCnt = 11;
for (let i = 0; i < cardsCnt; i++) {
    var imgPath = `assets/images/${i}.jpg`;
    cards.push(new Card(2 * i, imgPath));
    cards.push(new Card(2 * i + 1, imgPath));
}
function shuffleCards(cards) {
    var cnt = cards.length;
    while (cnt) {
        var left = Math.floor(Math.random() * cards.length);
        var right = Math.floor(Math.random() * cards.length);
        if (left === right)
            continue;
        var tmp = cards[left];
        cards[left] = cards[right];
        cards[right] = tmp;
        cnt--;
    }
    for (let i = 0; i < cards.length; i++)
        cards[i].cardOrder = i;
}
shuffleCards(cards);
var game = new Game(new CardDeck(cards, "assets/back.jpg"));

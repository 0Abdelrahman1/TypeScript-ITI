class GamePlaySound
{
    path: string = "assets/audio/Air.m4a";

    play()
    {
        const audio = new Audio(this.path);
        audio.loop = true;
        audio.play();
    }
}

class ProgressBar
{
    progress: number;
    private step: number;
    constructor(_step: number)
    {
        this.progress = 0;
        this.step = _step;
    }

    increase()
    {
        this.progress += this.step;
        const progressBar = document.getElementById("progressBar") as HTMLDivElement;
        if (progressBar) {
            progressBar.style.width = `${this.progress}%`;    
            progressBar.textContent = `${Math.round(this.progress)}%`;
        }
    }
}

class Card
{
    id: number;
    cardOrder: number = -1;
    isSelected: boolean;
    imagePath: string;

    constructor(id: number, imagePath: string)
    {
        this.id = id;
        this.isSelected = false;
        this.imagePath = imagePath;
        this.cardOrder = id;
    }

    select()
    {
        this.isSelected = true;
        const img = document.getElementById(`c${this.cardOrder + 1}`) as HTMLImageElement | null;
        if (img)
            img.src = this.imagePath;
    }
    deselect(defaultImagePath: string)
    {
        this.isSelected = false;
        const img = document.getElementById(`c${this.cardOrder + 1}`) as HTMLImageElement | null;
        if (img)
            img.src = defaultImagePath;
    }
}

interface ISoundEffect
{
    soundPath: string;
    play(): void;
}

class MatchCardsSoundEffect implements ISoundEffect
{
    soundPath: string = "assets/audio/good.mp3";
    play()
    {
        new Audio(this.soundPath).play();
    }
}
class MismatchCardsSoundEffect implements ISoundEffect
{
    soundPath: string = "assets/audio/fail.mp3";
    play()
    {
        new Audio(this.soundPath).play();
    }
}
class GameOverSoundEffect implements ISoundEffect
{
    soundPath: string = "assets/audio/game-over.mp3";
    play()
    {
        new Audio(this.soundPath).play();
    }
}
class FlipCardSoundEffect implements ISoundEffect
{
    soundPath: string = `assets/audio/flip.mp3`;
    play()
    {
        new Audio(this.soundPath).play();
    }
}


class CardDeck
{
    progressBar: ProgressBar;
    cards: Card[];
    defaultImagePath: string;
    currentSelectedCard: Card | null = null;
    constructor(cards: Card[], defaultImagePath: string)
    {
        this.cards = cards;
        this.defaultImagePath = defaultImagePath;
        this.progressBar = new ProgressBar(100.0 / (cards.length / 2));
    }

    clickCard(cardId: number)
    {
        const card = this.cards.find(c => c.id === cardId);
        if (!card) throw new Error(`Card with index ${cardId} not found.`);

        if (this.currentSelectedCard && this.currentSelectedCard.id === cardId)
        {
            card.deselect(this.defaultImagePath);
            Game.PlaySoundEffect(new FlipCardSoundEffect());
            this.currentSelectedCard = null;
        }
        else if (card.isSelected)
            return;
        else
        {
            card.select();
            Game.PlaySoundEffect(new FlipCardSoundEffect());
            if (this.currentSelectedCard)
            {
                if (Game.isMatch(this.currentSelectedCard, card))
                {
                    Game.PlaySoundEffect(new MatchCardsSoundEffect());
                    this.progressBar.increase();
                    if (this.progressBar.progress >= 100)
                        Game.PlaySoundEffect(new GameOverSoundEffect());
                    this.currentSelectedCard = null;
                }
                else
                {
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

class Game
{
    cardDeck: CardDeck;

    constructor(cardDeck: CardDeck)
    {
        new GamePlaySound().play();
        this.cardDeck = cardDeck;
    }

    clickCard(cardId: number)
    {
        this.cardDeck.clickCard(cardId);
    }

    static isMatch(card1: Card, card2: Card): boolean
    {
        if (card1.imagePath === card2.imagePath)
            return true;
        return false;
    }

    static PlaySoundEffect(soundEffect: ISoundEffect)
    {
        soundEffect.play();
    }
}


var cards: Card[] = new Array();
const cardsCnt = 11;

for (let i:number = 0; i < cardsCnt; i++)
{
    var imgPath = `assets/images/${i}.jpg`;
    cards.push(new Card(2 * i, imgPath));
    cards.push(new Card(2 * i + 1, imgPath));
}

function shuffleCards(cards: Card[])
{
    var cnt: number = cards.length;
    while (cnt)
    {
        var left = Math.floor(Math.random() * cards.length);
        var right = Math.floor(Math.random() * cards.length);
        if (left === right) continue;
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
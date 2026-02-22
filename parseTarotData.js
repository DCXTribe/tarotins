const fs = require('fs');
const path = require('path');

const markdownPath = path.join(__dirname, 'TarotCardsReference/tarot-card-reference.md');
const markdownContent = fs.readFileSync(markdownPath, 'utf-8');

const cards = [];
const lines = markdownContent.split('\n');

let currentCard = null;
let currentSection = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // New Card: starts with ### [Number.] [Name]
    if (line.startsWith('### ')) {
        if (currentCard) {
            cards.push(currentCard);
        }
        const nameMatch = line.match(/^###\s+(?:\d{1,2}\.\s+)?(.+)/);
        if (nameMatch) {
            currentCard = {
                name: nameMatch[1],
                fileName: '',
                keywords: '',
                description: '',
                uprightMeaning: [],
                reversedMeaning: [],
                symbolism: []
            };
            currentSection = null;
        }
    } else if (currentCard) {
        if (line.startsWith('**File Name:**')) {
            const fnMatch = line.match(/\`(.+?)\`/);
            if (fnMatch) currentCard.fileName = fnMatch[1];
        } else if (line.startsWith('**Keywords:**')) {
            currentCard.keywords = line.replace('**Keywords:**', '').trim();
        } else if (line.startsWith('**Description:**')) {
            currentCard.description = line.replace('**Description:**', '').trim();
        } else if (line.startsWith('**Upright Meaning:**')) {
            currentSection = 'upright';
        } else if (line.startsWith('**Reversed Meaning:**')) {
            currentSection = 'reversed';
        } else if (line.startsWith('**Symbolism:**')) {
            currentSection = 'symbolism';
        } else if (line.startsWith('- ') && currentSection) {
            const item = line.replace('- ', '').trim();
            if (currentSection === 'upright') currentCard.uprightMeaning.push(item);
            else if (currentSection === 'reversed') currentCard.reversedMeaning.push(item);
            else if (currentSection === 'symbolism') currentCard.symbolism.push(item);
        }
    }
}

if (currentCard) {
    cards.push(currentCard);
}

// Ensure dir exists
fs.mkdirSync(path.join(__dirname, 'src/data'), { recursive: true });

// Write JSON
fs.writeFileSync(path.join(__dirname, 'src/data/tarotCards.json'), JSON.stringify(cards, null, 2));

// Filter out missing files to avoid require errors
const existingFiles = fs.readdirSync(path.join(__dirname, 'assets/cards'));
const validCards = cards.filter(c => c.fileName && existingFiles.includes(c.fileName));

// Generate index.js for assets
let indexContent = 'export const TarotCardImages = {\n';
validCards.forEach(card => {
    // Use a safe key (remove spaces, hyphens)
    const safeKey = card.fileName.replace('.png', '').replace(/[^a-zA-Z0-9]/g, '');
    indexContent += `  '${card.name}': require('./${card.fileName}'),\n`;
});
indexContent += '};\n';

fs.writeFileSync(path.join(__dirname, 'assets/cards/index.js'), indexContent);

console.log(`Parsed ${cards.length} cards. Generated JSON and assets index.`);

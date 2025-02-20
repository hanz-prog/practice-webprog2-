const express = require('express');
const app = express();
const port = 5000;

const heroes = [
    { id: "h1", name: "Arthur", class: "Warrior", lane: "Solo", faction: "Avalon" },
    { id: "h2", name: "Diao Chan", class: "Mage", lane: "Mid", faction: "Frost Order" },
    { id: "h3", name: "Sun Ce", class: "Tank", lane: "Jungle", faction: "Eastern Seas" },
    { id: "h4", name: "Marco Polo", class: "Marksman", lane: "Bot", faction: "Western Lands" },
    { id: "h5", name: "Miyamoto Musashi", class: "Assassin", lane: "Jungle", faction: "Ronin Clan" },
    { id: "h6", name: "Angela", class: "Mage", lane: "Mid", faction: "Magic Council" },
    { id: "h7", name: "Lü Bu", class: "Fighter", lane: "Solo", faction: "Conquerors" },
    { id: "h8", name: "Gongsun Li", class: "Marksman", lane: "Bot", faction: "Shadow Sect" },
    { id: "h9", name: "Han Xin", class: "Assassin", lane: "Jungle", faction: "Rebel Forces" },
    { id: "h10", name: "Zhuge Liang", class: "Mage", lane: "Mid", faction: "Strategists" }
];

// Fetch all heroes
app.get('/heroes', (req, res) => {
    if (heroes.length === 0) {
        return res.status(404).json({ error: "No heroes found" });
    }
    res.json(heroes);
});

// Fetch details of a specific hero by ID
app.get('/heroes/:id', (req, res) => {
    const hero = heroes.find(h => h.id === req.params.id);
    if (!hero) {
        return res.status(404).json({ error: "Hero not found" });
    }
    res.json(hero);
});

// Fetch all heroes in a specific lane
app.get('/heroes/lane/:lane', (req, res) => {
    const result = heroes.filter(h => h.lane.toLowerCase() === req.params.lane.toLowerCase());
    if (result.length === 0) {
        return res.status(404).json({ error: `Heroes not found in lane: ${req.params.lane}` });
    }
    res.json(result);
});

// Fetch all heroes belonging to a specific faction
app.get('/heroes/faction/:faction', (req, res) => {
    const result = heroes.filter(h => h.faction.toLowerCase() === req.params.faction.toLowerCase());
    if (result.length === 0) {
        return res.status(404).json({ error: `Heroes not found in faction: ${req.params.faction}` });
    }
    res.json(result);
});

// Fetch all heroes of a specific class
app.get('/heroes/class/:class', (req, res) => {
    const result = heroes.filter(h => h.class.toLowerCase() === req.params.class.toLowerCase());
    if (result.length === 0) {
        return res.status(404).json({ error: `Heroes not found in class: ${req.params.class}` });
    }
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

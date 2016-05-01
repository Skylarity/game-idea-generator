$(document).ready(function() {
	regenerate();
	$("#date").text(new Date().getFullYear())
});

function generate() {
	bits = {
		"happyGameModifiers": ["colorful", "cheerful", "cartoony"],
		"sadGameModifiers": ["gritty", "grimy", "brown", "macabre", "noir", "dark"],
		"neutralGameModifiers": ["MMO", "artsy", "pixelated", "retro", "bullethell"],

		"gameGenre": ["RPG", "platformer", "sidescroller", "first-person game", "third-person game", "top-down game" "tower defense game", "puzzle game", "simulator", "hack n' slash", "roguelike", "metroidvania"],

		"happyFirstAdjectives"; ["happy", "angelic"],
		"happySecondAdjectives"; ["top dog", "hero"],
		"sadFirstAdjectives": ["sad", "solemn"],
		"sadSecondAdjectives": ["underdog", "anti-hero"],
		"neutralFirstAdjectives": ["space", "driven"],
		"neutralSecondAdjectives": ["little", "young", "old"],

		"nouns": ["truckers", "soldier", "girl", "woman", "boy", "man", "dog", "monster"],

		"settings": ["in a forest", "under the sea", "in the ocean", "in space", "in a cave", "in a cavern", "in a big city", "in a small town", "in the desert", "on an island"]
	};

	sentence = "";

	happy = false;
	if (getRandomInt(0, 100) > 50) {
		happy = true;
	}
	secondAdjective = false;
	if (getRandomInt(0, 100) > 25) {
		secondAdjective = true;
	}

	if (happy) {
		gameModifier1 = bits.happyGameModifiers[rand = getRandomInt(0, bits.happyGameModifiers.length)];
		adjective1 = bits.happyFirstAdjectives[rand = getRandomInt(0, bits.happyFirstAdjectives.length)];
		if (secondAdjective) {
			adjective2 = bits.happySecondAdjectives[rand = getRandomInt(0, bits.happySecondAdjectives.length)];
		}
	} else {
		gameModifier1 = bits.sadGameModifiers[rand = getRandomInt(0, bits.sadGameModifiers.length)];
		adjective1 = bits.sadFirstAdjectives[rand = getRandomInt(0, bits.sadFirstAdjectives.length)];
	}
	gameModifier2 = bits.neutralGameModifiers[rand = getRandomInt(0, bits.neutralGameModifiers.length)];
	gameGenre = bits.gameGenre[rand = getRandomInt(0, bits.gameGenre.length)];

	sentence = gamemodifier1 + " " + gameModifier2 + " " + gameGenre + " " + "about a(n)" + " " + adjective1 + " " + adjective2 + " " + noun + setting;

	firstLetter = sentence.charAt(0).toUpperCase();
	sentence = firstLetter + sentence.substring(1, sentence.length) + ".";
	return sentence;
}

function regenerate() {
	$("#generated").text(generate());
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

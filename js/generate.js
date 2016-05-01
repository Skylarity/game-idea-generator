$(document).ready(function() {
	regenerate();
	$("#date").text(new Date().getFullYear())
});

function generate() {
	bits = {
		"gamemodifier": ["mmo", "retro", "pixelated", "grimy", "gritty", "brown", "colorful", "cheerful", "macabre", "noir", "cartoony"],
		"gametype": ["rpg", "platformer", "sidescroller", "first-person shooter", "third-person shooter", "roguelike", "metroidvania", "puzzle game", "simulator", "hack n' slash"],
		"nouns": ["truckers", "soldier", "girl", "woman", "boy", "man", "dog"],
		"adjectives": ["space", "sad", "solemn", "underdog", "little", "old", "young"],
		"settings": ["a forest", "the ocean", "space", "an underground cave", "a big city", "a small town", "the desert", "an island"]
	};

	sentence = "";

	gamemodifier = bits.gamemodifier[rand = getRandomInt(0, bits.gamemodifier.length)];
	gametype = bits.gametype[rand = getRandomInt(0, bits.gametype.length)];
	noun = bits.nouns[rand = getRandomInt(0, bits.nouns.length)];
	adjective = bits.adjectives[rand = getRandomInt(0, bits.adjectives.length)];
	adjective2 = bits.adjectives[rand = getRandomInt(0, bits.adjectives.length)];
	setting = bits.settings[rand = getRandomInt(0, bits.settings.length)];

	if (adjective == adjective2) {
		adjective2 = bits.adjectives[rand = getRandomInt(0, bits.adjectives.length)];
	}

	if (getRandomInt(0, 100) > 50) {
		sentence = gamemodifier + " " + gametype + " about " + " " + adjective + " " + noun + " in " + setting;
	} else {
		sentence = gamemodifier + " " + gametype + " about " + " " + adjective + " " + adjective2 + " " + noun + " in " + setting;
	}

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

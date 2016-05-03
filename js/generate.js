$(document).ready(function() {
	regenerate();
	$("#date").text(new Date().getFullYear())
});

function generate() {
	bits = {
		"happyGameModifiers": ["colorful", "cheerful", "cartoony"],
		"sadGameModifiers": ["gritty", "grimy", "brown", "macabre", "noir", "dark"],
		"neutralGameModifiers": ["MMO", "artsy", "pixelated", "retro", "bullethell"],

		"gameGenres": ["RPG", "platformer", "sidescroller", "first-person game", "third-person game", "top-down game", "tower defense game", "puzzle game", "simulator", "hack n' slash", "roguelike", "metroidvania"],

		"happyFirstAdjectives": ["happy", "virtuous", "adorable", "righteous"],
		"happySecondAdjectives": ["hero", "adventurer", "explorer", "daredevil"],
		"sadFirstAdjectives": ["sad", "solemn", "morose", "hellish", "wicked", "unkind", "rough", "clumsy"],
		"sadSecondAdjectives": ["underdog", "anti-hero"],
		"neutralFirstAdjectives": ["little", "young", "old"],
		"neutralSecondAdjectives": ["space", "ambitious", ""],

		"nouns": ["trucker", "soldier", "girl", "woman", "boy", "man", "dog", "monster", "ninja", "pirate", "alien", "bird", "monk"],

		"settings": ["in a forest", "under the sea", "in the ocean", "in space", "in a cave", "in a cavern", "in a big city", "in a small town", "in the desert", "on an island"]
	};

	sentence = "";

	happy = false;
	if (getRandomInt(0, 100) > 50) {
		happy = true;
	}
	secondAdjective = false;
	if (getRandomInt(0, 100) > 50) {
		// secondAdjective = true; // TODO: Fix how second adjectives work
	}
	neutralAdjective = false;
	if (getRandomInt(0, 100) > 50) {
		neutralAdjective = true;
	}

	if (happy) {
		sentence += bits.happyGameModifiers[rand = getRandomInt(0, bits.happyGameModifiers.length)];
		sentence += " ";
	} else {
		sentence += bits.sadGameModifiers[rand = getRandomInt(0, bits.sadGameModifiers.length)];
		sentence += " ";
	}
	sentence += bits.neutralGameModifiers[rand = getRandomInt(0, bits.neutralGameModifiers.length)];
	sentence += " ";
	sentence += bits.gameGenres[rand = getRandomInt(0, bits.gameGenres.length)];
	sentence += " about ";
	if (happy) {
		sentence += bits.happyFirstAdjectives[rand = getRandomInt(0, bits.happyFirstAdjectives.length)];
		sentence += " ";
	} else {
		sentence += bits.sadFirstAdjectives[rand = getRandomInt(0, bits.sadFirstAdjectives.length)];
		sentence += " ";
	}
	if (neutralAdjective) {
		sentence += bits.neutralFirstAdjectives[rand = getRandomInt(0, bits.neutralFirstAdjectives.length)];
		sentence += " ";
	}
	sentence += " ";
	if (neutralAdjective && secondAdjective) {
		sentence += bits.neutralSecondAdjectives[rand = getRandomInt(0, bits.neutralSecondAdjectives.length)];
		sentence += " ";
	}
	sentence += bits.nouns[rand = getRandomInt(0, bits.nouns.length)];
	sentence += " ";
	if (secondAdjective) {
		if (happy) {
			sentence += bits.happySecondAdjectives[rand = getRandomInt(0, bits.happySecondAdjectives.length)];
			sentence += " ";
		} else {
			sentence += bits.sadSecondAdjectives[rand = getRandomInt(0, bits.sadSecondAdjectives.length)];
			sentence += " ";
		}
	}
	sentence += bits.settings[rand = getRandomInt(0, bits.settings.length)];

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

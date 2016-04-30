$(document).ready(function() {
	regenerate();
});

function generate() {
	bits = {
		"nouns": ["tree", "trucker", "soldier", "girl", "woman", "boy", "man"],
		"adjectives": ["space", "sad", "solemn", "underdog", "little", "old", "young"]
	};

	noun = bits.nouns[rand = getRandomInt(0, bits.nouns.length)];
	adjective = bits.adjectives[rand = getRandomInt(0, bits.adjectives.length)];

	return "A " + adjective + " " + noun + "."
}

function regenerate() {
	$("#generated").text(generate());
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

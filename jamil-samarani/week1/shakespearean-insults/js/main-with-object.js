console.log('Shakespearean Insults USING AN OBJECT!');

//use an object
const insult = {


// Our arrays of insult adjectives and nouns:
  firstAdjectives : [
    'artless',
    'bawdy',
    'beslubbering',
    'bootless',
    'churlish',
    'cockered',
    'clouted',
    'craven',
    'currish',
    'dankish',
    'dissembling',
    'droning',
    'errant',
    'fawning',
    'fobbing',
    'froward',
    'frothy',
    'gleeking',
    'goatish',
    'gorbellied',
    'impertinent',
    'infectious',
    'jarring',
    'loggerheaded',
    'lumpish',
    'mammering',
    'mangled',
    'mewling',
    'paunchy',
    'pribbling',
    'puking',
    'puny',
    'qualling',
    'rank',
    'reeky',
    'roguish',
    'ruttish',
    'saucy',
    'spleeny',
    'spongy',
    'surly',
    'tottering',
    'unmuzzled',
    'vain',
    'venomed',
    'villainous',
    'warped',
    'wayward',
    'weedy',
    'yeasty'
  ],

  secondAdjectives : [
    'base-court',
    'bat-fowling',
    'beef-witted',
    'beetle-headed',
    'boil-brained',
    'clapper-clawed',
    'clay-brained',
    'common-kissing',
    'crook-pated',
    'dismal-dreaming',
    'dizzy-eyed',
    'doghearted',
    'dread-bolted',
    'earth-vexing',
    'elf-skinned',
    'fat-kidneyed',
    'fen-sucked',
    'flap-mouthed',
    'fly-bitten',
    'folly-fallen',
    'fool-born',
    'full-gorged',
    'guts-griping',
    'half-faced',
    'hasty-witted',
    'hedge-born',
    'hell-hated',
    'idle-headed',
    'ill-breeding',
    'ill-nurtured',
    'knotty-pated',
    'milk-livered',
    'motley-minded',
    'onion-eyed',
    'plume-plucked',
    'pottle-deep',
    'pox-marked',
    'reeling-ripe',
    'rough-hewn',
    'rude-growing',
    'rump-fed',
    'shard-borne',
    'sheep-biting',
    'spur-galled',
    'swag-bellied',
    'tardy-gaited',
    'tickle-brained',
    'toad-spotted',
    'unchin-snouted',
    'weather-bitten'
  ],

  nouns : [
    'apple-john',
    'baggage',
    'barnacle',
    'bladder',
    'boar-pig',
    'bugbear',
    'bum-bailey',
    'canker-blossom',
    'clack-dish',
    'clotpole',
    'coxcomb',
    'codpiece',
    'death-token',
    'dewberry',
    'flap-dragon',
    'flax-wench',
    'flirt-gill',
    'foot-licker',
    'fustilarian',
    'giglet',
    'gudgeon',
    'haggard',
    'harpy',
    'hedge-pig',
    'horn-beast',
    'hugger-mugger',
    'joithead',
    'lewdster',
    'lout',
    'maggot-pie',
    'malt-worm',
    'mammet',
    'measle',
    'minnow',
    'miscreant',
    'moldwarp',
    'mumble-news',
    'nut-hook',
    'pigeon-egg',
    'pignut',
    'puttock',
    'pumpion',
    'ratsbane',
    'scut',
    'skainsmate',
    'strumpet',
    'varlot',
    'vassal',
    'whey-face',
    'wagtail'
  ],

//PSEUDOCODE -
// PLAIN ENGLISH VERSION OF YOUR CODE - A PLAN OF THE LOGIC
// Goal: print out a randomly generated insult.
//    -> Pick a random element from an array???
//        a. Generate and store a random number between 0 and .length - 1
//        b. Use that random number as an index into the array.
//        c. Store whatever is returned from that index.

//1. Pick a random first adjective from the first array.
// 2. Pick a random second adjective from the second array.
// 3. Pick a random noun from the third array.
// 4. Concatenate (join) them together with spaces and print out (with Thou at the front)

//  generateRandomInt( max ) : return a random integer in the range 0..max (non-inclusive)
  generateRandomInt : function( max ){
    const randomNum = Math.random() * max;
    const randomInt = Math.floor( randomNum );
    return randomInt;
  // one-liner
  // return Math.floor( Math.random() * max ); - no need for the last 3 lines above

  }, //generateRandomInt()


//  getRandomElementFromArray( array ) : return a random element from the specified array.
  getRandomElementFromArray : function( array ){
    const randomIndex = this.generateRandomInt( array.length );
    const randomItem = array[ randomIndex ];
    return randomItem;
  }, //getRandomElementFromArray()



//  generateInsult() : generate and print a random insult.
  generateInsult : function() {
    const firstAdjective = this.getRandomElementFromArray( this.firstAdjectives );
    const secondAdjective = this.getRandomElementFromArray( this.secondAdjectives );
    const noun = this.getRandomElementFromArray( this.nouns );

console.log(`Thou ${firstAdjective} ${secondAdjective} ${noun}!`);
}
};//end insult to make it one global variable

// users list of words to guess from

var wordList =  ['Jerry Seinfeld' , 'Elaine Benes' , 'George Costanza' , 'Newman' , 'Susan Ross' , 'Frank Costanza' , 'J Peterman' , 'Kenny Ban' , 'Uncle Leo' , 'Crazy Joe Davola']
;

var word = function() {
    this.gameWord = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(this.gameWord);

}

word();
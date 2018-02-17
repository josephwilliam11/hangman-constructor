// users list of words to guess from

var wordList =  ['jerry seinfeld' , 'elaine benes' , 'george costanza' , 'newman' , 'susan ross' , 'frank costanza' , 'j peterman' , 'kenny ban' , 'uncle leo' , 'crazy joe davola']
;

var word = function() {
    this.gameWord = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(this.gameWord);

}

word();
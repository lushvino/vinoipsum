var generator = function(options) {

    var sentanceMin  = options.sentanceMinimum || 4;
    var sentanceMax  = options.sentanceMaximum || 11;
    var paragraphMin = options.paragraphMinimum || 3;
    var paragraphMax = options.paragraphMaximum || 7;
    var count        = options.count || 1;
    var format       = options.count || 'text';
    var units        = options.units || 'sentences'


    var dictionary = require('./data/dictionary.js')


    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
     };

    var randomDictionaryWord = function(words) {
        return dictionary.words[randomNumber(0, dictionary.words.length - 1)];
    };


    var generateRandomSentence = function(words, min, max) {
        var sentence = '';
        var word_min = 0;
        var word_max = randomNumber(min, max)

        while (word_min < word_max) {
            sentence += ' ' + randomDictionaryWord(words);
            word_min +=  1;
        }

        if (sentence.length) {
            sentence = sentence.slice(1);
            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }

        return sentence;

    };

    var randomParagraph = function(words, min, max, sentence_min, sentence_max) {
        var paragraph = '';
        var para_min = 0;
        var para_max = randomNumber(min,max);

        while (para_min < para_max) {
            paragraph += '. ' + generateRandomSentence(words, sentence_min, sentence_max);
            para_min  +=  1;
        }

        if (paragraph.length) {
            paragraph = paragraph.slice(2);
            paragraph += '.';
        }

        return paragraph;
    };


    var iter = 0
    var bounds = {min: 0, max: count};
    var string = '';
    var prefix = '';
    var suffix = "\r\n";

    if (format == 'html') {
      prefix = '<p>';
      suffix = '</p>';
    }

    while (bounds.min < bounds.max) {
        switch (units.toLowerCase()) {
          case 'words':
            string += ' ' + randomDictionaryWord(dictionary.words);
            break;
          case 'sentences':
            string += '. ' + generateRandomSentence(dictionary.words, sentanceMin, sentanceMax);
            break;
          case 'paragraphs':
            string += prefix + generateRandomParagraph(dictionarywords, paragraphMin, paragraphMax, sentanceMin, sentanceMax) + suffix;
            break;
        }
        bounds.min = bounds.min + 1;
    }

    if (string.length) {
        var pos = 0;

        if (string.indexOf('. ') == 0) {
          pos = 2;
        } else if (string.indexOf('.') == 0 || string.indexOf(' ') == 0) {
          pos = 1;
        }

        string = string.slice(pos);

        if (units == 'sentences') {
          string = string + '.';
        }
    }

    return string;

};

module.exports = generator
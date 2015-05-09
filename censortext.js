module.exports = function() {

    var censorify = {

        censoredWords: ['sad', 'bad', 'mad'],
        customCensoredWords: [],
        censor: function(str) {

            for (idx in this.censoredWords) {

                str.replace(censoredWords[idx], '****');
            }
            for (idx in this.customCensoredWords) {

                str.replace(censoredWords[idx], '****');

            }
            return str;
        },
        addCensoredWord: function(str) {

            this.customCensoredWords.push(str);
        },
        getCensoredWords: function(str) {

            this.censoredWords.concat(this.customCensoredWords);
        }
    }
    return censorify;
}

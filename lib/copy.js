//
// Borrowed from node-lorem-ipsum
// https://github.com/knicklabs/node-lorem-ipsum
//

var execute   = require('child_process').exec;
var statement = '';

var clipboard = function(text, next) {
    statement = 'echo "' + text + '" | ';

    switch (process.platform) {
        case 'darwin':
            statement = statement + 'pbcopy';
            break;
        case 'win32':
            statement = statement + 'clip';
            break;
        case 'linux':
        default:
            statement = statement + 'xclip -selection clipboard';
    }

    execute(statement, function(err, stdout, stderr) {
        if (err) {
            next(new Error('Failed to copy data to clipboard'));
        }
        next(null);
    });
};

module.exports = clipboard;
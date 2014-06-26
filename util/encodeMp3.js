//File system loaded
var fs = require('fs');
var stream = require('stream');

//

var encodeMp3 = function(source, extension) {

    var data = fs.readFileSync(source);
//    console.log(data);

    var filename = source.split('.')[0].split('/')[4];

    filename = 'Encoded Files/' + filename + '.' + extension;

    console.log(filename);

    if(!fs.existsSync('Encoded Files'))
        fs.mkdirSync('Encoded Files');

    if(extension=='b64')
    extension= 'base64';
    else if(extension=='txt')
    extension = 'utf8';
    else
    extension = 'hex';


    fs.writeFileSync(filename, data.toString(extension));
}
module.exports.encodeMp3 = encodeMp3;
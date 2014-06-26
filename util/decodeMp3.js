/**
 * Created by rakesh on 25/6/14.
 */

var fs = require('fs');


var decodeMp3 = function (source) {

    var data = fs.readFileSync(source);

    src = source.split('/')[1].split('.')[0]+source.split('/')[1].split('.')[1] + '.mp3';

    console.log(src);
    var extension = source.split('.')[1];

    if(extension=='hex')
        extension='hex';
    else if( extension == "txt")
        extension = 'utf8';
    else
        extension ='base64';


//    console.log(fs.existsSync('converted/r'));

    //Make Directory if it is not exists
    var saveDecodedFileDir = 'Decoded Files';
    
    if(!fs.existsSync(saveDecodedFileDir)) {
        fs.mkdirSync(saveDecodedFileDir);
    }

    var buffer = new Buffer(data.toString(),extension);
    src= saveDecodedFileDir + '/' + src;
//    console.log(src);
    fs.writeFileSync( src, buffer);

}


module.exports.decodeMp3 = decodeMp3;
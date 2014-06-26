/**
 * Created by rakesh on 25/6/14.
 */

var fs = require('fs');

var encodeMp3 = require('./util/encodeMp3.js');
var decodeMp3 = require('./util/decodeMp3.js');

//console.log(data);

encodeMp3.encodeMp3('/home/rakesh/Downloads/Enemmy-Bheege Naina.mp3','b64');
encodeMp3.encodeMp3('/home/rakesh/Downloads/Enemmy-Bheege Naina.mp3','txt');
encodeMp3.encodeMp3('/home/rakesh/Downloads/Enemmy-Bheege Naina.mp3','hex');

console.log('start Decode');
decodeMp3.decodeMp3('Encoded Files/Enemmy-Bheege Naina.hex');
decodeMp3.decodeMp3('Encoded Files/Enemmy-Bheege Naina.b64');
decodeMp3.decodeMp3('Encoded Files/Enemmy-Bheege Naina.txt');


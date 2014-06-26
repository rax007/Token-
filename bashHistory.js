var fs = require('fs');

    fs.readFile('/home/rakesh/.bash_history', function(error , data){

        console.log("content of file: "+ data);
        console.log(error);
    });
Token-
======

mp3Encoder, Encryt/Decrpt

Create a module which has two util methods exported. generateToken(<tokenDataOb>, <cryptoSecretKey>, <hmacSecretKey>) and parseToken(<tokenString>, <cryptoSecretKey>, <hmacSecretKey>)

The final module usage should look like:

//Require the module (The one you will build)
var tokens = require("./modules/tokens");

//You would have defined custom errors and we can refer them to check. Import classes
var InvalidTokenDataError = tokens.InvalidTokenDataError,
    InvalidTokenError = tokens.InvalidTokenError;

//Define keys
var cryptoSecret = "822180f014c3ebf76160765162959adf74162bc72c4cc50eb55be397da36b37542a561346e2c35e6b1bad4fc18c1a07c38399398fbe97f7c8f12b95a9484aed1";
var hmacSecret = "a846328b28a2148d1bee236c16e97596e6f9fc572bb84de684ff82c9a6561c011fdcc8e640309534210542fb6f2962b01da4bb85d991d046c39e21cbc90a8028";                

//Define the user token data
var data = {
    userId: "238763342",
    scope: ["read", "write", "admin"], //Full rights
    expiry: +new Date() + 30000 //30 seconds from generation        
};

//Build Token
var token = tokens.generateToken(data, cryptoSecret, hmacSecret);

//Check if there were errors
if(token instanceof InvalidTokenDataError) throw new Error(token); //Throw with updated stack trace.

console.log(token); //Successfully generated.

/* DECODE TOKEN */
var decodedData = tokens.parseToken(token, cryptoSecret, hmacSecret);

//Verify if parse was successful
if(token decodedData InvalidTokenError) throw new Error(decodedData); //Throw with updated stack trace.

//All good
console.log(decodedData);
You can use the above code as the testing template.

You need to create a secured token using the following story:

The data which you need to encapsulate in the token is:

UserId: Id of the user the token belongs. Type String
Scope: The permission level user have. Type Array.
Expiry: The expiry time for token.
The format of the token will be:

Base64( AES192( Base64(<JSON of data> + "|||" + HMAC(<JSON data>)) ) + "." + <userID> + "." HMAC(AES cryptext) )
The steps are as before:

Verify all passed data in the data object is valid type and is also a mandatory property. If no then return InvalidTokenDataError with appropriate information.
Create JSON of the data. Say dJSON.
Create HMAC of dJSON using the HMAC key. Say payloadHMAC
make a payload by concatenating ` + “|||” + payloadHMAC)’.
Base64 the payload. Say payload64.
Encrypt payload64using AES192 algorithm and by using your cryptoSecret. Say cryptext.
Create HMAC of the cryptext using the hmacSecret. Say cHmac.
Concatenate all three with .: <cryptext>.<data.userId>.<cHmac>. Say rawToken.
Base64 the rawToken. = token
In case of any error in the above steps, it should return proper error object. No termination of thread within the execution of method.


<------------------------------------Mp3EncodingDecoding----------------------->
  
  Use Buffer to transform data from one encoding to another. Read MP3 files create binary buffers of it, 
  then convert it to 3 files. <songName>.b64, <songName>.hex and <songName>.txt,
  the files will contain the data as string text encoded in base64, hex and utf-8 respectively. 
  then also read them and convert them to binary mp3 files, they should be playable.

You need to decode a secured token using the following story:

Follow steps reverse of creation.

Make sure to verify all HMAC hashes, if not matching then return InvalidTokenError with proper message.

If token is already expired, return InvalidTokenError with proper message.

In case of decryption error return InvalidTokenError with proper message saying tampered token or invalid key.

In case of other errors return Error with proper message.


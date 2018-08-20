var express=require("express");
var app=express();
var bodyParser =require("body-parser");
var amount;
app.set("view engine","ejs");

var ethers = require('ethers');

 const Web3 =require("web3");

   
// const walletAddress = "0x8690F1feff62008A396B31c2C3f380bD0Ca6d8b8";
//var balance = web3.eth.getBalance(walletAddress); //Will give value in.
// console.log("balance");
// console.log(balance);
// const a = async()=>{
//     const bal = await web3.eth.getBalance(walletAddress);
//     console.log(bal);
// };
// console.log(web3.currentProvider);
var bip39 = require('bip39')
var mnemonic = bip39.generateMnemonic();

var SHA256 = require("crypto-js/sha256");
console.log(SHA256(bip39.mnemonicToSeedHex('basket actual')));

function broadCastTransHash(prvKey){
    const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/3a10d3e387f348f4bfa43e0eb0ac2737"));
 console.log(web3.version); 
 broadCast();
};


var privateKey = '0x600c10b4758b26fa25419c4f4ccec0c1e071a9ab3a7122488bbf3f545354afe5';
var wallet = new ethers.Wallet(privateKey);
wallet.provider = ethers.providers.getDefaultProvider('rinkeby');

// var transaction = {
//     gasLimit: 1000000,
//     to: "0x31b98d14007bdee637298086988a0bbd31184523",
//     data: "0x",
//     value: ethers.utils.parseEther("0.1"),
// };

// Estimate the gas cost for the transaction
//var estimateGasPromise = wallet.estimateGas(transaction);

//estimateGasPromise.then(function(gasEstimate) {
//    console.log(gasEstimate);
//});

// Send the transaction*******
//var sendTransactionPromise = wallet.sendTransaction(transaction);

// sendTransactionPromise.then(function(transactionHash) {
//     console.log(transactionHash);
// });





app.get("/",function(req,res){
    res.send("Hi there!,welcome to the landing page!");
});

    app.get("/:amount",function(req,res){
     amount =req.params.amount;
    res.send("Your amount entered is :" +amount);
    
    var transaction = {
    gasLimit: 1000000,
    to: "0x31b98d14007bdee637298086988a0bbd31184523",
    data: "0x",
    value: ethers.utils.parseEther(amount.toString()),
};
    var sendTransactionPromise = wallet.sendTransaction(transaction);
    
    sendTransactionPromise.then(function(transactionHash) {
    console.log(transactionHash);
});
    console.log("Success!");
});



app.use(bodyParser.urlencoded({extended:true}));
        
function broadCast(){};

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The app.js Server Has Started!");
});

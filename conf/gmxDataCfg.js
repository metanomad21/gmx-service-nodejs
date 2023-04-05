exports.providerURLCfg = {
    "97":"https://data-seed-prebsc-1-s1.binance.org:8545",
    "56": "https://bsc-dataseed.binance.org/",
    "66": "https://exchainrpc.okex.org",
    "65": "https://exchaintestrpc.okex.org",
    "420": "https://optimism-goerli.blastapi.io/58212e43-01d6-4a8b-a9ca-7620cefd5974"
}


exports.httpCfg = {
    "port":8162
}

exports.providerCfg = {
    "HECO": this.providerURLCfg["256"],
    "BSC" : this.providerURLCfg["97"],
    "ETH" : this.providerURLCfg["3"],
    "OKEX": this.providerURLCfg["66"],
    "OPGOERLI": this.providerURLCfg["420"]
}
//https://http-testnet.hecochain.com    test     
//https://http-mainnet-node.huobichain.com   main
//https://ropsten.infura.io/v3/c80cb2cf55c941fc92a80f1d530eb576

//https://data-seed-prebsc-1-s1.binance.org:8545  test
//https://kovan.infura.io/v3/c80cb2cf55c941fc92a80f1d530eb576

exports.lockTimeWhitelist = [
    "0x05761381C0e863edE3a09cf29A622788c27D39C8"
];

exports.relayerPK = "";
exports.adminKey = "";

exports.dbCfg = {
    host:"localhost",
    user:"root",
    password:"root",
    database:"org-server"
}

exports.COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3/simple/price?';


//just for org token
exports.graphAPIEndpoints = {
    bsc:
        "http://45.200.51.99:8000/subgraphs/name/magicRings/ringsBridgeBsc", // Binance Smart chain
    heco:
        "http://18.138.237.117:8000/subgraphs/name/magicRings/ringsBridgeHeco",
    okex:
        "http://18.138.237.117:8000/subgraphs/name/magicRings/ringsBridgeHeco"
};
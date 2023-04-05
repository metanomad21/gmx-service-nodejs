exports.providerURLCfg = {
    "97":"https://data-seed-prebsc-1-s1.binance.org:8545",
    "256":"https://http-testnet.hecochain.com"
}

exports.bridgeAddrCfg = {
    "97":"0xeB6043D82f18287aFFF5d50b3Ff10D0c77E13F06",
    "256":"0x0e34369a90A7bDE493247BA6B21e9234A1dF4D3F"
}

exports.melBridgeAddrCfg = {
    "97":"0xdE150B12BCE805F0ca70a1c148fEe72225733aD9",
    "256":"0xA925FABf80bA9AbFB270585f60faC9565d8A1DEe"
}

exports.httpCfg = {
    "port":8137
}

exports.providerCfg = {
    "HECO": "https://http-testnet.hecochain.com",
    "BSC" : "https://data-seed-prebsc-1-s1.binance.org:8545"
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

exports.lock_seconds = 180;
exports.heco_chain_id = 256;
exports.bsc_chain_id = 97;

exports.dbCfg = {
    host:"localhost",
    user:"root",
    password:"root",
    database:"mg-server"
}
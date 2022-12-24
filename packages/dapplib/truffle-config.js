require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain purpose hunt opera bubble slam'; 
let testAccounts = [
"0x664c9aa3323d63f4696bfc2ed3da621fb45f9ac94f1d3cb9b103f8b664db9a48",
"0x7d03be55054590bed752aa006c8f8f309d331c20e89fd813cf4cc93bb9b6326b",
"0xc6a28431b7937517299ce7cc21ca70d2abc098038e625d46d7dcb499839f6f52",
"0x1c815e57d2d29242eff80111974316697ff38820ff1e4e22f9466ce2b281c191",
"0x42bb5e07623d20ef0a381ff210270c6e17c63e8d7e6292e688c2d1e4893d36c7",
"0x1aca807c80c185aeb889e9fc77e1dbb34431355b1ae51f2b5e33d8d9f7e24f40",
"0x24e9fdf392bdfeefe4eb070817175606e99f2b3ae4014be82a658d7e242a0163",
"0xf3b59306b3eedfab8f94927a9c98e71709a5f1906af7a6ab38cd9365f32111fc",
"0xf1d2350c1a47ac75c6a72ca34b78362ffd2cbb9c91177e5698dc70d6ba070037",
"0x243a77414976fea5de916c808666bdd220b9a0aa9e521f3af02edba268da1539"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remember assume hidden arena bone switch'; 
let testAccounts = [
"0x29861a1d86d4b33009f69a42cb0e098749874b41b7b3d2424716990fdec8ca9d",
"0x4b02d0d090dbafd84f98c9b4f8667d2b05051bc9330dd09db3cc50bac0bd91b1",
"0x42976b10984ee4fc15b0f3cec9ec083d5c9c0feba97a0a7bd3aaabc61bba4b49",
"0xc1e90b6be70e4ceffd1d62d7d68c8926c6a88b1c429fdc4bfdb98a0b0e86fd2c",
"0xfd5a8dc84c4233b19dce9e8ad6bb84b77b317bf384a6592052b44833f1197ff0",
"0x15ef6bc502ad2fc6f826750dcb30f313d4120c24b1f6aae79590684a4882e14a",
"0xe3a0822e3f851a5a71fd191c9d47470db7480b5d990bc28c21e7ce7e86e4a0f9",
"0x55393a7f8c2885f3410955ef1e59bac5a9b6cb80fb07e94a062cba027fbbb3b1",
"0x964a1907f72cb46a239580436f2bef9460be2ab8fd0bcd807d3927813b1a11cf",
"0xb844e349837c5e7ccb26ea8a2f176516f9b9c48280e7f50f0c5ce822730fc67c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

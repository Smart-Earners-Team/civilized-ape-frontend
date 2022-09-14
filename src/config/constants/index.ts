export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: "https://bscscan.com",
  [ChainId.TESTNET]: "https://testnet.bscscan.com",
};

export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET];

export const addresses = {
  kryptolite: {
    97: "",
    56: "0x69A3C92cE7d543f6aaC7630E0e4Df265BdBB8c0D",
  },
  kryptolitePool2: {
    97: "",
    56: "0x1C03768153bd9883f4997482F8841029e905250D",
  },
  kryptoliteSwapRefereeTracker: {
    97: "",
    56: "0xf284A1FaCD86360DA814FE441e49F118cE5db097",
  },
  btcPizzaDay: {
    97: "0x28305505a077a69A577092018D38ab59b233BeA6",
    56: "0x4Eac34a0d67214B5E7f950aFeE942DE5F938349c",
  },
  multiCall: {
    56: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
    97: "",
  },
};

export const networkList = {
  1: {
    url: "https://etherscan.io/",
    name: "Ethereum Mainnet",
  },
  2: {
    url: "https://mordenexplorer.ethernode.io/",
    name: "Morden",
  },
  3: {
    url: "https://ropsten.etherscan.io/",
    name: "Ropsten",
  },
  4: {
    url: "https://rinkeby.etherscan.io/",
    name: "Rinkeby",
  },
  42: {
    url: "https://kovan.etherscan.io/",
    name: "Kovan",
  },
  56: {
    url: "https://bsc-dataseed.binance.org/",
    name: "Binance Smart Chain",
  },
  97: {
    url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    name: "Binance Smart Chain - Testnet",
  },
};

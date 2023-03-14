import { Network, Alchemy } from "alchemy-sdk";
import { useState, useEffect } from "react";

const settings = {
  apiKey: "01DqszJnhp3PgHE3_9LlO_p8DykcMfIF",
  network: Network.ETH_MAINNET,
};

const contractAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

const alchemy = new Alchemy(settings);

// Get the latest block
alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core.getTokenBalances(contractAddress).then(console.log);

export const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    alchemy.nft
      .getNftsForOwner(contractAddress)
      .then((res) => setData(res.ownedNfts))
      .catch((err) => console.log(err));
  }, []);

  return { data };
};
// Get all the NFTs owned by an address

// Listen to all new pending transactions
alchemy.ws.on(
  { method: "alchemy_pendingTransactions", fromAddress: contractAddress },
  (res) => console.log(res)
);

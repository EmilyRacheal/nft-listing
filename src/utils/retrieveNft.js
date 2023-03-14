import Web3 from "web3";
import contractAbi from "./contractAbi.json";

const web3 = new Web3(
  `https://eth-mainnet.g.alchemy.com/v2/01DqszJnhp3PgHE3_9LlO_p8DykcMfIF`
);

const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

const contract = new web3.eth.Contract(contractAbi, contractAddress);

const fetchNfts = async () => {
  const events = await contract.getPastEvents("Transfer", {
    filter: { to: contractAddress },
    fromBlock: 0,
    toBlock: "latest",
  });

  console.log(events);
};

// const { events } = fetchNfts();

// const nfts = events.map((event) => event.returnValues.tokenId);

export { fetchNfts };

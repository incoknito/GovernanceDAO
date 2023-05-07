import React, { useState, useEffect } from "react";
import ethers from "ethers";

// const CHAIN_ID = 1612993563037;

const AuthContext = React.createContext({
  isConnected: false,
  account: "",
  // onLogout: () => {},
  connectWallet: () => {},
  disconnectWallet: () => {},
});

export const AuthContextProvider = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  async function connectWallet() {
    // Check if window.ethereum is available
    if (!window.ethereum) {
      console.log("No Ethereum provider found");
      return false;
    }

    try {
      // Request access to the user's accounts
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length > 0) {
        // Check if the current network is the Mantle network
        // const chainId = await window.ethereum.request({
        //   method: "eth_chainId",
        // });
        // if (chainId !== "0x" + CHAIN_ID.toString(16)) {
        //   // Prompt the user to switch to the Mantle network
        //   await window.ethereum.request({
        //     method: "wallet_addEthereumChain",
        //     params: [{ chainId: "0x" + CHAIN_ID.toString(16) }],
        //   });
        //   await window.ethereum.request({
        //     method: "wallet_switchEthereumChain",
        //     params: [{ chainId: "0x" + CHAIN_ID.toString(16) }],
        //   });
        // }

        // Return the first account
        console.log("Connected to wallet:", accounts[0]);
        setAccount(accounts[0]);
        setIsConnected(true);
        return true;
      } else {
        console.log("No accounts found");
        return false;
      }
    } catch (error) {
      console.log("Failed to connect to wallet:", error);
      return false;
    }
  }

  //   async function connectWallet() {
  //     try {
  //       // Check if the user has a WalletConnect session
  //       const provider = new WalletConnectProvider({
  //         infuraId: "3bde7ae4023e46079aec5c10c75f5388", // Replace with your Infura project ID
  //       });
  //       if (!provider.wc.connected) {
  //         // Prompt the user to connect their wallet
  //         await provider.enable();
  //       }

  //       // Connect to the Mantle network using the provider
  //       const network = {
  //         name: "mantle",
  //         chainId: 966,
  //       };
  //       const ethersProvider = new ethers.providers.Web3Provider(
  //         provider,
  //         network
  //       );
  //       const signer = ethersProvider.getSigner();
  //       const address = await signer.getAddress();

  //       console.log("Connected to wallet:", address);
  //       setAccount(address);
  //       setIsConnected(true);
  //       return true;
  //     } catch (error) {
  //       console.log("Failed to connect to wallet:", error);
  //       return false;
  //     }
  //   }

  // const loginHandler = () => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };
  const connectWalletHandler = async () => {
    try {
      await connectWallet();
    } catch (err) {
      console.log(err);
    }
  };
  async function disconnectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.disconnect();
        setIsConnected(false);
        setAccount("");
      } catch (error) {
        console.error("Error disconnecting wallet", error);
      }
    }
  }

  const disconnectWalletHandler = async () => {
    try {
      await disconnectWallet();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!isConnected) {
      connectWallet();
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isConnected: isConnected,
        account: account,
        connectWallet: connectWalletHandler,
        disconnectWallet: disconnectWalletHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

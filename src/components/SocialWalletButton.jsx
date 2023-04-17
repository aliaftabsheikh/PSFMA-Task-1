"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { polygonMumbai } from "wagmi/chains";
import { createClient, WagmiConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from "@zerodevapp/wagmi/rainbowkit";

function SocialWalletButton() {
  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({
          options: {
            projectId: process.env.PROJECT_ID,
          },
        }),
        facebookWallet({
          options: {
            projectId: process.env.PROJECT_ID,
          },
        }),
        githubWallet({
          options: {
            projectId: process.env.PROJECT_ID,
          },
        }),
        discordWallet({
          options: {
            projectId: process.env.PROJECT_ID,
          },
        }),
        twitchWallet({
          options: {
            projectId: process.env.PROJECT_ID,
          },
        }),
        twitterWallet({
          options: {
            projectId: process.env.PROJECT_ID,
          },
        }),
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider
        theme={darkTheme()}
        chains={chains}
        modalSize={"compact"}
      >
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default SocialWalletButton;

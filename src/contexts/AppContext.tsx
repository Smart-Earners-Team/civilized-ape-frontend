import React, { useEffect, useState, createContext } from "react";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import connectorList, { resetWalletConnectConnector } from "../lib/connectors";
import { useEagerConnect } from "../hooks/useEagerConnect";
import { useInactiveListener } from "../hooks/useInactiveListener";
import useQuery from "../hooks";

export interface GlobalAppContext {
  wallet: {
    active: boolean;
    isConnecting: boolean;
    error: Error | undefined;
    retry: () => void;
  };
  refAddress: string;
}

const defaultValues: GlobalAppContext = {
  wallet: {
    active: false,
    isConnecting: true,
    error: undefined,
    retry: () => {},
  },
  refAddress: "-",
};

export const GlobalAppContextProvider =
  createContext<GlobalAppContext>(defaultValues);

export default function AppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isConnecting, setIsConnecting] = useState(false);
  const { deactivate, active, error } = useActiveWeb3React();
  // Refferal
  const [refAddress, setRefAddress] = useState("-");
  const refFromParams = useQuery().get("uid");

  useEffect(() => {
    if (active) {
      setIsConnecting(true);
    } else {
      setIsConnecting(false);
    }
  }, [active, error]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  useEffect(() => {
    if (refFromParams !== null) {
      setRefAddress(refFromParams);
    } else {
      setRefAddress("-");
    }
  }, []);

  const handleRetry = () => {
    setIsConnecting(false);
    resetWalletConnectConnector(connectorList["WalletConnect"]);
    deactivate();
  };

  return (
    <GlobalAppContextProvider.Provider
      value={{
        wallet: {
          active,
          isConnecting,
          error,
          retry: handleRetry,
        },
        refAddress,
      }}
    >
      {children}
    </GlobalAppContextProvider.Provider>
  );
}

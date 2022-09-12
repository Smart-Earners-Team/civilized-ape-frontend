import { Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Step, Stepper } from "react-form-stepper";
import {
  RiTelegramFill,
  RiTwitterFill,
  RiDiscordFill,
  RiMediumFill,
} from "react-icons/ri";
import { Navbar } from "../components/Navbar";
import Section from "../components/Section";

const truncateHash = (address: string, startLength = 7, endLength = 5) => {
  return (
    address.substring(2, startLength) +
    address.substring(address.length - endLength)
  );
};

interface FormData {
  email: string;
  walletId: string;
  tweetLink: string;
  refID: string;
}

function EarlyAccessPage({ location }: PageProps) {
  const [, setCurrentAccount] = useState(null);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({
    email: "",
    walletId: "",
    tweetLink: "",
    refID: "",
  });
  const [fetching, setFetching] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (key: keyof FormData, value: string) => {
    setData((p) => ({ ...p, [key]: value }));
  };

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum || !ethereum.request) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
      setStep(1);
      // Set wallet Id
      handleChange("walletId", truncateHash(account));
    } else {
      console.log("No authorized account found");
    }
  };
  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum || !ethereum.request) {
      return alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
      setStep(1);
      // Set wallet Id
      handleChange("walletId", truncateHash(accounts[0]));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  useEffect(() => {
    const ref = new URLSearchParams(location.search).get("uid") || "-";
    handleChange("refID", ref);
  }, [location.search]);

  const twitterLink = useMemo(() => {
    const prefix = "https://twitter.com/intent/tweet?text=";

    const url = `This is proof of my account ownership and request for early \
access to Civilized Ape Town @CivilizedApeDAO\n
ID: ${data.walletId}\n
🌐 civilizedApe.town/?uid=${data.walletId} 🧧\n
$CTD #cApeTown #DAO #Community #NFTCommunity #ALPHA #nftart #NFT #EarlyAccess #CivilizedApeTown`;

    return prefix + encodeURIComponent(url);
  }, [data]);

  const handleSubmit = useCallback(() => {
    setFetching(true);
    fetch(
      `https://kryptolite.rocks/F1288cF18B1FAaA35F40111c3E5d2f827e1E920E/cape-early-access.php?action=earlyAccess&walletId=${data.walletId}&email=${data.email}&tweetLink=${data.tweetLink}&referrer=${data.refID}`,
      {
        method: "get",
        headers: { Origin: "http://localhost:8000" },
      }
    )
      .then(async (res) => {
        const result = await res.json();
        if (result.message === "Success") {
          setDone(true);
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setFetching(false));
  }, [data]);

  return (
    <Fragment>
      <main className="h-screen">
        <Navbar />
        <Section padding>
          <h1 className="text-center">Request Early Access</h1>
          <p className="text-center">
            Secure early access to Civilized Ape Town and be the first to get WL
            (cApeList)
          </p>
        </Section>
        {!done ? (
          <Fragment>
            <Section>
              <div>
                <Stepper activeStep={step}>
                  <Step label="Connect wallet" onClick={() => setStep(0)} />
                  <Step
                    label="Enter email address"
                    onClick={() => setStep(1)}
                  />
                  <Step label="Verify twitter" onClick={() => setStep(2)} />
                  <Step label="Submit" />
                </Stepper>
              </div>
            </Section>
            {step === 0 && (
              <Section
                padding
                className="flex justify-center items-center flex-col text-center"
              >
                <p>Please connect your wallet to continue</p>
                <Button onClick={connectWalletHandler}>Connect wallet</Button>
              </Section>
            )}
            {step === 1 && (
              <Section
                padding
                className="flex justify-center items-center flex-col text-center"
              >
                <input
                  type="email"
                  required
                  name="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="example@mail.xyz"
                  className="border h-10 border-black w-full max-w-lg px-2"
                />
                <Button onClick={() => setStep(2)}>Proceed</Button>
              </Section>
            )}
            {step === 2 && (
              <Section
                padding
                className="flex justify-center items-center flex-col text-center"
              >
                <p>Verify twitter </p>
                <a
                  href={twitterLink}
                  onClick={() => setStep(3)}
                  target="_blank"
                  className="bg-[#4D3937] flex justify-center items-center py-2 px-4 text-white rounded-md text-lg
            md:mt-6 max-w-md"
                >
                  Proceed
                </a>
              </Section>
            )}
            {step === 3 && (
              <Section
                padding
                className="flex justify-center gap-4 items-center flex-col text-center"
              >
                <p>Enter your link to the tweet</p>
                <input
                  type="url"
                  required
                  name="tweetLink"
                  value={data.tweetLink}
                  onChange={(e) => handleChange("tweetLink", e.target.value)}
                  placeholder="..."
                  className="border h-10 border-black w-full max-w-lg px-2"
                />
                <Button onClick={handleSubmit} disabled={fetching}>
                  {fetching ? "Please wait..." : "Submit"}
                </Button>
              </Section>
            )}
          </Fragment>
        ) : (
          <Section padding>
            <p className="text-center text-yellow-700">
              Thanks, We have collected your info.
            </p>
          </Section>
        )}
      </main>
      <Section
        className="flex flex-col md:flex-row items-center justify-center gap-4"
        containerClass="bg-[#F3F3F3]/90 py-5"
      >
        <div className="flex justify-center">
          <StaticImage src="../images/icon.png" alt="cApe Logo" width={50} />
        </div>

        <p className="text-gray-700 text-center text-sm">
          A community of 10,000 Civilized Apes teeming with life. We symbolize
          freedom and the possibility of a life truly lived.
        </p>
        <div className="flex items-center justify-center gap-2">
          <a href="https://t.me/CivilizedApeDAO">
            <RiTelegramFill className="w-6 h-6 text-blue-800" />
          </a>
          <a href="https://twitter.com/CivilizedApeDAO">
            <RiTwitterFill className="w-6 h-6 text-blue-800" />
          </a>
          <a href="https://discord.gg/QZzZHhYGaR">
            <RiDiscordFill className="w-6 h-6 text-blue-800" />
          </a>
          <a href="https://medium.com/@civilizedapetown">
            <RiMediumFill className="w-6 h-6 text-blue-800" />
          </a>
        </div>
      </Section>
    </Fragment>
  );
}

const Button: React.FC<
  { children: React.ReactNode } & React.ComponentPropsWithoutRef<"button">
> = ({ children, ...props }) => (
  <button
    className="bg-[#4D3937] flex justify-center items-center py-2 px-4 text-white rounded-md text-lg
            md:mt-6 max-w-md disabled:opacity-30 transition-all duration-200"
    {...props}
  >
    {children}
  </button>
);
export default EarlyAccessPage;

import { Footer } from "../common/footer";
import JEETS from "../assets/jeets.webp";
import { Img } from "react-image";

export const WhitePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#000113] whitepage relative">
        <Img
          src={JEETS}
          alt="jeets"
          className="w-full md:w-1/4 flex md:absolute right-0 top-0"
        />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">
            Token Launch Timeline and Tokenomics
          </h1>

          <div className="content whitepage">
            <h2 className="text-xl font-semibold mt-4">Pre-launch Timeline:</h2>
            <ol className="list-decimal list-inside ml-4">
              <li>Fill slots for the airdrop</li>
              <li>Fill slots for the presale</li>
              <li>Launch on pump.fun</li>
            </ol>

            <h2 className="text-xl font-semibold mt-4">
              Post-launch Timeline:
            </h2>
            <ol className="list-decimal list-inside ml-4">
              <li>List on Raydium</li>
              <li>Dev buy burn</li>
              <li>Presale buy burn</li>
              <li>Start presale distribution from remaining dev buy</li>
              <li>Start airdrop distribution from remaining dev buy</li>
            </ol>

            <h2 className="text-xl font-semibold mt-4">Tokenomics:</h2>
            <p>
              Pump.fun allows the launch of a coin with a maximum supply of 1
              billion tokens. Out of this, 200 million will be allocated to
              Raydium, and 800 million will be on pump.fun.
            </p>

            <p className="font-bold">
              Distribution of 800 million tokens on pump.fun:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>7% for airdrop</li>
              <li>7% for presale</li>
              <li>3% for the team</li>
              <li>??% for dev buy to burn</li>
              <li>??% for tokens in free circulation</li>
            </ul>

            <h2 className="text-lg font-semibold mt-4">
              1. ??% Dev buy to burn & ??% tokens in free circulation
            </h2>
            <p>
              Currently, I cannot specify the exact percentage for dev buy to
              burn, as snipers will target purchasing the coin with a specific
              dev buy. However, it will be significant to reduce the number of
              tokens in free circulation before listing on Raydium.
            </p>

            <h2 className="text-lg font-semibold mt-4">2. 7% Airdrop</h2>
            <p>
              Currently, 560 people have registered for the airdrop. Some may
              unsubscribe or delete posts, and all bots will be removed from the
              airdrop list. This will be verified both manually and by scripts
              to ensure no real people are removed. The 7% will be evenly
              distributed among the remaining 500-560 people. The number of
              tokens will be calculated using the formula:
            </p>
            <br />
            <p className="italic">
              (1,000,000,000 - burned coins) * 0.07 / number of people
            </p>

            <h2 className="text-lg font-semibold mt-4">3. 7% Presale</h2>
            <p>
              The presale will include 100 slots, with the 7% evenly distributed
              among 100 participants. All funds raised from the presale will go
              towards buying and burning coins on Raydium. The 7% will be taken
              from the initial dev buy. The transaction will be made in one
              purchase, and the coins will be burned all at once. To participate
              in the presale, you must pay exactly 2 SOL. All presale
              participants will receive their allocation before the airdrop
              (i.e., presale distribution takes priority) but after the dev
              burn. The allocation will be sent to the same wallet from which
              the 2 SOL was received. If the number of participants is
              critically low, we will cancel the presale and refund the 2 SOL to
              participants. Those who send funds after the first 100 slots will
              receive a refund before the coin launch. The number of tokens will
              be calculated using the formula:
            </p>
            <br />
            <p className="italic">
              (1,000,000,000 - burned coins) * 0.07 / 100
            </p>
            <br />
            <p>
              When purchasing and burning the coin for 200 SOL, we transfer
              funds from the presale to the coin’s liquidity. When burning a
              large percentage of the dev buy, we also transfer funds to
              liquidity, which will be also distributed among presale
              participants.
            </p>

            <h2 className="text-lg font-semibold mt-4">
              4. 3% Team Allocation
            </h2>
            <p>
              This will be distributed among all people involved in the project
              development after the presale and airdrop have been sent out.
            </p>
          </div>
        </div>
      </div>
      <Footer customClass="bg-white text-black" />
    </>
  );
};

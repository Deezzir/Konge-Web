import { BlockWrapper } from "../common/block-wrapper";
import { Links } from "../common/links";
import WAF from "../assets/waf.webp";
import { useEffect, useState } from "react";

interface TextElement {
  id: number;
  x: string;
  y: string;
  side: string;
}

export const Block1 = () => {
  const [flipped, setFlipped] = useState(false);
  const [texts, setTexts] = useState<TextElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const addTextElement = (side: string) => {
      if (texts.length >= 100) texts.shift();
      const randomX = (Math.random() * 90 + 5).toFixed(2);
      const randomY = (Math.random() * 90 + 5).toFixed(2);
      const newText = {
        id: texts.length,
        x: `${randomX}%`,
        y: `${randomY}%`,
        side: side,
      };
      setTexts((prev) => [...prev, newText]);
    };

    const timerId = setTimeout(() => {
      setFlipped(!flipped);
      addTextElement(!flipped ? "left" : "right");
    }, 3000);
    return () => clearTimeout(timerId);
  }, [flipped, texts, isMobile]);

  return (
    <>
      <BlockWrapper>
        <Links customClass="" />
        <div className="w-full flex flex-col xl:flex-row gap-2 xl:gap-16 items-center justify-between text-4xl md:text-6xl font-bold text-center">
          <div className="relative w-[25%] h-[60vh] text-3xl font-bold">
            {texts
              .filter((text) => text.side === "left")
              .map((text) => (
                <div
                  key={text.id}
                  className="absolute bg-transparent"
                  style={{
                    top: text.y,
                    left: text.x,
                  }}
                >
                  WAF
                </div>
              ))}
          </div>
          <div className="relative w-[50%] flex justify-center items-center">
            <img
              src={WAF}
              alt="logo"
              className={
                "w-full h-auto xl:w-auto xl:h-[60vh] rounded-2xl transition duration-300 " +
                (flipped ? "img-hor" : "")
              }
            />
          </div>
          <div className="relative w-[25%] h-[60vh] text-3xl font-bold">
            {texts
              .filter((text) => text.side === "right")
              .map((text) => (
                <div
                  key={text.id}
                  className="absolute bg-transparent"
                  style={{
                    top: text.y,
                    right: text.x,
                  }}
                >
                  WAF
                </div>
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl xl:text-3xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            accusamus illo ab quia aspernatur, reiciendis nulla possimus odit
            porro incidunt quisquam soluta voluptas. Obcaecati veniam nisi
            accusantium earum ad sapiente.
          </h2>
        </div>
      </BlockWrapper>
    </>
  );
};

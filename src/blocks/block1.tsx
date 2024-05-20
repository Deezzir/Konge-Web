import { BlockWrapper } from "../common/block-wrapper";
import { Links } from "../common/links";
import WAF from "../assets/waf.webp";
import { useCallback, useEffect, useState } from "react";
import { Img } from "react-image";

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
    setIsMobile(window.innerWidth < 768);
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

  const getBlock = useCallback(() => {
    return (
      <>
        <Links customClass="" />
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-16 items-center justify-between text-4xl md:text-6xl font-bold text-center">
          <div className="relative w-[25%] h-[60vh] text-3xl font-bold hidden md:block">
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
          <div className="relative w-full md:w-[50%] flex justify-center items-center">
            <Img
              src={WAF}
              alt="logo"
              className={
                "h-full aspect-auto max-h-[60vh] rounded-2xl transition duration-300 " +
                (flipped ? "img-hor" : "")
              }
            />
          </div>
          <div className="relative w-[25%] h-[60vh] text-3xl font-bold hidden md:block">
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
          <h2 className="text-xl md:text-3xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            accusamus illo ab quia aspernatur, reiciendis nulla possimus odit
            porro incidunt quisquam soluta voluptas. Obcaecati veniam nisi
            accusantium earum ad sapiente.
          </h2>
        </div>
      </>
    );
  }, [texts]);

  return (
    <>
      <BlockWrapper>{getBlock()}</BlockWrapper>
    </>
  );
};

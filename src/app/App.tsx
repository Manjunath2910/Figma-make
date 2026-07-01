import { useEffect, useState } from "react";
import Desktop from "@/imports/Desktop1/index";
import logoImg from "@/imports/pandamoney_logo_dark__1_.png";

const DESIGN_WIDTH = 1512;
const DESIGN_HEIGHT = 3500;

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scaleX = width / DESIGN_WIDTH;
      const scaleY = height / DESIGN_HEIGHT;
      const nextScale = Math.min(1, scaleX, scaleY);
      setScale(Number.isFinite(nextScale) ? nextScale : 1);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const scaledHeight = Math.round(DESIGN_HEIGHT * scale);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#021511]">
      <div className="flex min-h-screen items-start justify-center overflow-hidden px-3 py-4">
        <div
          className="relative"
          style={{
            width: DESIGN_WIDTH,
            minHeight: DESIGN_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <div className="relative" style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT }}>
            <Desktop />

            {/* Hide old logo text (unique Typo Round Bold Demo font) and panda icon SVGs */}
            <style>{`
              [class*="Typo_Round_Bold_Demo"] { display: none !important; }
              [class*="94.01%"] { display: none !important; }
              [class*="92.2%"] [class*="6.83%"] { display: none !important; }
            `}</style>

            {/* New logo image */}
            <img
              src={logoImg}
              alt="PandaMoney"
              className="absolute pointer-events-none"
              style={{ top: 39, left: 76, width: 182, height: 38.56, zIndex: 9999 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

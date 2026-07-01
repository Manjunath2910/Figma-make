import { useEffect, useState } from "react";
import Desktop from "@/imports/Desktop1/index";
import logoImg from "@/imports/pandamoney_logo_dark__1_.png";

const DESIGN_WIDTH = 1512;
const DESIGN_HEIGHT = 3500;
const MOBILE_BREAKPOINT = 768;
const MIN_SCALE = 0.65;
const MAX_SCALE = 1.05;

function MobileFallback() {
  return (
    <div className="min-h-screen w-full bg-[#021511] px-4 py-6 text-white sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <img src={logoImg} alt="PandaMoney" className="h-8 w-auto" />
          <button className="rounded-full border border-[#d4ba7f]/60 px-4 py-2 text-sm text-[#d4ba7f]">
            Download App
          </button>
        </div>

        <section className="overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4ba7f]">Latest News</p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Cheapest Way to Send Money Internationally in 2025
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#dcdcdd] sm:text-base">
            Send money worldwide at Google FX rates, invest globally, and spend anywhere in the world with one simple app.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#d4ba7f] px-4 py-2 text-sm font-medium text-[#021511]">
              Get Started
            </button>
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white">
              Learn More
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[20px] border border-white/10 bg-[#0b2a20] p-4">
            <p className="text-sm font-medium text-[#d4ba7f]">How it works</p>
            <p className="mt-2 text-sm leading-7 text-[#dcdcdd]">
              Compare live FX rates, pay in seconds, and track every transfer in one place.
            </p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[#0b2a20] p-4">
            <p className="text-sm font-medium text-[#d4ba7f]">Panda AI</p>
            <p className="mt-2 text-sm leading-7 text-[#dcdcdd]">
              Smart guidance for your transfers, payments, and international spending.
            </p>
          </div>
        </section>

        <section className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
          <div className="flex flex-wrap gap-2">
            {['Latest News', 'Remittance', 'Case studies', 'Stablecoins', 'All'].map((item) => (
              <span
                key={item}
                className={`rounded-full px-3 py-2 text-sm ${item === 'All' ? 'bg-[#d4ba7f] text-[#021511]' : 'bg-white/10 text-white'}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-4 space-y-3">
            {["Best ways to send money from Finland to India in 2025", "Achieving zero-slot execution with Sender and LaserStream"].map((title) => (
              <div key={title} className="rounded-[16px] border border-white/10 bg-black/20 p-3">
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="mt-1 text-xs text-[#9ea3a0]">Read more</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      const rawScale = width / DESIGN_WIDTH;
      const nextScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, rawScale));
      setScale(Number.isFinite(nextScale) ? nextScale : 1);
      setIsMobile(width < MOBILE_BREAKPOINT);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const scaledWidth = Math.round(DESIGN_WIDTH * scale);
  const scaledHeight = Math.round(DESIGN_HEIGHT * scale);

  if (isMobile) {
    return <MobileFallback />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#021511]">
      <div className="mx-auto w-full overflow-hidden" style={{ width: "100%", minHeight: scaledHeight }}>
        <div
          className="relative mx-auto"
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

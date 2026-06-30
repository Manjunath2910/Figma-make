import Desktop from "@/imports/Desktop1/index";
import logoImg from "@/imports/pandamoney_logo_dark__1_.png";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-auto bg-[#021511]">
      <div className="relative min-w-[1512px]">
        <Desktop />

        {/* Hide old logo text (unique Typo Round Bold Demo font) and panda icon SVGs */}
        <style>{`
          [class*="Typo_Round_Bold_Demo"] { display: none !important; }
          [class*="94.01%"] { display: none !important; }
          [class*="92.2%"][class*="6.83%"] { display: none !important; }
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
  );
}

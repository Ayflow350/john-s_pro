import acmelogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={acmelogo}
              alt="acmelogo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="quantumlogo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestiallogo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulselogo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echologo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apexlogo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

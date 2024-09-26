import ArrowRight from "@/assets/arrow-right.svg";
import btc_image from "@/assets/btc.png";
import Image from "next/image";
import Star from "@/assets/Star 2.svg";
import Circle_1 from "@/assets/jug.svg";
import Circle_2 from "@/assets/Circle2.svg";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 lg:h-[80vh] lg:pt-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-hidden">
      <div className="container  mx-auto">
        <div className="md:flex md:mt-0 items-center justify-between ">
          <div className="  flex-1">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg -tracking-tight">
              SIGN UP TODAY
            </div>
            <h1 className="text-5xl lg:text-7xl w-[370px] lg:w-[650px] flex-wrap  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">
              The World’s Fastest Growing Crypto Web App
            </h1>
            <p className="text-xl max-w-[540px]  text-[#010D3E] tracking-tight mt-6">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
              bank transfers or your credit/debit card.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Sign Up</button>
              <button className="btn btn-text gap-1">
                <h1 className="">Explore</h1>
                <span>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-5 flex-1 relative">
            <Image src={btc_image} alt="hero-image" className="w-[686px] " />
            <Star className="hidden md:block  absolute inset-0 animate-spin" />
            <Circle_2 className="hidden md:block absolute  -right-5 bottom-[300px] animate-spin" />
            <Circle_1 className="hidden md:block absolute  right-40 bottom-[600px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

import { pageTitle, pageSubtitle } from "../../data/data";
import FadeIn from "../../utils/FadeIn";
import backImage from "../../assets/hero-image.svg";

function Home() {
  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${backImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-stone-300 max-w-[1050px]">
          {pageTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-stone-200 max-w-[500px]">
          {pageSubtitle}
        </h5>
      </FadeIn>

      <div
        className="absolute h-[50px] 
      xs:h-[150px] bottom-0 w-full 
      bg-[linear-gradient(180deg,_#ffffff00_0%,_#F0F0F0_100%)]"
      />
    </div>
  );
}

export default Home;

import { useCallback, useEffect, useState } from "react";
import { pageData } from "../data/data";
import {
  ArrowRightProps,
  Data,
  HeroImageProps,
  SliderControlsProps,
} from "../types/types";
import { Navbar } from "./navbar";
import AngleLeft from "../assets/icon-angle-left.svg";
import AngleRight from "../assets/icon-angle-right.svg";

const HeroSection = () => {
  const [currentInfo, setCurrentInfo] = useState(pageData[0]);
  const currentIndex = pageData.indexOf(currentInfo);

  const next = useCallback(() => {
    const nextIndex = (currentIndex + 1) % pageData.length;
    setCurrentInfo(pageData[nextIndex]);
  }, [currentIndex]);

  const previous = useCallback(() => {
    const previousIndex =
      (currentIndex - 1 + pageData.length) % pageData.length;
    setCurrentInfo(pageData[previousIndex]);
  }, [currentIndex]);

  useEffect(() => {
    function keyboardHandler(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        next();
      } else if (event.key === "ArrowLeft") {
        previous();
      }
    }

    window.addEventListener("keydown", keyboardHandler);

    return () => window.removeEventListener("keydown", keyboardHandler);
  }, [next, previous]);

  return (
    <main className="flex flex-col lg:flex-row grow">
      <HeroImage
        image={currentInfo.image}
        desktopImage={currentInfo.desktopImage}
        next={next}
        previous={previous}
      />
      <HeroContent
        title={currentInfo.title}
        description={currentInfo.description}
        next={next}
        previous={previous}
      />
    </main>
  );
};

function Controls({
  next,
  previous,
}: {
  next?: () => void;
  previous?: () => void;
}) {
  return (
    <div className="flex w-28 md:w-36">
      <button
        title="previous"
        type="button"
        className="bg-black w-full flex justify-center py-4 md:py-6 lg:py-8 hover:bg-very_dark_gray"
        onClick={previous}
      >
        <img src={AngleLeft} alt="previous" />
      </button>
      <button
        title="next"
        type="button"
        className="bg-black w-full flex justify-center py-4 md:py-6 lg:py-8 hover:bg-very_dark_gray"
        onClick={next}
      >
        <img src={AngleRight} alt="next" />
      </button>
    </div>
  );
}

function HeroImage({
  image,
  desktopImage,
  next,
  previous,
}: HeroImageProps & SliderControlsProps) {
  return (
    <div className="flex flex-col relative basis-3/5">
      <Navbar />
      <div className="w-full h-full bg-black">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopImage} />
          <img src={image} className="w-full h-full" alt="hero" />
        </picture>
      </div>
      <div className="lg:hidden absolute bottom-0 right-0">
        <Controls next={next} previous={previous} />
      </div>
    </div>
  );
}

function HeroContent({
  title,
  description,
  next,
  previous,
}: Partial<Data> & SliderControlsProps) {
  return (
    <div className="basis-2/5 flex flex-col">
      <div className="flex flex-col justify-center h-full text-black px-12 py-8 lg:py-0 gap-2 lg:gap-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-balance">
          {title}
        </h1>
        <p className="text-lg font-medium text-dark_gray">{description}</p>
        <button className="w-fit font-medium flex items-center gap-2 group">
          <span className="group-hover:text-dark_gray text-black tracking-[.8rem]">
            SHOP NOW
          </span>
          <ArrowRight className="group-hover:hidden block" color="black" />
          <ArrowRight className="hidden group-hover:block" color="#A0A0A0" />
        </button>
      </div>
      <div className="hidden lg:block">
        <Controls next={next} previous={previous} />
      </div>
    </div>
  );
}

const ArrowRight: React.FC<ArrowRightProps> = ({ color, ...props }) => {
  return (
    <div {...props}>
      <svg
        width="40"
        height="12"
        viewBox="0 0 40 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.5317 5.52782L34.0492 0L33.3869 0.667759L38.2072 5.52782H0V6.52782H38.152L33.3869 11.3322L34.0492 12L39.4765 6.52782H39.5392V6.46463L40 6L39.5392 5.53537V5.52782H39.5317Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default HeroSection;

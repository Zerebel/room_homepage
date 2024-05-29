import { PageInfo } from "../types/types";
import Image1 from "../assets/mobile-image-hero-1.jpg";
import DesktopImage1 from "../assets/desktop-image-hero-1.jpg";
import Image2 from "../assets/mobile-image-hero-2.jpg";
import DesktopImage2 from "../assets/desktop-image-hero-2.jpg";
import Image3 from "../assets/mobile-image-hero-3.jpg";
import DesktopImage3 from "../assets/desktop-image-hero-3.jpg";

export const pageData: PageInfo[] = [
  {
    image: Image1,
    desktopImage: DesktopImage1,
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: Image2,
    desktopImage: DesktopImage2,
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: Image3,
    desktopImage: DesktopImage3,
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

import FooterImageDark from "../assets/image-about-dark.jpg";
import FooterImageLight from "../assets/image-about-light.jpg";

const Footer = () => {
  const FooterImage = ({ image }: { image: string }) => {
    return <img src={image} className="w-full" alt="footer" />;
  };

  return (
    <footer>
      <div className="flex flex-col lg:flex-row ">
        <FooterImage image={FooterImageDark} />
        <div className="w-full px-12 py-8 flex flex-col justify-center gap-2">
          <p className="font-bold">ABOUT OUR FURNITURE</p>
          <span className="text-dark_gray font-medium">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </span>
        </div>
        <FooterImage image={FooterImageLight} />
      </div>
    </footer>
  );
};

export default Footer;

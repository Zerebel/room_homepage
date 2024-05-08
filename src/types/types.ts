export interface Data {
  image: string;
  desktopImage: string;
  title: string;
  description: string;
}

export interface NavItem {
  name: string;
  link: string;
}

export interface HeroImageProps {
  image: string;
  desktopImage: string;
}

export interface SliderControlsProps {
  next?: () => void;
  previous?: () => void;
}

export interface ArrowRightProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
}

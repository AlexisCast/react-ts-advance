import { type ReactNode } from "react";

type HeaderProps = {
	image: {
    src: string;
    alt: string;
  };
	children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
	return (
		<header>
			{children}
			<img {...image} />
		</header>
	);
};

export default Header;

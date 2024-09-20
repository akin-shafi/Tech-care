// components/Logo.js
import Image from "next/image";
const Logo = () => (
	<Image
		src="/images/TestLogo.svg"
		width={150}
		height={150} // You need to add the height property
		className="img-fluid"
		alt="Test Logo" // Alt text is required
	/>
);

export default Logo;

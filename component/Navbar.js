// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Image from "next/image";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<nav className="navbar m-2 shadow">
			<div className="container-fluid">
				<div className="logo">
					<Logo />
				</div>
				<div
					className="menu-icon"
					onClick={handleShowNavbar}>
					<Hamburger />
				</div>
				<div className={`nav-elements ${showNavbar && "active"}`}>
					<ul className="mb-0">
						<li>
							<Link href="/">
								<span className="icon-wrap">
									<Image
										src="/images/icons/home.svg"
										alt="home"
										className="img-fluid  me-1"
										width={17}
										height={17}
									/>
								</span>
								<span className="text-holder">Overview</span>
							</Link>
						</li>
						<li>
							<Link
								href="/blogs"
								className="active">
								<span className="icon-wrap">
									<Image
										src="/images/icons/group.svg"
										alt="home"
										className="img-fluid  me-1"
										width={17}
										height={17}
									/>
								</span>
								<span className="text-holder">Patient</span>
							</Link>
						</li>
						<li>
							<Link href="/projects">
								<span className="icon-wrap">
									<Image
										src="/images/icons/calendar_today.svg"
										alt="home"
										className="img-fluid  me-1"
										width={17}
										height={17}
									/>
								</span>
								<span className="text-holder">Schedule</span>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<span className="icon-wrap">
									<Image
										src="/images/icons/chat.svg"
										alt="home"
										className="img-fluid  me-1"
										width={17}
										height={17}
									/>
								</span>
								<span className="text-holder">Message</span>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<Image
									src="/images/icons/credit_card.svg"
									alt="home"
									className="img-fluid  me-1"
									width={17}
									height={17}
								/>
								<span className="text-holder">Transaction</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="profile-wrapper">
					<div className="profile-card d-flex align-items-center">
						<div className="profile-avatar border me-2">
							<Image
								width={100}
								height={100}
								src="/images/senior-woman-doctor-and-portrait-smile.png"
								alt="Avatar"
							/>
						</div>
						<div className="me-2">
							<div className="profile-body">Dr. Jose Simmons</div>
							<div className="profile-header">General Practitioner</div>
						</div>
						<div className="p-2 border-start ms-auto">
							<Image
								src="/images/icons/settings.svg"
								alt="Settings"
								width={17}
								height={17}
							/>
							<Image
								src="/images/icons/more_vertical.svg"
								className="ms-2"
								alt="More Options"
								width={17}
								height={17}
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

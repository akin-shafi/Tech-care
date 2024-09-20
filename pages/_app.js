import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/menu.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {}, [router.pathname]);
	<Head>
		<title>
			Tech Care{" "}
			{router.pathname === "/"
				? "Home"
				: router.pathname.replace("/", "").replaceAll("-", " ").toUpperCase()}
		</title>

		<meta
			name="description"
			content="Tech Care"
		/>
	</Head>;
	return <Component {...pageProps} />;
}

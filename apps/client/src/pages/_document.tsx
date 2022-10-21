import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Inter:r,b&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai:r,b&display=swap"
					rel="stylesheet"
				/>
				<Script id="check-dark-light" strategy="beforeInteractive">
					{`(()=>{const e=localStorage.getItem("producktivity-theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;(!e||e==="auto"?a:e==="dark")&&document.documentElement.classList.add("dark")})()`}
				</Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

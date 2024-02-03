import { TodoContextProvider } from "@/src/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Simple Todo",
	description: `It's just simple todo`,
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" data-testid="html-element">
			<body className={inter.className} data-testid="body-element">
				<TodoContextProvider>{children}</TodoContextProvider>
			</body>
		</html>
	);
}

export default RootLayout;

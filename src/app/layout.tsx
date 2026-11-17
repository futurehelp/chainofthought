import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chainofthought-2026.vercel.app"),
  title: "Chain of Thought | AI infrastructure, agents, and evals",
  description:
    "Conversations with the people building AI agents, infrastructure, and developer tools.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Chain of Thought | AI infrastructure, agents, and evals",
    description:
      "Conversations with the people building AI agents, infrastructure, and developer tools.",
    images: ["/images/home.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

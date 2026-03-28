import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Premi — AI/ML Engineer | One Piece Portfolio",
  description:
    "AI/ML Engineer specializing in GenAI, Agentic AI, and MLOps. Engineered RAG-powered analytics at Vodafone and cybersecurity ML systems at C-DOT.",
  keywords: ["AI Engineer", "ML Engineer", "GenAI", "MLOps", "LangChain", "RAG", "Portfolio"],
  authors: [{ name: "Ankit Premi" }],
  openGraph: {
    title: "Ankit Premi — AI/ML Engineer",
    description: "Code the Impossible. Build the Future. Engineer Intelligence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@400;700;900&family=Noto+Sans+JP:wght@300;400;500;700&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-deep-black text-white antialiased">{children}</body>
    </html>
  );
}

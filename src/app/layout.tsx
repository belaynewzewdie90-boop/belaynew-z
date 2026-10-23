import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "Belaynew Zewdie | Full-Stack Developer (React, Next.js, Node.js)",
  description:
    "Full-stack developer in Addis Ababa building production-ready web apps with React, Next.js, Node.js, PostgreSQL and Docker. Open to full-time and remote roles.",
  keywords: [
    "Belaynew Zewdie",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Ethiopia",
    "Addis Ababa",
  ],
  authors: [{ name: "Belaynew Zewdie" }],
  openGraph: {
    title: "Belaynew Zewdie | Full-Stack Developer",
    description:
      "React, Next.js & Node.js developer. See live projects, skills and CV.",
    type: "website",
    images: ["/hello.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tanushree.vercel.app'),
  title: 'Tanushree Mahato - Full Stack Developer & AI Application Builder',
  description: 'Full Stack Developer & AI Application Builder specializing in React, Next.js, Node.js, NestJS, and Agentic AI systems. Explore featured projects, live coding stats, and skills.',
  keywords: [
    'Full Stack Developer',
    'AI Application Builder',
    'Agentic AI',
    'React Developer',
    'Next.js Specialist',
    'Node.js Developer',
    'NestJS',
    'TypeScript',
    'Prisma ORM',
    'PostgreSQL',
    'MongoDB',
    'MCP Protocol',
    'Tanushree Mahato',
    'Software Engineer Bhubaneswar'
  ],
  authors: [{ name: 'Tanushree Mahato' }],
  creator: 'Tanushree Mahato',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tanushree.vercel.app/',
    title: 'Tanushree Mahato - Full Stack Developer & AI Application Builder',
    description: 'Portfolio showcasing modern web applications, AI Agents, and scalable backend architectures.',
    siteName: 'Tanushree Mahato Portfolio',
    images: [
      {
        url: '/tanulight.png',
        width: 1200,
        height: 630,
        alt: 'Tanushree Mahato - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanushree Mahato - Full Stack Developer & AI Application Builder',
    description: 'Portfolio showcasing modern web development projects, AI Agents, and technical expertise.',
    images: ['/tanulight.png'],
    creator: '@shree2698',
  },
  alternates: {
    canonical: 'https://tanushree.vercel.app/',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Tanushree Mahato',
              url: 'https://tanushree.vercel.app/',
              image: '/tanulight.png',
              jobTitle: 'Full Stack Developer & AI Application Builder',
              description: 'Full Stack Developer specializing in React, Next.js, Node.js, NestJS, and Agentic AI',
              sameAs: [
                'https://www.linkedin.com/in/tanushree-mahato-a6a16920a',
                'https://github.com/shree2698',
                'https://leetcode.com/u/tshreem1998/'
              ],
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'NestJS',
                'Agentic AI',
                'MCP Protocol',
                'PostgreSQL',
                'MongoDB',
                'Prisma',
                'Tailwind CSS'
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Jnine Infotech'
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bhubaneswar',
                addressRegion: 'Odisha',
                addressCountry: 'India'
              }
            })
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>

    </html>
  );
}

"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Download, X, Github, Linkedin, Mail, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import ModeToggle from "@/components/ModeToggle"

import sr from "@/assets/images/tanulight.png"
import sr1 from "@/assets/images/tanudark.png"
import { useTheme } from "next-themes"

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home")

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/TanushreeMahato_FullStackDeveloper.pdf"
    link.setAttribute("download", "TanushreeMahato_FullStackDeveloper.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#github-activity", label: "Activity" },
    { href: "#contact", label: "Contact" },
  ]
 React.useEffect(() => {
    setMounted(true);
  }, []);
const logoSrc = mounted && theme === "dark" ? sr1 : sr;
  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/20">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link 
            href="#home" 
            className="flex items-center space-x-2.5 group transition-transform hover:scale-102"
          >
            <div className="relative">
              <Image 
                src={logoSrc} 
                alt="Tanushree Logo" 
                width={40} 
                height={40} 
                className="rounded-md ring-1 ring-accent/20 group-hover:ring-accent/40 transition-all"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Tanushree
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">
                Full Stack & AI Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-background/50 rounded-md px-1.5 py-1 backdrop-blur-sm border border-border/20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 relative ${
                  activeSection === item.href.substring(1)
                    ? "text-white bg-gradient-to-r from-accent to-cta shadow-sm"
                    : "text-foreground/70 hover:text-accent hover:bg-background/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Social Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1.5">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                asChild
              >
                <Link href="https://github.com/shree2698" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 rounded-md hover:bg-blue-600/10 hover:text-blue-600 transition-colors"
                asChild
              >
                <Link href="https://www.linkedin.com/in/tanushree-mahato-a6a16920a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 rounded-md hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
                asChild
              >
                <Link href="https://leetcode.com/u/tshreem1998/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                  <Trophy className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Separator orientation="vertical" className="h-5 hidden md:block opacity-30" />

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Download Resume */}
            <Button 
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-accent to-cta hover:from-accent/90 hover:to-cta/90 text-white shadow-sm transition-all duration-200 rounded-md px-3.5 py-1.5 text-xs font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden w-8 h-8 rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-72 p-0 bg-background/95 backdrop-blur-xl border-l border-border/20"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation links and profile actions</SheetDescription>

                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/20">
                  <Link href="#home" className="flex items-center space-x-2.5">
                    <Image 
                      src={logoSrc} 
                      alt="Logo" 
                      width={28} 
                      height={28} 
                      className="rounded-md"
                    />
                    <div className="flex flex-col">
                      <span className="text-base font-bold">Tanushree</span>
                      <span className="text-[10px] text-foreground/60 font-mono">Full Stack Developer</span>
                    </div>
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="p-4">
                  <nav className="flex flex-col gap-1.5 mb-6">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                            activeSection === item.href.substring(1)
                              ? "bg-gradient-to-r from-accent to-cta text-white shadow-sm"
                              : "hover:bg-background/80 hover:text-accent"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <Separator className="mb-4 opacity-30" />

                  {/* Mobile Actions */}
                  <div className="space-y-3">
                    <Button 
                      onClick={handleDownload}
                      className="w-full bg-gradient-to-r from-accent to-cta hover:from-accent/90 hover:to-cta/90 text-white shadow-sm rounded-md py-2 text-xs font-semibold"
                    >
                      <Download className="h-3.5 w-3.5 mr-1.5" />
                      Download Resume
                    </Button>

                    {/* Mobile Social Links */}
                    <div className="flex justify-center gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-8 h-8 rounded-md border-border hover:bg-accent/10"
                        asChild
                      >
                        <Link href="https://github.com/shree2698" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-8 h-8 rounded-md border-border hover:bg-accent/10"
                        asChild
                      >
                        <Link href="https://www.linkedin.com/in/tanushree-mahato-a6a16920a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-8 h-8 rounded-md border-border hover:bg-accent/10"
                        asChild
                      >
                        <Link href="https://leetcode.com/u/tshreem1998/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                          <Trophy className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-8 h-8 rounded-md border-border hover:bg-accent/10"
                        asChild
                      >
                        <Link href="mailto:tanushreemahato.261298@gmail.com" aria-label="Email">
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
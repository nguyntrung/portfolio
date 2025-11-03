"use client"

import Link from "next/link";
import { ModeToggle } from "./_components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "../../ui/button";

const navItems : { title: string; href: string }[] = [
  {
    title: "Home",
    href: "#hero",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  }
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Only update if not programmatically scrolling
          if (!isScrolling) {
            const sections = navItems.map(item => item.href.replace('#', ''));
            
            const current = sections.find(section => {
              const element = document.getElementById(section);
              if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
              }
              return false;
            });
            
            if (current && current !== activeSection) {
              setActiveSection(current);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
      
      // Clear timeout and reset scrolling state
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection, isScrolling]);

  const handleClick = (e: MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    setIsScrolling(true); // Mark as programmatic scrolling
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without triggering default jump
      history.replaceState(null, '', href);
    }
  };

  return (
    <div className="max-w-[1200px] w-full flex items-center justify-between m-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 sticky top-4 sm:top-6 
      z-50 rounded-full border border-white/20 
      bg-white/30 dark:bg-black/30 
      backdrop-blur-lg backdrop-saturate-150 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] 
      dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] 
      transition-all duration-300"
    >
      {/* <Avatar className="ring-2 ring-transparent hover:ring-primary/50 hover:scale-110 transition-all duration-300 cursor-pointer">
        <AvatarImage src="D:/Portfolio/portfolio/public/logo-dark.svg" />
        <AvatarFallback>NT</AvatarFallback>
      </Avatar> */}
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <Link
        href="#hero"
        onClick={(e) => handleClick(e, "#hero")}
        className="font-bold cursor-pointer"
      >
        nguyentrung
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu viewport={false} className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href} 
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative group transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full",
                    "hover:bg-primary/10 dark:hover:bg-primary/20",
                    isActive && "bg-primary/20"
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-full transition-all">
        <ModeToggle />
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-lg md:hidden z-50">
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    "hover:bg-primary/10 dark:hover:bg-primary/20",
                    isActive && "bg-primary/20 text-primary"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

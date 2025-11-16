'use client'

import { Calendar, Moon, Sun, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 600px)
      setShowScrollTop(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80 // altura do header (h-20 = 80px)
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary shadow-md">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">Master Mind</span>
            </div>
            
            <div className="flex items-center gap-8">
              <nav className="hidden items-center gap-8 md:flex">
                <a 
                  href="#features" 
                  onClick={(e) => handleAnchorClick(e, '#features')}
                  className="text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  Recursos
                </a>
                <a 
                  href="#integrations" 
                  onClick={(e) => handleAnchorClick(e, '#integrations')}
                  className="text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  Integrações
                </a>
                <a 
                  href="#cta" 
                  onClick={(e) => handleAnchorClick(e, '#cta')}
                  className="text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  Download
                </a>
              </nav>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-10 w-10"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-6 w-6" />
                ) : (
                  <Sun className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-secondary text-secondary-foreground shadow-lg transition-all hover:bg-secondary/90 hover:shadow-xl"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}

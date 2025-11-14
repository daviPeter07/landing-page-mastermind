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

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Master Mind</span>
            </div>
            
            <div className="flex items-center gap-6">
              <nav className="hidden items-center gap-6 md:flex">
                <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Recursos
                </a>
                <a href="#integrations" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Integrações
                </a>
                <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Preços
                </a>
              </nav>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
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

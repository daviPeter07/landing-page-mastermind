'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function CTA() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const elements = [
      { ref: titleRef, key: 'title', delay: 0 },
      { ref: descriptionRef, key: 'description', delay: 100 },
      { ref: buttonsRef, key: 'buttons', delay: 200 },
      { ref: footerRef, key: 'footer', delay: 300 },
    ]

    const observers: IntersectionObserver[] = []

    elements.forEach(({ ref, key, delay }) => {
      if (!ref.current) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleElements((prev) => new Set([...prev, key]))
              }, delay)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(ref.current)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const handleComingSoon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('Em breve...')
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-accent py-20 text-accent-foreground sm:py-32">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            ref={titleRef}
            className={`text-balance text-4xl font-bold tracking-tight text-white transition-all duration-700 sm:text-5xl ${
              visibleElements.has('title')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Pronto para transformar sua produtividade?
          </h2>
          <p
            ref={descriptionRef}
            className={`mt-6 text-pretty text-lg leading-relaxed text-white/90 transition-all duration-700 ${
              visibleElements.has('description')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Junte-se a milhares de profissionais que já organizaram suas vidas 
            com o Feira App. Comece gratuitamente hoje mesmo.
          </p>
          <div
            ref={buttonsRef}
            className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 sm:flex-row ${
              visibleElements.has('buttons')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90 shadow-lg border-none" onClick={handleComingSoon}>
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg border-none" onClick={handleComingSoon}>
              Falar com Vendas
            </Button>
          </div>
          <p
            ref={footerRef}
            className={`mt-6 text-sm text-white/75 transition-all duration-700 ${
              visibleElements.has('footer')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Sem cartão de crédito necessário • Cancele a qualquer momento
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-secondary blur-3xl dark:bg-primary" />
      </div>
    </section>
  )
}

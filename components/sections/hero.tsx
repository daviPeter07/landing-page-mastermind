'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Smartphone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const phone1Ref = useRef<HTMLDivElement>(null)
  const phone2Ref = useRef<HTMLDivElement>(null)
  const phone3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero aparece imediatamente quando a página carrega
    const timer = setTimeout(() => {
      setVisibleElements((prev) => new Set([...prev, 'badge', 'title', 'description', 'buttons', 'phone1', 'phone2', 'phone3']))
    }, 100)

    // Também adiciona observers para garantir que funcione mesmo se scrollar
    const elements = [
      { ref: badgeRef, key: 'badge', delay: 0 },
      { ref: titleRef, key: 'title', delay: 100 },
      { ref: descriptionRef, key: 'description', delay: 200 },
      { ref: buttonsRef, key: 'buttons', delay: 300 },
      { ref: phone1Ref, key: 'phone1', delay: 400 },
      { ref: phone2Ref, key: 'phone2', delay: 500 },
      { ref: phone3Ref, key: 'phone3', delay: 600 },
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
      clearTimeout(timer)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const handleComingSoon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('Em breve...')
  }

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-20 sm:pt-12 sm:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div
            ref={badgeRef}
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm transition-all duration-700 ${
              visibleElements.has('badge')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}
          >
            <Smartphone className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Disponível somente para Android</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>

          <h1
            ref={titleRef}
            className={`text-balance text-5xl font-bold tracking-tight text-foreground transition-all duration-700 sm:text-6xl lg:text-7xl ${
              visibleElements.has('title')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Organize sua vida{' '}
            <span className="text-accent">produtiva</span> e{' '}
            <span className="text-secondary">financeira</span>
          </h1>

          <p
            ref={descriptionRef}
            className={`mt-6 text-pretty text-lg leading-relaxed text-muted-foreground transition-all duration-700 sm:text-xl ${
              visibleElements.has('description')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Transforme sua rotina com um aplicativo completo que une controle de tarefas, 
            acompanhamento de produtividade e gestão financeira. Tudo integrado com seu 
            Google Calendar na palma da sua mão.
          </p>

          <div
            ref={buttonsRef}
            className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 sm:flex-row ${
              visibleElements.has('buttons')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleComingSoon}>
              Baixar Aplicativo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="group" onClick={handleComingSoon}>
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Ver Demonstração
            </Button>
          </div>

          <div className="mt-16">
            <div className="relative mx-auto max-w-4xl">
              <div className="flex items-end justify-center gap-4">
                {/* iPhone mockup - main screen */}
                <div
                  ref={phone1Ref}
                  className={`relative w-64 -rotate-6 transform transition-all duration-700 hover:rotate-0 ${
                    visibleElements.has('phone1')
                      ? 'opacity-100 translate-x-0 translate-y-0'
                      : 'opacity-0 -translate-x-8 translate-y-8'
                  }`}
                >
                  <div className="relative rounded-[2.5rem] border-8 border-gray-800 bg-gray-800 shadow-2xl">
                    <div className="overflow-hidden rounded-[1.5rem] bg-white">
                      <div className="aspect-[9/19.5]">
                        <img
                          src="/mobile-app-task-list-screen-with-calendar-integrat.jpg"
                          alt="Feira App - Tela de Tarefas"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
                  </div>
                </div>

                {/* Android mockup - center larger */}
                <div
                  ref={phone2Ref}
                  className={`relative z-10 w-72 transform transition-all duration-700 hover:scale-105 ${
                    visibleElements.has('phone2')
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 shadow-2xl">
                    <div className="overflow-hidden rounded-[1.5rem] bg-white">
                      <div className="aspect-[9/19.5]">
                        <img
                          src="/mobile-app-dashboard-with-productivity-charts-and-.jpg"
                          alt="Feira App - Dashboard Principal"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* iPhone mockup - finance screen */}
                <div
                  ref={phone3Ref}
                  className={`relative w-64 rotate-6 transform transition-all duration-700 hover:rotate-0 ${
                    visibleElements.has('phone3')
                      ? 'opacity-100 translate-x-0 translate-y-0'
                      : 'opacity-0 translate-x-8 translate-y-8'
                  }`}
                >
                  <div className="relative rounded-[2.5rem] border-8 border-gray-800 bg-gray-800 shadow-2xl">
                    <div className="overflow-hidden rounded-[1.5rem] bg-white">
                      <div className="aspect-[9/19.5]">
                        <img
                          src="/mobile-app-financial-control-screen-with-expenses-.jpg"
                          alt="Feira App - Controle Financeiro"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-secondary opacity-20" style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }} />
      </div>
    </section>
  )
}

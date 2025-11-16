'use client'

import { CheckCircle2, Calendar, TrendingUp, Clock, Bell, DollarSign, BarChart3, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'

export function Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: 'Organização de Tarefas',
      description: 'Crie, organize e priorize suas tarefas com facilidade. Sistema inteligente de categorização e filtros avançados.'
    },
    {
      icon: Calendar,
      title: 'Integração com Google Calendar',
      description: 'Sincronização bidirecional completa com seu calendário. Veja tarefas e eventos em um único lugar.'
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento de Produtividade',
      description: 'Métricas detalhadas sobre seu desempenho, padrões de trabalho e evolução ao longo do tempo.'
    },
    {
      icon: Clock,
      title: 'Modo Pomodoro',
      description: 'Técnica de produtividade integrada com cronômetro inteligente e pausas programadas.'
    },
    {
      icon: DollarSign,
      title: 'Controle Financeiro',
      description: 'Gerencie receitas e despesas, categorize transações e acompanhe seu orçamento mensal.'
    },
    {
      icon: BarChart3,
      title: 'Dashboard Inteligente',
      description: 'Visualizações claras e intuitivas dos seus dados. Gráficos interativos e relatórios personalizados.'
    },
    {
      icon: Bell,
      title: 'Lembretes Inteligentes',
      description: 'Notificações contextuais que se adaptam à sua rotina e prioridades. Nunca perca um prazo importante.'
    },
    {
      icon: Zap,
      title: 'Automações Poderosas',
      description: 'Configure regras automáticas para tarefas recorrentes e economize tempo valioso.'
    }
  ]

  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const headerRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    // Observer para o header
    if (headerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleElements((prev) => new Set([...prev, 'header']))
              }, 100)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      observer.observe(headerRef.current)
      observers.push(observer)
    }

    // Observer para os cards de features
    featureRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleElements((prev) => new Set([...prev, `feature-${index}`]))
              }, index * 100)
              observer.unobserve(ref)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visibleElements.has('header')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tudo que você precisa para ser mais produtivo
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Recursos poderosos que trabalham juntos para transformar sua rotina 
            e maximizar sua eficiência pessoal e profissional.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleElements.has(`feature-${index}`)
            return (
              <div
                key={index}
                ref={(el) => {
                  featureRefs.current[index] = el
                }}
                className={`transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <Card className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

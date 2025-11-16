'use client'

import { Layers, Calendar, Infinity, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function Stats() {
  const stats = [
    {
      icon: Layers,
      value: '3 em 1',
      label: 'Tudo Integrado',
      description: 'Tarefas, produtividade e finanças em um só lugar'
    },
    {
      icon: Calendar,
      value: 'Google',
      label: 'Calendar Sync',
      description: 'Integração completa com seu calendário'
    },
    {
      icon: Infinity,
      value: 'Sem Limites',
      label: 'Ilimitado',
      description: 'Tarefas, transações e dados sem restrições'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Gratuito',
      description: 'Todas as funcionalidades sem custos'
    }
  ]

  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const statRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    statRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, `stat-${index}`]))
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
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isVisible = visibleItems.has(`stat-${index}`)
            return (
              <div
                key={index}
                ref={(el) => {
                  statRefs.current[index] = el
                }}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="mb-3 flex justify-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

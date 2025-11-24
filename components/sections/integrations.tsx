'use client'

import { Calendar, Smartphone, Lock, Zap, CheckIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function Integrations() {
  const integrations = [
    {
      icon: Calendar,
      name: 'Google Calendar',
      description: 'Sincronização em tempo real'
    },
    {
      icon: Smartphone,
      name: 'Android',
      description: 'Aplicativos nativos'
    },
    {
      icon: Lock,
      name: 'Segurança',
      description: 'Criptografia de ponta a ponta'
    },
    {
      icon: Zap,
      name: 'Modo Offline',
      description: 'Funciona sem internet'
    }
  ]

  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const headerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const integrationRefs = useRef<(HTMLDivElement | null)[]>([])
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([])
  const cardRef = useRef<HTMLDivElement | null>(null)
  const cardTitleRef = useRef<HTMLHeadingElement>(null)
  const phoneRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    // Observer para o título do header
    if (titleRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, 'title']))
              }, 100)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      observer.observe(titleRef.current)
      observers.push(observer)
    }

    // Observer para a descrição do header
    if (descriptionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, 'description']))
              }, 200)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      observer.observe(descriptionRef.current)
      observers.push(observer)
    }

    // Observer para cards de integração
    integrationRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, `integration-${index}`]))
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

    // Observer para itens da lista
    listItemRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, `list-item-${index}`]))
              }, index * 150)
              observer.unobserve(ref)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    // Observer para o card principal
    if (cardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, 'card']))
              }, 200)
              observer.unobserve(cardRef.current!)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(cardRef.current)
      observers.push(observer)
    }

    // Observer para o título do card
    if (cardTitleRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, 'card-title']))
              }, 250)
              observer.unobserve(cardTitleRef.current!)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(cardTitleRef.current)
      observers.push(observer)
    }

    // Observer para o mockup do celular
    if (phoneRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, 'phone']))
              }, 300)
              observer.unobserve(phoneRef.current!)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(phoneRef.current)
      observers.push(observer)
    }

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="integrations" className="bg-primary py-20 text-primary-foreground sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <h2
            ref={titleRef}
            className={`text-balance text-3xl font-bold tracking-tight transition-all duration-700 sm:text-4xl ${
              visibleItems.has('title')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Funciona onde você trabalha
          </h2>
          <p
            ref={descriptionRef}
            className={`mt-4 text-pretty text-lg leading-relaxed opacity-90 transition-all duration-700 ${
              visibleItems.has('description')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Acesse suas informações em qualquer dispositivo móvel, a qualquer momento. 
            Seus dados sempre sincronizados e seguros.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            const isVisible = visibleItems.has(`integration-${index}`)
            return (
              <div
                key={index}
                ref={(el) => {
                  integrationRefs.current[index] = el
                }}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm sm:mb-4 sm:h-16 sm:w-16 sm:rounded-2xl">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-sm font-semibold sm:text-base">{integration.name}</h3>
                <p className="text-xs opacity-80 sm:text-sm">{integration.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 max-w-5xl sm:mt-16 lg:mt-20">
          <div
            ref={cardRef}
            className={`relative overflow-hidden rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 sm:p-6 lg:p-8 ${
              visibleItems.has('card')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="order-2 lg:order-1">
                <h3
                  ref={cardTitleRef}
                  className={`mb-4 text-2xl font-bold transition-all duration-700 sm:mb-6 sm:text-3xl lg:text-4xl ${
                    visibleItems.has('card-title')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  Integração perfeita com Google Calendar
                </h3>
                <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
                  {[
                    'Sincronização bidirecional automática',
                    'Crie eventos diretamente das tarefas',
                    'Visualização unificada de compromissos e tarefas',
                    'Notificações inteligentes sincronizadas',
                  ].map((text, index) => {
                    const isVisible = visibleItems.has(`list-item-${index}`)
                    return (
                      <li
                        key={index}
                        ref={(el) => {
                          listItemRefs.current[index] = el
                        }}
                        className={`flex items-start gap-3 transition-all duration-700 sm:gap-4 ${
                          isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-8'
                        }`}
                      >
                        <CheckIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary sm:mt-1 sm:h-8 sm:w-8 lg:mt-1 lg:h-9 lg:w-9" />
                        <span className="text-base leading-relaxed opacity-90 sm:text-lg md:text-xl lg:text-xl">
                          {text}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div
                ref={phoneRef}
                className={`order-1 flex items-center justify-center transition-all duration-700 lg:order-2 ${
                  visibleItems.has('phone')
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
              >
                <div className="relative">
                  <div className="relative w-48 rounded-[2rem] border-4 border-gray-800 bg-gray-800 shadow-2xl sm:w-56 sm:rounded-[2.5rem] sm:border-8 lg:w-64">
                    <div className="overflow-hidden rounded-[1.25rem] bg-white sm:rounded-[1.5rem]">
                      <div className="aspect-[9/19.5] flex items-center justify-center p-3 sm:p-4">
                       <img
                          src="/calendar-light-theme.jpeg"
                          alt="Master Mind - Tela de Tarefas"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-0 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-gray-800 sm:h-6 sm:w-32 sm:rounded-b-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


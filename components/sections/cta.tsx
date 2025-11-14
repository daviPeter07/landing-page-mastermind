import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-accent py-20 text-accent-foreground sm:py-32">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Pronto para transformar sua produtividade?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed opacity-90">
            Junte-se a milhares de profissionais que já organizaram suas vidas 
            com o Feira App. Comece gratuitamente hoje mesmo.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground bg-transparent text-accent-foreground hover:bg-accent-foreground/10">
              Falar com Vendas
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Sem cartão de crédito necessário • Cancele a qualquer momento
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-secondary blur-3xl" />
      </div>
    </section>
  )
}

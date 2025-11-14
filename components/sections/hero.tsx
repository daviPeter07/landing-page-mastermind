import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Smartphone } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
            <Smartphone className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Disponível para Android</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Organize sua vida{' '}
            <span className="text-accent">produtiva</span> e{' '}
            <span className="text-secondary">financeira</span>
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Transforme sua rotina com um aplicativo completo que une controle de tarefas, 
            acompanhamento de produtividade e gestão financeira. Tudo integrado com seu 
            Google Calendar na palma da sua mão.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Baixar Aplicativo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Ver Demonstração
            </Button>
          </div>

          <div className="mt-16">
            <div className="relative mx-auto max-w-4xl">
              <div className="flex items-end justify-center gap-4">
                {/* iPhone mockup - main screen */}
                <div className="relative w-64 -rotate-6 transform transition-transform hover:rotate-0">
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
                <div className="relative w-72 z-10 transform transition-transform hover:scale-105">
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
                <div className="relative w-64 rotate-6 transform transition-transform hover:rotate-0">
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

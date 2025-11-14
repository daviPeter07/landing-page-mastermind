import { Calendar, Smartphone, Lock, Zap } from 'lucide-react'

export function Integrations() {
  const integrations = [
    {
      icon: Calendar,
      name: 'Google Calendar',
      description: 'Sincronização em tempo real'
    },
    {
      icon: Smartphone,
      name: 'Android & iOS',
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

  return (
    <section id="integrations" className="bg-primary py-20 text-primary-foreground sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Funciona onde você trabalha
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed opacity-90">
            Acesse suas informações em qualquer dispositivo móvel, a qualquer momento. 
            Seus dados sempre sincronizados e seguros.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-semibold">{integration.name}</h3>
                <p className="text-sm opacity-80">{integration.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-8 backdrop-blur-sm">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Integração perfeita com Google Calendar</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed opacity-90">
                      Sincronização bidirecional automática
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed opacity-90">
                      Crie eventos diretamente das tarefas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed opacity-90">
                      Visualização unificada de compromissos e tarefas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed opacity-90">
                      Notificações inteligentes sincronizadas
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="relative w-64 rounded-[2.5rem] border-8 border-gray-800 bg-gray-800 shadow-2xl">
                    <div className="overflow-hidden rounded-[1.5rem] bg-white">
                      <div className="aspect-[9/19.5]">
                        <img
                          src="/mobile-app-calendar-integration-view-with-tasks.jpg"
                          alt="Integração Google Calendar no Feira App"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
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

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

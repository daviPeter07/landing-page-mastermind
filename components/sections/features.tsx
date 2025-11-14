import { CheckCircle2, Calendar, TrendingUp, Clock, Bell, DollarSign, BarChart3, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

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

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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
            return (
              <Card key={index} className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

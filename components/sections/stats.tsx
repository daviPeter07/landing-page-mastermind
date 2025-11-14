export function Stats() {
  const stats = [
    {
      value: '10K+',
      label: 'Usuários Ativos',
      description: 'Profissionais organizados'
    },
    {
      value: '98%',
      label: 'Satisfação',
      description: 'Avaliação dos usuários'
    },
    {
      value: '500K+',
      label: 'Tarefas Concluídas',
      description: 'Produtividade aumentada'
    },
    {
      value: '4.8/5',
      label: 'Avaliação',
      description: 'Na Google Play e App Store'
    }
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-foreground sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

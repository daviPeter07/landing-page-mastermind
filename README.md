## Master Mind – Landing Page

Landing page do Master Mind, um aplicativo gratuito de produtividade e controle financeiro integrado ao Google Calendar.

### Visão geral

O Master Mind é apresentado como um app para:
- **Organizar tarefas e rotina** (todo list, filtros, modo Pomodoro)
- **Acompanhar produtividade** (dashboards, métricas e gráficos)
- **Controlar finanças pessoais** (receitas, despesas, orçamento)
- **Integrar tudo ao Google Calendar**

Esta landing page foi construída para validar o conceito do produto e servir como base de divulgação/download (quando o app estiver disponível).

### Tecnologias

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Radix UI + shadcn/ui style system**
- **Lucide React**

### Rodando o projeto

Pré-requisitos:
- Node.js LTS (recomendado 18+)
- pnpm, npm ou yarn instalado globalmente

Instalação das dependências:

```bash
# dentro da pasta do projeto
npm install
# ou
pnpm install
# ou
yarn
```

Ambiente de desenvolvimento:

```bash
npm run dev
```

O app ficará disponível em:

```text
http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

### Estrutura principal

- `app/`
  - `page.tsx` – composição das seções da landing
  - `globals.css` – tema global, cores e resets
- `components/sections/`
  - `header.tsx` – topo fixo, navegação e toggle de tema
  - `hero.tsx` – destaque principal com mockups de celular e CTA
  - `stats.tsx` – diferenciais e “porquês” do app
  - `features.tsx` – grid de funcionalidades
  - `integrations.tsx` – foco na integração com Google Calendar
  - `cta.tsx` – call-to-action final (começar gratuitamente / falar com a equipe)
  - `footer.tsx` – links finais, redes e infos legais

### Detalhes de UX e UI

- **Tema claro e escuro** com persistência via `localStorage`
- **Scroll suave** para navegação interna (anchor links)
- **Animações de scroll** com Intersection Observer em todas as seções principais
- **Mockups responsivos** de celulares na hero, pensados para ficar bons tanto em mobile quanto desktop
- **Botões “Em breve…”** para ações ainda não implementadas, evitando links quebrados

### Personalização rápida

Alguns pontos fáceis de ajustar para adaptar a outro projeto:

- **Nome do produto e copy** – em `hero.tsx`, `cta.tsx`, `stats.tsx` e `features.tsx`
- **Paleta de cores** – em `app/globals.css` (variáveis como `--dark-blue`, `--yellow`, etc.)
- **Imagens dos mockups** – arquivos em `public/` usados na seção `Hero`
- **Links externos** – ajustes em `header.tsx` e `footer.tsx`

### Licença

Uso livre para estudos e projetos pessoais. Para uso comercial, revise os assets (imagens, ícones, fontes) e ajuste conforme a necessidade da sua licença/produto.



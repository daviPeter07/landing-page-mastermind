import { Calendar, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Calendar className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Feira App</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Organize sua vida produtiva e financeira com inteligência e simplicidade.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Produto</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Recursos</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Integrações</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Preços</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Novidades</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Sobre</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Carreiras</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Termos</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Cookies</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Licenças</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Feira App. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

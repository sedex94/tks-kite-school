import { MessageCircle, Mail, AtSign } from 'lucide-react'
import { navLinks, site, whatsappLink } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/images/tks-logo.png"
                alt="Logo TKS Tavinho Kitesurf"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-heading text-xl font-700 uppercase tracking-wide">
                TKS<span className="text-primary"> Kite</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Escola de kitesurf em {site.location}. Aulas para todos os níveis
              com segurança e equipamento incluso.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-600 uppercase tracking-wide">
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-600 uppercase tracking-wide">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappLink('Olá, TKS Kite School!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  {site.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <AtSign className="h-4 w-4 text-primary" />
                  @tavinho_tks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}

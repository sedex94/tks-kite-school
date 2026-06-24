import { MessageCircle, Mail, MapPin, Clock, AtSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site, whatsappLink } from '@/lib/site'

export function ContactSection() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/images/tks-logo.png"
              alt="Logo TKS Tavinho Kitesurf"
              className="mb-6 h-24 w-24 rounded-full object-cover ring-2 ring-primary/40"
            />
            <p className="font-heading text-sm font-600 uppercase tracking-[0.2em] text-primary">
              Contato
            </p>
            <h2 className="mt-3 font-heading text-4xl font-700 uppercase leading-tight tracking-tight text-balance sm:text-5xl">
              Bora marcar a sua aula?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Chama no WhatsApp para tirar dúvidas, ver disponibilidade e
              agendar. Respondemos rápido e te ajudamos a escolher o melhor dia
              de vento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                render={
                  <a
                    href={whatsappLink(
                      'Olá! Quero agendar uma aula de kitesurf na TKS Kite School.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                Falar no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<a href={`mailto:${site.email}`} />}
              >
                <Mail className="mr-1 h-4 w-4" />
                Enviar e-mail
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              lines={[site.whatsappLabel]}
              href={whatsappLink('Olá, TKS Kite School!')}
            />
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title="E-mail"
              lines={[site.email]}
              href={`mailto:${site.email}`}
            />
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title="Localização"
              lines={[site.location, 'Encontro na praia']}
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title="Horários"
              lines={['Todos os dias', 'Conforme o vento']}
            />
            <div className="sm:col-span-2">
              <InfoCard
                icon={<AtSign className="h-5 w-5" />}
                title="Instagram"
                lines={['@tkskiteschool']}
                href={site.instagram}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode
  title: string
  lines: string[]
  href?: string
}) {
  const content = (
    <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
        {icon}
      </span>
      <div>
        <h3 className="font-heading text-sm font-600 uppercase tracking-wide">
          {title}
        </h3>
        {lines.map((l) => (
          <p key={l} className="mt-0.5 text-sm text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  return content
}

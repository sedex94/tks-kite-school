import { Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/site'

// Espaço para os patrocinadores da escola. Adicione logos em /public e troque o texto.
const sponsors = [
  'Patrocinador 1',
  'Patrocinador 2',
  'Patrocinador 3',
  'Patrocinador 4',
  'Patrocinador 5',
  'Patrocinador 6',
]

export function SponsorsSection() {
  return (
    <section
      id="patrocinadores"
      className="bg-card/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-600 uppercase tracking-[0.2em] text-primary">
            Patrocinadores
          </p>
          <h2 className="mt-3 font-heading text-4xl font-700 uppercase leading-tight tracking-tight text-balance sm:text-5xl">
            Quem apoia a TKS
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Marcas e parceiros que acreditam no esporte e ajudam a manter a
            escola navegando.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((s) => (
            <div
              key={s}
              className="flex h-24 items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {s}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-dashed border-border p-8 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Handshake className="h-6 w-6" />
          </span>
          <h3 className="font-heading text-xl font-600 uppercase tracking-wide">
            Seja um patrocinador
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Quer ver a sua marca aqui e associá-la ao kitesurf? Fale com a gente
            e conheça as opções de patrocínio.
          </p>
          <Button asChild>
            <a
              href={whatsappLink(
                'Olá! Tenho interesse em patrocinar a TKS Kite School.',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero patrocinar
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/site'

const classes = [
  {
    level: 'Iniciante',
    image: '/images/lesson-beginner.jpg',
    imagePosition: 'object-[center_22%]',
    duration: '3 a 4 aulas',
    price: 'a partir de R$ 300/aula',
    description:
      'Para quem nunca tocou em uma pipa. Você aprende teoria do vento, segurança, controle de kite em terra e os primeiros metros na água.',
    features: [
      'Equipamento completo incluso',
      'Teoria de vento e segurança',
      'Controle de kite na areia e na água',
      'Acompanhamento individual',
    ],
    featured: false,
  },
  {
    level: 'Intermediário',
    image: '/images/lesson-intermediate.jpg',
    imagePosition: 'object-center',
    duration: '4 a 6 aulas',
    price: 'a partir de R$ 280/aula',
    description:
      'Já consegue subir na prancha? Aqui você ganha autonomia: water start consistente, navegar de bolina e voltar ao ponto de partida.',
    features: [
      'Water start e navegação',
      'Como voltar contra o vento',
      'Correção de postura e técnica',
      'Rádio de comunicação na água',
    ],
    featured: true,
  },
  {
    level: 'Avançado',
    image: '/images/lesson-advanced.jpg',
    imagePosition: 'object-[center_28%]',
    duration: 'sob medida',
    price: 'consulte valores',
    description:
      'Para velejadores independentes que querem evoluir. Saltos, transições, primeiras manobras de freestyle e leitura avançada de condições.',
    features: [
      'Saltos e transições',
      'Introdução ao freestyle',
      'Análise de vídeo das manobras',
      'Coaching personalizado',
    ],
    featured: false,
  },
]

export function ClassesSection() {
  return (
    <section id="aulas" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-600 uppercase tracking-[0.2em] text-primary">
            Nossas aulas
          </p>
          <h2 className="mt-3 font-heading text-4xl font-700 uppercase leading-tight tracking-tight text-balance sm:text-5xl">
            Escolha o seu nível e comece a evoluir
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Todas as aulas são individuais ou em duplas, com equipamento incluso
            e instrutores certificados. A progressão é no seu ritmo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {classes.map((c) => (
            <article
              key={c.level}
              className={`flex flex-col overflow-hidden rounded-xl border bg-card transition-transform hover:-translate-y-1 ${
                c.featured
                  ? 'border-primary shadow-lg shadow-primary/10'
                  : 'border-border'
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={c.image || '/placeholder.svg'}
                  alt={`Aula de kitesurf nível ${c.level}`}
                  className={`h-full w-full object-cover ${c.imagePosition}`}
                />
                {c.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    Mais procurado
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-2xl font-700 uppercase tracking-wide">
                  {c.level}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{c.duration}</span>
                  <span aria-hidden>•</span>
                  <span className="text-accent">{c.price}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={c.featured ? 'default' : 'outline'}
                  className="mt-6 w-full"
                >
                  <a
                    href={whatsappLink(
                      `Olá! Tenho interesse nas aulas de nível ${c.level} na TKS Kite School.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero esse nível
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

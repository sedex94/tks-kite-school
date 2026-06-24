import { MapPin, Wind, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site, whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section id="topo" className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/images/hero-kite.jpg"
        alt="Kitesurfista saltando sobre o mar ao pôr do sol"
        className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{site.location}</span>
          </div>

          <h1 className="font-heading text-5xl font-700 uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Sinta a força do vento e voe sobre o mar
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            A TKS Kite School ensina kitesurf com segurança em um dos melhores
            spots de vento do Brasil. Do primeiro contato com a pipa às manobras
            avançadas, a gente te leva pra água.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group"
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
              Agendar primeira aula
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card/40 backdrop-blur-sm"
              render={<a href="#ventos" />}
            >
              <Wind className="mr-1 h-4 w-4" />
              Ver previsão de ventos
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: '+10', label: 'Anos de experiência' },
              { value: '+500', label: 'Alunos formados' },
              { value: '100%', label: 'Foco em segurança' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl font-700 text-primary">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

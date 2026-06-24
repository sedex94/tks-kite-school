'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

// Troque os "youtubeId" pelos IDs reais dos vídeos da escola
const videos = [
  {
    title: 'Primeira aula na água',
    description: 'Acompanhe um aluno iniciante dando os primeiros bordos.',
    thumb: '/images/lesson-beginner.png',
    youtubeId: 'ScMzIvxBSi4',
  },
  {
    title: 'Manobras e saltos em Cabo Frio',
    description: 'O melhor do nosso spot nos dias de vento forte.',
    thumb: '/images/lesson-advanced.png',
    youtubeId: 'ScMzIvxBSi4',
  },
  {
    title: 'Um dia na TKS Kite School',
    description: 'A estrutura, a equipe e a vibe da escola.',
    thumb: '/images/gallery-1.png',
    youtubeId: 'ScMzIvxBSi4',
  },
]

export function VideosSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="videos" className="bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-600 uppercase tracking-[0.2em] text-primary">
            Vídeos
          </p>
          <h2 className="mt-3 font-heading text-4xl font-700 uppercase leading-tight tracking-tight text-balance sm:text-5xl">
            Veja a adrenalina em movimento
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Aulas, manobras e o dia a dia da escola direto na água.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <div
              key={v.title}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-video w-full">
                {active === i ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group relative h-full w-full"
                    aria-label={`Reproduzir vídeo: ${v.title}`}
                  >
                    <img
                      src={v.thumb || '/placeholder.svg'}
                      alt={v.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-background/40 transition-colors group-hover:bg-background/20">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-600 uppercase tracking-wide">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

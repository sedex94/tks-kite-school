'use client'

import useSWR from 'swr'
import { Navigation, Wind, RefreshCw, AlertCircle } from 'lucide-react'
import { site } from '@/lib/site'

type Forecast = {
  hourly: {
    time: string[]
    temperature_2m: number[]
    wind_speed_10m: number[]
    wind_gusts_10m: number[]
    wind_direction_10m: number[]
  }
}

const API_URL =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${site.coords.lat}&longitude=${site.coords.lon}` +
  `&hourly=temperature_2m,wind_speed_10m,wind_gusts_10m,wind_direction_10m` +
  `&wind_speed_unit=kn&timezone=America%2FSao_Paulo&forecast_days=3`

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error('Falha ao carregar a previsão')
    return r.json() as Promise<Forecast>
  })

const HOURS = [6, 9, 12, 15, 18, 21]

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

function degToCompass(deg: number) {
  const dirs = [
    'N',
    'NE',
    'L',
    'SE',
    'S',
    'SO',
    'O',
    'NO',
  ]
  return dirs[Math.round(deg / 45) % 8]
}

// Cores no estilo WindGuru: fraco -> forte
function windColor(kn: number) {
  if (kn < 8) return 'bg-secondary text-muted-foreground'
  if (kn < 12) return 'bg-chart-4/30 text-foreground'
  if (kn < 16) return 'bg-chart-4/60 text-foreground'
  if (kn < 20) return 'bg-primary/70 text-primary-foreground'
  if (kn < 25) return 'bg-accent/80 text-accent-foreground'
  if (kn < 30) return 'bg-accent text-accent-foreground'
  return 'bg-destructive text-foreground'
}

type Slot = {
  hour: number
  wind: number
  gust: number
  dir: number
  temp: number
}
type Day = { label: string; date: string; slots: Slot[] }

function buildDays(data: Forecast): Day[] {
  const { time, wind_speed_10m, wind_gusts_10m, wind_direction_10m, temperature_2m } =
    data.hourly
  const map = new Map<string, Day>()

  time.forEach((t, i) => {
    const d = new Date(t)
    const hour = d.getHours()
    if (!HOURS.includes(hour)) return
    const key = t.slice(0, 10)
    if (!map.has(key)) {
      map.set(key, {
        label: `${WEEKDAYS[d.getDay()]} ${String(d.getDate()).padStart(2, '0')}/${String(
          d.getMonth() + 1,
        ).padStart(2, '0')}`,
        date: key,
        slots: [],
      })
    }
    map.get(key)!.slots.push({
      hour,
      wind: Math.round(wind_speed_10m[i]),
      gust: Math.round(wind_gusts_10m[i]),
      dir: wind_direction_10m[i],
      temp: Math.round(temperature_2m[i]),
    })
  })

  return Array.from(map.values()).slice(0, 3)
}

function Row({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="sticky left-0 z-10 flex w-24 shrink-0 items-center bg-card px-3 text-xs font-medium text-muted-foreground sm:w-28">
        {label}
      </div>
      <div className="flex">{children}</div>
    </div>
  )
}

function Cell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex h-10 w-12 shrink-0 items-center justify-center border-l border-border/50 text-sm sm:w-14 ${className}`}
    >
      {children}
    </div>
  )
}

export function WindForecast() {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    API_URL,
    fetcher,
    { revalidateOnFocus: false, refreshInterval: 1000 * 60 * 30 },
  )

  const days = data ? buildDays(data) : []

  return (
    <section id="ventos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-600 uppercase tracking-[0.2em] text-primary">
              Previsão de ventos
            </p>
            <h2 className="mt-3 font-heading text-4xl font-700 uppercase leading-tight tracking-tight text-balance sm:text-5xl">
              Confira as condições antes de cair na água
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Dados em tempo real para {site.location}. Velocidade e rajadas em
              nós (kn), direção do vento e temperatura.
            </p>
          </div>
          <button
            type="button"
            onClick={() => mutate()}
            className="inline-flex items-center gap-2 self-start rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
          >
            <RefreshCw
              className={`h-4 w-4 ${isValidating ? 'animate-spin' : ''}`}
            />
            Atualizar
          </button>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          {isLoading && (
            <div className="flex items-center justify-center gap-3 py-20 text-muted-foreground">
              <RefreshCw className="h-5 w-5 animate-spin" />
              Carregando previsão...
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <p className="text-muted-foreground">
                Não foi possível carregar a previsão agora.
              </p>
              <button
                type="button"
                onClick={() => mutate()}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {!isLoading && !error && (
            <div className="divide-y divide-border">
              {days.map((day) => (
                <div key={day.date} className="overflow-x-auto">
                  <div className="min-w-max">
                    {/* Cabeçalho do dia */}
                    <div className="flex bg-secondary/60">
                      <div className="sticky left-0 z-10 flex w-24 shrink-0 items-center bg-secondary px-3 py-2 font-heading text-sm font-600 uppercase tracking-wide sm:w-28">
                        {day.label}
                      </div>
                      <div className="flex">
                        {day.slots.map((s) => (
                          <Cell
                            key={s.hour}
                            className="font-medium text-muted-foreground"
                          >
                            {String(s.hour).padStart(2, '0')}h
                          </Cell>
                        ))}
                      </div>
                    </div>

                    {/* Vento */}
                    <Row label="Vento (kn)">
                      {day.slots.map((s) => (
                        <Cell
                          key={s.hour}
                          className={`font-semibold ${windColor(s.wind)}`}
                        >
                          {s.wind}
                        </Cell>
                      ))}
                    </Row>

                    {/* Rajadas */}
                    <Row label="Rajadas (kn)">
                      {day.slots.map((s) => (
                        <Cell
                          key={s.hour}
                          className={`${windColor(s.gust)} opacity-90`}
                        >
                          {s.gust}
                        </Cell>
                      ))}
                    </Row>

                    {/* Direção */}
                    <Row label="Direção">
                      {day.slots.map((s) => (
                        <Cell key={s.hour}>
                          <div className="flex flex-col items-center justify-center gap-0.5">
                            <Navigation
                              className="h-3.5 w-3.5 text-primary"
                              style={{
                                transform: `rotate(${s.dir + 180}deg)`,
                              }}
                              aria-hidden
                            />
                            <span className="text-[10px] text-muted-foreground">
                              {degToCompass(s.dir)}
                            </span>
                          </div>
                        </Cell>
                      ))}
                    </Row>

                    {/* Temperatura */}
                    <Row label="Temp (°C)">
                      {day.slots.map((s) => (
                        <Cell key={s.hour} className="text-muted-foreground">
                          {s.temp}°
                        </Cell>
                      ))}
                    </Row>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Legenda */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary" />
            Intensidade do vento:
          </span>
          {[
            { l: 'Fraco (<12kn)', c: 'bg-chart-4/30' },
            { l: 'Bom (12-20kn)', c: 'bg-primary/70' },
            { l: 'Forte (20-30kn)', c: 'bg-accent' },
            { l: 'Muito forte (30kn+)', c: 'bg-destructive' },
          ].map((i) => (
            <span key={i.l} className="inline-flex items-center gap-2">
              <span className={`h-3 w-5 rounded-sm ${i.c}`} />
              {i.l}
            </span>
          ))}
          <span className="ml-auto">Fonte: Open-Meteo</span>
        </div>
      </div>
    </section>
  )
}

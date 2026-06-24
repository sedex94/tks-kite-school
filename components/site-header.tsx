'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks, site, whatsappLink } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#topo" className="flex items-center gap-2.5">
          <img
            src="/images/tks-logo.png"
            alt="Logo TKS Tavinho Kitesurf"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-heading text-xl font-700 uppercase leading-none tracking-wide">
            TKS<span className="text-primary"> Kite</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a
              href={whatsappLink(
                'Olá! Quero saber mais sobre as aulas da TKS Kite School.',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar aula
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-3">
              <a
                href={whatsappLink(
                  'Olá! Quero saber mais sobre as aulas da TKS Kite School.',
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar aula no {site.whatsappLabel}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

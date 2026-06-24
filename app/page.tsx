import { MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ClassesSection } from '@/components/classes-section'
import { WindForecast } from '@/components/wind-forecast'
import { VideosSection } from '@/components/videos-section'
import { GallerySection } from '@/components/gallery-section'
import { SponsorsSection } from '@/components/sponsors-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { whatsappLink } from '@/lib/site'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ClassesSection />
        <WindForecast />
        <VideosSection />
        <GallerySection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <SiteFooter />

      {/* Botão flutuante de WhatsApp */}
      <a
        href={whatsappLink('Olá! Quero saber mais sobre as aulas da TKS Kite School.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  )
}

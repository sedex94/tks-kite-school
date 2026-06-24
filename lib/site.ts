// Dados centrais da TKS Kite School. Edite aqui para alterar contatos e local.
export const site = {
  name: 'TKS Kite School',
  tagline: 'Escola de Kitesurf',
  location: 'Cabo Frio — RJ',
  // Coordenadas usadas na previsão de ventos (Praia do Pero / Cabo Frio)
  coords: { lat: -22.8483, lon: -41.9889 },
  // WhatsApp no formato internacional (sem espaços) para o link wa.me
  whatsapp: '5522999332145',
  whatsappLabel: '(22) 99933-2145',
  // Troque pelo e-mail real da escola
  email: 'contato@tkskite.com.br',
  instagram: 'https://instagram.com',
} as const

export const navLinks = [
  { href: '#aulas', label: 'Aulas' },
  { href: '#ventos', label: 'Ventos' },
  { href: '#videos', label: 'Vídeos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#patrocinadores', label: 'Patrocinadores' },
  { href: '#contato', label: 'Contato' },
] as const

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

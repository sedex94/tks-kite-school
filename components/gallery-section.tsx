const images = [
  { src: '/images/hero-kite.jpg', alt: 'Aluno e instrutor TKS na água com pipa no céu azul', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery-1.jpg', alt: 'Instrutor TKS ensinando controle de pipa em terra', span: '' },
  { src: '/images/gallery-2.jpg', alt: 'Aluno avançado navegando com acompanhamento do instrutor', span: '' },
  { src: '/images/gallery-3.jpg', alt: 'Criança aprendendo kitesurf com o instrutor TKS', span: 'md:col-span-2' },
  { src: '/images/lesson-intermediate.jpg', alt: 'Aula prática na lagoa de Cabo Frio', span: '' },
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-600 uppercase tracking-[0.2em] text-primary">
            Galeria
          </p>
          <h2 className="mt-3 font-heading text-4xl font-700 uppercase leading-tight tracking-tight text-balance sm:text-5xl">
            Momentos na água
          </h2>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl border border-border ${img.span}`}
            >
              <img
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect, useRef } from "react"
import { HighlightedText } from "./HighlightedText"

const priceCategories = [
  {
    id: 1,
    category: "Диагностика",
    services: [
      { name: "Компьютерная диагностика", price: "от 500 ₽" },
      { name: "Диагностика ходовой части", price: "от 800 ₽" },
      { name: "Диагностика тормозной системы", price: "от 600 ₽" },
      { name: "Диагностика электрики", price: "от 700 ₽" },
    ],
  },
  {
    id: 2,
    category: "Замена масла и жидкостей",
    services: [
      { name: "Замена моторного масла + фильтр", price: "от 800 ₽" },
      { name: "Замена тормозной жидкости", price: "от 900 ₽" },
      { name: "Замена охлаждающей жидкости", price: "от 1 000 ₽" },
      { name: "Замена масла в АКПП", price: "от 2 500 ₽" },
    ],
  },
  {
    id: 3,
    category: "Ходовая часть",
    services: [
      { name: "Замена амортизатора (1 шт.)", price: "от 1 200 ₽" },
      { name: "Замена шаровой опоры", price: "от 800 ₽" },
      { name: "Замена рычага подвески", price: "от 1 500 ₽" },
      { name: "Развал-схождение", price: "от 1 500 ₽" },
    ],
  },
  {
    id: 4,
    category: "Шиномонтаж",
    services: [
      { name: "Шиномонтаж R13–R15 (4 колеса)", price: "от 1 200 ₽" },
      { name: "Шиномонтаж R16–R18 (4 колеса)", price: "от 1 600 ₽" },
      { name: "Балансировка (4 колеса)", price: "от 800 ₽" },
      { name: "Хранение шин (сезон)", price: "от 2 000 ₽" },
    ],
  },
]

const promos = [
  {
    title: "Сезонная замена шин",
    desc: "Шиномонтаж + балансировка 4 колёс",
    badge: "−15%",
    color: "bg-orange-50 border-orange-200",
    badgeColor: "bg-orange-400 text-white",
  },
  {
    title: "ТО под ключ",
    desc: "Замена масла + диагностика + проверка ходовой",
    badge: "−20%",
    color: "bg-foreground text-white border-foreground",
    badgeColor: "bg-white text-foreground",
  },
  {
    title: "Первое ТО",
    desc: "Скидка для новых клиентов на первое обслуживание",
    badge: "−10%",
    color: "bg-orange-50 border-orange-200",
    badgeColor: "bg-orange-400 text-white",
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [revealedPromos, setRevealedPromos] = useState<Set<number>>(new Set())
  const promoRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = promoRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setRevealedPromos((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.2 },
    )

    promoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Прозрачные цены</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              <HighlightedText>Стоимость</HighlightedText> услуг
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Окончательная цена рассчитывается после диагностики. Никаких скрытых доплат.
          </p>
        </div>

        {/* Photo banner */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://cdn.poehali.dev/projects/4e1b9fea-ef4e-4d1f-89e2-54574e221934/files/7515db3b-f044-4ca2-a378-c6ba776f9eb1.jpg"
              alt="Ремонт автомобиля"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://cdn.poehali.dev/projects/4e1b9fea-ef4e-4d1f-89e2-54574e221934/files/c97c1d43-ebd0-4aa6-8337-33b5ea27f037.jpg"
              alt="Диагностика автомобиля"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://cdn.poehali.dev/projects/4e1b9fea-ef4e-4d1f-89e2-54574e221934/files/02f138a8-f448-46fc-bf76-f7c57d046cf0.jpg"
              alt="Шиномонтаж"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {priceCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 text-sm transition-all duration-200 border ${
                activeCategory === i
                  ? "bg-foreground text-white border-foreground"
                  : "bg-white text-foreground border-border hover:border-foreground"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Price table */}
        <div className="bg-white border border-border mb-16">
          {priceCategories[activeCategory].services.map((service, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-4 border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
            >
              <span className="text-foreground">{service.name}</span>
              <span className="font-medium text-foreground">{service.price}</span>
            </div>
          ))}
        </div>

        {/* Promos */}
        <div>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">Акции и спецпредложения</p>
          <div className="grid md:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
              <div
                key={i}
                ref={(el) => (promoRefs.current[i] = el)}
                className={`border p-8 transition-all duration-700 ${promo.color} ${
                  revealedPromos.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className={`inline-block text-xs px-3 py-1 font-bold mb-4 ${promo.badgeColor}`}>
                  {promo.badge}
                </span>
                <h3 className="text-xl font-medium mb-2">{promo.title}</h3>
                <p className={`text-sm leading-relaxed ${promo.color.includes("foreground") ? "text-white/70" : "text-muted-foreground"}`}>
                  {promo.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
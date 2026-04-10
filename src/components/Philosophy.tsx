import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Основаны в 2010 году",
    description:
      "Более 14 лет на рынке автосервисных услуг. За это время мы обслужили свыше 15 000 автомобилей и завоевали доверие тысяч клиентов в городе.",
  },
  {
    title: "Команда сертифицированных мастеров",
    description:
      "В нашем штате работают механики с опытом от 5 до 20 лет. Каждый мастер регулярно проходит обучение и имеет сертификаты от ведущих автопроизводителей.",
  },
  {
    title: "Современное оборудование",
    description:
      "Используем профессиональное диагностическое оборудование последнего поколения: стенды развал-схождения, балансировочные стенды, компьютерную диагностику всех марок авто.",
  },
  {
    title: "Сертификаты и лицензии",
    description:
      "Имеем все необходимые лицензии и допуски. Работаем по официальным регламентам технического обслуживания. Даём письменную гарантию на все виды выполненных работ.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О нас</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Сервис с
              <br />
              <HighlightedText>душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/4e1b9fea-ef4e-4d1f-89e2-54574e221934/files/37863e82-fbdb-427b-b5a0-5a50edd85a55.jpg"
                alt="Наш автосервис"
                className="opacity-90 relative z-10 w-full rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Мы не просто ремонтируем автомобили — мы возвращаем уверенность на дороге. Каждая машина для нас как собственная.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
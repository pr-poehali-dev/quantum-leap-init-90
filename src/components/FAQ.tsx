import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Нужна ли предварительная запись?",
    answer:
      "Мы принимаем как по предварительной записи, так и без неё. Однако запись позволяет гарантировать свободный подъёмник в удобное для вас время и сократить ожидание. Записаться можно через форму на сайте или по телефону.",
  },
  {
    question: "Сколько времени займёт ремонт?",
    answer:
      "Время зависит от вида работ. Замена масла — 30–40 минут, шиномонтаж — около часа, ремонт ходовой — от 2 до 4 часов. При сложном ремонте мы всегда предупреждаем заранее и согласовываем сроки.",
  },
  {
    question: "Даёте ли гарантию на работы?",
    answer:
      "Да, мы даём письменную гарантию на все виды выполненных работ. Гарантийный срок зависит от типа ремонта — как правило, от 3 до 12 месяцев. На установленные запчасти действует гарантия производителя.",
  },
  {
    question: "Работаете ли вы с гарантийными автомобилями?",
    answer:
      "Да. Мы проводим ТО по заводскому регламенту с записью в сервисную книжку. Это не нарушает гарантию дилера, поскольку мы используем оригинальные или сертифицированные аналоги запчастей.",
  },
  {
    question: "Какие марки автомобилей вы обслуживаете?",
    answer:
      "Работаем со всеми марками: отечественными (ВАЗ, ГАЗ, УАЗ) и иномарками (Toyota, Kia, Hyundai, Volkswagen, BMW, Mercedes, Ford и другие). Наше оборудование позволяет диагностировать и ремонтировать любые современные автомобили.",
  },
  {
    question: "Можно ли остаться и подождать во время ремонта?",
    answer:
      "Конечно! У нас есть комфортная зона ожидания с Wi-Fi, кофе и чаем. Если ремонт займёт больше времени, мы можем организовать доставку вас домой или в офис.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы и ответы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

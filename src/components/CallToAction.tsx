import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA text + contacts */}
          <div>
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Записаться онлайн</p>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
              Запишитесь
              <br />
              <HighlightedText>прямо сейчас</HighlightedText>
            </h2>

            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 max-w-md">
              Оставьте заявку — мы перезвоним в течение 15 минут и подберём удобное время.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-2">Телефон</p>
                <a href="tel:+74951234567" className="text-xl font-medium hover:text-primary-foreground/80 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-2">E-mail</p>
                <a href="mailto:info@autoservice.ru" className="text-xl font-medium hover:text-primary-foreground/80 transition-colors">
                  info@autoservice.ru
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-2">Адрес</p>
                <p className="text-xl font-medium">г. Москва, ул. Автомобильная, 12</p>
              </div>
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-2">Режим работы</p>
                <p className="font-medium">Пн–Пт: 8:00 – 20:00</p>
                <p className="font-medium">Сб–Вс: 9:00 – 18:00</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex items-start">
            {submitted ? (
              <div className="w-full border border-primary-foreground/20 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-medium mb-3">Заявка принята!</h3>
                <p className="text-primary-foreground/70">Мы перезвоним вам в течение 15 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                  <label className="block text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-2">
                    Что нужно сделать?
                  </label>
                  <textarea
                    placeholder="Опишите проблему или выберите услугу..."
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full bg-transparent border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group w-full"
                >
                  Записаться онлайн
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-primary-foreground/40 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

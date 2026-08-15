import { motion } from "framer-motion"
import { Map, Sparkles, CalendarCheck, Star } from "lucide-react"
import { FeatureCard } from "@/components/shared/FeatureCard"

const features = [
  {
    icon: Map,
    title: "Descubra e filtre",
    description:
      "Mapa e lista de experiências pela cidade. Filtre por categoria, preço, idioma do prestador e avaliação até achar o passeio certo.",
  },
  {
    icon: Sparkles,
    title: "Concierge Solê",
    description:
      "Diga seus interesses e a Solê encontra as experiências perfeitas — por voz ou texto, sem digitar formulários.",
  },
  {
    icon: CalendarCheck,
    title: "Reserve e pague",
    description:
      "Escolha data e número de pessoas, pague no Pix ou cartão e receba a confirmação. Tudo dentro do app.",
  },
  {
    icon: Star,
    title: "Avaliações reais",
    description:
      "Notas, distribuição por estrelas, tags e fotos de quem já foi — para você reservar com confiança.",
  },
]

export function Features() {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow mb-4 block">O app do turista · grátis</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-4">
            Todas as experiências
            <br />
            <span className="text-sea-500">num só app</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Do descobrir ao pagar — e disponível em português, inglês e espanhol.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

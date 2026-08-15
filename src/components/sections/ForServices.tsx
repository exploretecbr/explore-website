import { motion } from "framer-motion"
import {
  CalendarClock,
  RefreshCw,
  Users,
  ClipboardList,
  ShieldCheck,
  Star,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Rule {
  icon: LucideIcon
  tone: "sea" | "sunset" | "sand"
  title: string
  description: string
}

const rules: Rule[] = [
  {
    icon: CalendarClock,
    tone: "sea",
    title: "Reserva com antecedência",
    description:
      "Antecedência mínima e máxima definidas por passeio — sem reservas em cima da hora.",
  },
  {
    icon: RefreshCw,
    tone: "sunset",
    title: "Cancelamento & remarcação",
    description:
      "Políticas flexível, moderada ou rígida, com reembolso automático por clima ou segurança.",
  },
  {
    icon: Users,
    tone: "sand",
    title: "Faixa etária & público",
    description:
      "Idade mínima e restrições de público (crianças, idosos, condições específicas) por experiência.",
  },
  {
    icon: ClipboardList,
    tone: "sea",
    title: "Orientações do passeio",
    description:
      "O que levar, ponto de encontro e informações práticas — preenchidos pelo prestador em cada passeio.",
  },
  {
    icon: ShieldCheck,
    tone: "sunset",
    title: "Segurança & credenciamento",
    description:
      "Identidade verificada, Cadastur, seguro e CNH compõem o nível de confiança do prestador.",
  },
  {
    icon: Star,
    tone: "sand",
    title: "Avaliações que engajam",
    description:
      "Nota, distribuição por estrelas, tags e fotos — visíveis em cada passeio e no perfil do prestador.",
  },
]

const toneMap = {
  sea: "bg-sea-100 text-sea-600 group-hover:bg-sea-200",
  sunset: "bg-sunset-100 text-sunset-500 group-hover:bg-sunset-200",
  sand: "bg-sand-100 text-sand-600 group-hover:bg-sand-200",
}

export function ForServices() {
  return (
    <section id="confianca" className="section bg-white overflow-hidden scroll-mt-[72px]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow mb-4 block">Confiança &amp; regras</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-4">
            Feito para serviços,
            <br />
            <span className="text-sunset-500">não produtos</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Um passeio muda com o clima, o público e imprevistos. O Explore trata isso com regras
            claras — como todo bom serviço deve ter.
          </p>
        </motion.div>

        {/* Rules grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-neutral-50 rounded-[var(--radius-lg)] p-6 border border-neutral-200 hover:border-sunset-500/30 hover:shadow-[var(--shadow-md)] transition-all"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] mb-4 transition-colors ${toneMap[rule.tone]}`}
              >
                <rule.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">{rule.title}</h3>
              <p className="text-neutral-600 text-base leading-relaxed">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

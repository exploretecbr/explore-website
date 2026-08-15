import { motion } from "framer-motion"
import { LayoutGrid, Inbox, Wallet, ArrowRight, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/shared/PhoneMockup"
import partnerLogin from "@/assets/images/partners/login.png"
import partnerDashboard from "@/assets/images/partners/dashboard.png"
import partnerOrders from "@/assets/images/partners/orders.png"
import partnerAgenda from "@/assets/images/partners/agenda.png"
import partnerPayouts from "@/assets/images/partners/payouts.png"

const tour = [
  { src: partnerDashboard, label: "Painel de vendas" },
  { src: partnerOrders, label: "Pedidos" },
  { src: partnerAgenda, label: "Agenda" },
  { src: partnerPayouts, label: "Repasses" },
]

const benefits = [
  {
    icon: LayoutGrid,
    title: "Cadastre e gerencie experiências",
    description:
      "Fotos, preço, disponibilidade e agenda. Publique um passeio em minutos e edite quando quiser.",
  },
  {
    icon: Inbox,
    title: "Receba e responda reservas",
    description:
      "Aceite, recuse ou converse com o turista pelo chat — tudo com identidade verificada.",
  },
  {
    icon: Wallet,
    title: "Receba via Pix",
    description: "Repasses semanais direto na sua conta. Sem burocracia.",
  },
]

export function Partners() {
  return (
    <section
      id="parceiros"
      className="section bg-ink text-white overflow-hidden scroll-mt-[72px] relative"
    >
      {/* Decorative glows */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,94,55,0.20) 0%, rgba(236,94,55,0) 65%)",
          transform: "translate(30%, -40%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="text-sm font-bold tracking-widest uppercase flex items-center gap-2 mb-4"
              style={{ color: "var(--color-sunset-300)" }}
            >
              <BadgeCheck className="w-4 h-4" />
              O app do parceiro · para prestadores locais
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-6">
              Venda seus passeios
              <br />
              <span style={{ color: "var(--color-sunset-400)" }}>sem complicação</span>
            </h2>

            <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
              O Explore Partners dá ao prestador local uma vitrine, uma agenda e um caixa — tudo em um app.
              Você cuida da experiência; a gente cuida do resto.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-md)] bg-white/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6" style={{ color: "var(--color-sunset-300)" }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.68)" }}>{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <a href="#contato-parceiro">
                <Button variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Cadastre seus passeios
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Phone with partner app video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <PhoneMockup>
              <video
                src="/videos/partner-app.mp4"
                poster={partnerLogin}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </PhoneMockup>
          </motion.div>
        </div>

        {/* App tour strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
          {tour.map((shot, index) => (
            <motion.figure
              key={shot.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-full rounded-[var(--radius-lg)] overflow-hidden border border-white/10 shadow-[var(--shadow-lg)] bg-white/5">
                <img
                  src={shot.src}
                  alt={`Explore Partners — ${shot.label}`}
                  className="w-full h-auto object-cover object-top aspect-[9/14]"
                />
              </div>
              <figcaption
                className="mt-3 text-sm font-semibold"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                {shot.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

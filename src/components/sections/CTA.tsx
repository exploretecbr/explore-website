import { motion } from "framer-motion"
import { Building, BadgeCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadAppButton } from "@/components/shared/DownloadAppButton"
import { SoleAvatar } from "@/components/shared/SoleAvatar"

export function CTA() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Main CTA - For tourists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-ink rounded-[var(--radius-2xl)] p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden mb-8"
        >
          {/* Background effects - inverted positions */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-sunset-700/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative z-10">
            {/* Sole avatar */}
            <div className="flex justify-center mb-8">
              <SoleAvatar size="lg" />
            </div>

            <h2
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-16"
              style={{ color: '#EC5E37' }}
            >
              Sua próxima experiência
              <br />
              começa aqui
            </h2>

            <div className="flex justify-center mt-10">
              <DownloadAppButton size="lg" iconClassName="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* Secondary CTAs - Guides + Cities */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Prestadores */}
          <motion.div
            id="contato-parceiro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-sunset-50 rounded-[var(--radius-xl)] p-6 md:p-8 flex flex-col gap-5 scroll-mt-24"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-sunset-100 flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-7 h-7 text-sunset-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink mb-1">
                  É prestador local?
                </h3>
                <p className="text-neutral-600">
                  Cadastre seus passeios e comece a receber reservas.
                </p>
              </div>
            </div>
            <a href="mailto:contato@explore.tec.br">
              <Button variant="primary" className="w-full" iconRight={<ArrowRight className="w-4 h-4" />}>
                Virar parceiro
              </Button>
            </a>
          </motion.div>

          {/* Cidades / IGRs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-sea-50 rounded-[var(--radius-xl)] p-6 md:p-8 flex flex-col gap-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-sea-100 flex items-center justify-center flex-shrink-0">
                <Building className="w-7 h-7 text-sea-600" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink mb-1">
                  É gestor público ou IGR?
                </h3>
                <p className="text-neutral-600">
                  Leve o Explore para o seu município e acesse o painel de inteligência.
                </p>
              </div>
            </div>
            <a href="mailto:contato@explore.tec.br">
              <Button variant="secondary" className="w-full" iconRight={<ArrowRight className="w-4 h-4" />}>
                Fale conosco
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
